# PowerShell script to start CleanExpert React Development Server
Write-Host "Starting CleanExpert React Development Server..." -ForegroundColor Green
Write-Host ""
Write-Host "The server will be available at: http://localhost:3000" -ForegroundColor Yellow
Write-Host "Press Ctrl+C to stop the server" -ForegroundColor Yellow
Write-Host ""

# Change to the script directory
Set-Location $PSScriptRoot

# Start the development server
npm run dev




