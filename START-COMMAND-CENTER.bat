@echo off
cd /d "%~dp0"
start "B7 FI Local Server" /min py -m http.server 8000
ping -n 3 127.0.0.1 >nul
start http://localhost:8000
