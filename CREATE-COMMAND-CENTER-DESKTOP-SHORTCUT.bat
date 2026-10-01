@echo off
powershell -NoProfile -Command "$s=(New-Object -COM WScript.Shell).CreateShortcut([Environment]::GetFolderPath('Desktop')+'\B7 FI Command Center V8.lnk');$s.TargetPath='%~dp0START-COMMAND-CENTER.bat';$s.WorkingDirectory='%~dp0';$s.IconLocation='%~dp0Command-Center.ico';$s.Save()"
echo Shortcut created.
pause
