$ErrorActionPreference = "SilentlyContinue"
$projectDir = Split-Path -Parent $MyInvocation.MyCommand.Path
$port = 8090

$portCheck = Test-NetConnection -ComputerName "127.0.0.1" -Port $port -WarningAction SilentlyContinue
if (-not $portCheck.TcpTestSucceeded) {
  $pythonCommand = Get-Command python -ErrorAction SilentlyContinue
  if (-not $pythonCommand) { $pythonCommand = Get-Command py -ErrorAction SilentlyContinue }
  if (-not $pythonCommand) {
    Write-Output "Python was not found. Please install Python or start the local server manually."
    exit 1
  }
  Start-Process -FilePath $pythonCommand.Source -ArgumentList "-m", "http.server", $port -WorkingDirectory $projectDir -WindowStyle Hidden
  Start-Sleep -Milliseconds 900
}

Start-Process "http://127.0.0.1:$port"
