@echo off
setlocal
pushd "%~dp0" || (echo Cannot access Command Center folder. & pause & exit /b 1)
title B7 FI COMMAND CENTER V12.0.1 - NAVIGATION RECOVERY TEST
echo B7 FI COMMAND CENTER V12.0.1 - NAVIGATION RECOVERY TEST
echo ----------------------------------------------------
echo Application folder: %CD%
echo Starting diagnostic server on localhost:5500 ...
echo.
where py >nul 2>nul
if not errorlevel 1 (
  py -3 -u server.py
  goto done
)
where python >nul 2>nul
if not errorlevel 1 (
  python -u server.py
  goto done
)
echo ERROR: Python 3 was not found. Contact IT or use an approved local web server.
pause
:done
popd
