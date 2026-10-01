@echo off
setlocal
cd /d "%~dp0"
set "B7LOG=%TEMP%\B7-FI-Command-Center-server.log"
echo ============================================================
echo B7 FI COMMAND CENTER V7.7.0 - QUARTER TRANSITION STABILITY
echo ============================================================
echo Local server: http://localhost:5500/
echo Routine browser GET messages are hidden from this window.
echo Server log: %B7LOG%
echo Keep this window open while using the Command Center.
echo.
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
