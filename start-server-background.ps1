# PowerShell script to start CleanExpert React Development Server in background
Write-Host "Starting CleanExpert React Development Server in background..." -ForegroundColor Green
Write-Host "The server will be available at: http://localhost:3000" -ForegroundColor Yellow
Write-Host ""

# Change to the script directory
Set-Location $PSScriptRoot

# Start the development server in background
Start-Process -FilePath "npm" -ArgumentList "run", "dev" -WindowStyle Hidden

Write-Host "Server started in background. Check http://localhost:3000" -ForegroundColor Green
Write-Host "To stop the server, use: Get-Process | Where-Object {$_.ProcessName -eq 'node'} | Stop-Process" -ForegroundColor Yellow




