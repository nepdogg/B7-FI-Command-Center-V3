@echo off
setlocal
cd /d "%~dp0"
set "B7LOG=%TEMP%\B7-FI-Command-Center-server.log"
echo ============================================================
echo B7 FI COMMAND CENTER V11.17.7 - DATA SAFETY TEST
echo ============================================================
echo Serving folder: %CD%
echo Local server: http://localhost:5500/
echo Routine browser GET messages are hidden from this window.
echo Server log: %B7LOG%
echo Keep this window open while using the Command Center.
echo.
REM Never silently show an older app already running on port 5500.
powershell -NoProfile -Command "try { $c = New-Object System.Net.Sockets.TcpClient('127.0.0.1',5500); $c.Close(); exit 0 } catch { exit 1 }" >nul 2>nul
if not errorlevel 1 (
  echo ERROR: Port 5500 is already in use. Close the OLD Command Center server window first.
  echo This launcher will NOT open an existing server that might serve another version.
  pause
  exit /b 1
)
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:5500/
  py -m http.server 5500 --bind localhost > "%B7LOG%" 2>&1
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:5500/
  python -m http.server 5500 --bind localhost > "%B7LOG%" 2>&1
  goto :eof
)
echo Python was not found on this computer.
echo Serve THIS folder on port 5500 and open http://localhost:5500/
pause
