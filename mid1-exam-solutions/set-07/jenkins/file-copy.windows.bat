@echo off
echo Hello from Jenkins > "%WORKSPACE%\test.txt"
if not exist "C:\inetpub\wwwroot\Devops" mkdir "C:\inetpub\wwwroot\Devops"
copy /Y "%WORKSPACE%\test.txt" "C:\inetpub\wwwroot\Devops\test.txt"
echo File copied successfully.
