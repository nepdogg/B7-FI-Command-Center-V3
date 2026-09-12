@echo off
setlocal
cd /d "%~dp0"
echo ============================================================
echo B7 FI COMMAND CENTER V6.6.03 - PRESENTATION LEAD/ADMIN INTERACTION + MULTI-USER TEST
echo ============================================================
echo Starting local web server on http://localhost:5500/
echo Keep this window open while using the Command Center.
echo.
where py >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:5500/
  py -m http.server 5500 --bind localhost
  goto :eof
)
where python >nul 2>nul
if %errorlevel%==0 (
  start "" http://localhost:5500/
  python -m http.server 5500 --bind localhost
  goto :eof
)
echo Python was not found on this computer.
echo If your company PC has Visual Studio Code Live Server or another local web server,
echo serve THIS folder on port 5500 and open http://localhost:5500/
echo.
pause
