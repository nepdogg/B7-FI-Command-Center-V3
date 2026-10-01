@echo off
cd /d "%~dp0"
start "B7 FI Command Center V8" http://localhost:8000/
py -m http.server 8000
