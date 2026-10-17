@echo off
setlocal EnableExtensions
cd /d "%~dp0"
set "B7LOG=%TEMP%\B7-FI-Command-Center-server.log"
title B7 FI COMMAND CENTER V11.17.58 - STARTUP
 echo ============================================================
 echo B7 FI COMMAND CENTER V11.17.58 - TEST BUILD
 echo ============================================================
 echo Folder: %CD%
 echo URL: http://localhost:5500/
 echo Server log: %B7LOG%
 echo.
if not exist "index.html" (
 echo ERROR: index.html is missing. Extract the complete ZIP before launching.
 goto :failed
)
powershell -NoProfile -Command "try { $c = New-Object System.Net.Sockets.TcpClient('127.0.0.1',5500); $c.Close(); exit 0 } catch { exit 1 }" >nul 2>nul
if not errorlevel 1 (
 echo ERROR: Port 5500 is in use. Close the previous Command Center server.
 goto :failed
)
set "PYRUN="
where py >nul 2>nul
if not errorlevel 1 set "PYRUN=py"
if not defined PYRUN (
 where python >nul 2>nul
 if not errorlevel 1 set "PYRUN=python"
)
if not defined PYRUN (
 echo ERROR: Neither Python launcher 'py' nor 'python' is installed or available on PATH.
 echo Ask IT to install/approve Python or provide an approved local HTTP server.
 echo Opening index.html directly is not equivalent for Microsoft authentication.
 goto :failed
)
echo Starting local server using %PYRUN% ...
start "" "http://localhost:5500/"
%PYRUN% -m http.server 5500 --bind localhost > "%B7LOG%" 2>&1
set "B7EXIT=%errorlevel%"
echo.
echo ERROR: The local server exited with code %B7EXIT%.
echo Startup log: %B7LOG%
if exist "%B7LOG%" type "%B7LOG%"
:failed
echo.
echo Press any key to close this window. If contacting support, send the error text.
pause >nul
exit /b 1
