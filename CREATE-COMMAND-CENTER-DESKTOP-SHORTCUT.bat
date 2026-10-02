@echo off
setlocal
set "ROOT=%~dp0"
set "TARGET=%ROOT%START-COMMAND-CENTER.bat"
set "ICON=%ROOT%Command-Center.ico"
set "LINK=%USERPROFILE%\Desktop\Command Center.lnk"
powershell -NoProfile -ExecutionPolicy Bypass -Command "$ws=New-Object -ComObject WScript.Shell; $s=$ws.CreateShortcut('%LINK%'); $s.TargetPath='%TARGET%'; $s.WorkingDirectory='%ROOT%'; $s.IconLocation='%ICON%,0'; $s.Description='B7 FI Command Center'; $s.Save()"
if exist "%LINK%" (
  echo.
  echo Command Center desktop shortcut created successfully.
  echo You can now double-click "Command Center" on the desktop.
) else (
  echo.
  echo Shortcut creation did not complete. Run this file again as your normal Windows user.
)
pause
