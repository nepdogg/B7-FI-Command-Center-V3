@echo off
setlocal EnableExtensions
cd /d "%~dp0"
set "B7VERSION=V12.0.26"
set "B7LOG=%TEMP%\B7-FI-Command-Center-server.log"
title B7 FI COMMAND CENTER %B7VERSION% - STARTUP MONITOR
color 0B
echo ============================================================
echo B7 FI COMMAND CENTER %B7VERSION% - STARTUP MONITOR
echo ============================================================
echo [INFO] Folder: %CD%
echo [INFO] URL: http://localhost:5500/
echo [INFO] Server log: %B7LOG%
if not exist "index.html" (echo [ERROR] index.html is missing.& goto :failed)
echo [OK] Application entry file found.
powershell -NoProfile -Command "try { $c=New-Object System.Net.Sockets.TcpClient('127.0.0.1',5500); $c.Close(); exit 0 } catch { exit 1 }" >nul 2>nul
if not errorlevel 1 (echo [ERROR] Port 5500 is already in use. Close the previous server.& goto :failed)
echo [OK] Port 5500 available.
set "PYRUN="
where py >nul 2>nul
if not errorlevel 1 set "PYRUN=py"
if not defined PYRUN (where python >nul 2>nul & if not errorlevel 1 set "PYRUN=python")
if not defined PYRUN (echo [ERROR] Python is not available on PATH.& goto :failed)
echo [INFO] Starting local HTTP server using %PYRUN% ...
start "" "http://localhost:5500/"
echo [INFO] Browser launch requested. Microsoft sign-in and Lists status are verified in the browser.
echo [INFO] This window remains open while the server is running.
echo ------------------------------------------------------------
%PYRUN% -u -m http.server 5500 --bind localhost 2>&1
set "B7EXIT=%errorlevel%"
echo [ERROR] Server exited with code %B7EXIT%.
:failed
echo Press any key to close this window.
pause >nul
exit /b 1
