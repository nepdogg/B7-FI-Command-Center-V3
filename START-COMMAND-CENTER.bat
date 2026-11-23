@echo off
setlocal EnableExtensions
cd /d "%~dp0"
title FI COMMAND CENTER V14.0.35 - SERVER
color 0B
echo FI COMMAND CENTER V14.0.35
echo URL: http://localhost:5500/
if not exist "command-center-server.py" goto :missing
py -3 --version >nul 2>nul
if not errorlevel 1 goto :usepy
python --version >nul 2>nul
if not errorlevel 1 goto :usepython
echo [ERROR] A working Python installation was not found.
echo Install Python 3 or contact your IT support, then run this file again.
goto :finish
:usepy
py -3 -u "command-center-server.py"
goto :finish
:usepython
python -u "command-center-server.py"
goto :finish
:missing
echo [ERROR] command-center-server.py is missing.
echo Extract the complete ZIP to a normal folder before starting.
:finish
echo.
echo If the browser did not open, read the status messages above.
pause
endlocal
