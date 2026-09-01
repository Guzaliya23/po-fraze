$root = "C:\Users\user\po-fraze"
$port = 8766
$listener = [System.Net.Sockets.TcpListener]::new([System.Net.IPAddress]::Loopback, $port)
$listener.Start()
Write-Output "tcp-http on http://127.0.0.1:$port/"
$mime = @{
  ".html" = "text/html; charset=utf-8"
  ".css"  = "text/css; charset=utf-8"
  ".js"   = "text/javascript; charset=utf-8"
  ".svg"  = "image/svg+xml"
  ".ico"  = "image/x-icon"
  ".png"  = "image/png"
  ".txt"  = "text/plain; charset=utf-8"
  ".md"   = "text/plain; charset=utf-8"
}
while ($true) {
  $client = $listener.AcceptTcpClient()
  try {
    $stream = $client.GetStream()
    $stream.ReadTimeout = 5000
    $buffer = New-Object byte[] 8192
    $read = $stream.Read($buffer, 0, $buffer.Length)
    $req = [System.Text.Encoding]::ASCII.GetString($buffer, 0, [Math]::Max(0, $read))
    $line = ($req -split "`r`n")[0]
    $path = "/"
    if ($line -match "^(GET|HEAD)\s+(\S+)") {
      $path = [System.Uri]::UnescapeDataString($Matches[2])
    }
    if ($path -match "\?") { $path = $path.Split("?")[0] }
    if ($path -eq "/") { $path = "/index.html" }
    $rel = $path.TrimStart("/").Replace("/", "\")
    $file = Join-Path $root $rel
    $fullRoot = (Resolve-Path $root).Path
    $ok = $false
    if (Test-Path $file -PathType Leaf) {
      $full = (Resolve-Path $file).Path
      if ($full.StartsWith($fullRoot, [StringComparison]::OrdinalIgnoreCase)) { $ok = $true }
    }
    if ($ok) {
      $bytes = [IO.File]::ReadAllBytes($file)
      $ext = [IO.Path]::GetExtension($file).ToLower()
      $type = $mime[$ext]
      if (-not $type) { $type = "application/octet-stream" }
      $header = "HTTP/1.1 200 OK`r`nContent-Type: $type`r`nContent-Length: $($bytes.Length)`r`nConnection: close`r`nAccess-Control-Allow-Origin: *`r`n`r`n"
      $hb = [System.Text.Encoding]::ASCII.GetBytes($header)
      $stream.Write($hb, 0, $hb.Length)
      if ($line -notmatch "^HEAD") { $stream.Write($bytes, 0, $bytes.Length) }
    } else {
      $body = [System.Text.Encoding]::UTF8.GetBytes("not found")
      $header = "HTTP/1.1 404 Not Found`r`nContent-Type: text/plain; charset=utf-8`r`nContent-Length: $($body.Length)`r`nConnection: close`r`n`r`n"
      $hb = [System.Text.Encoding]::ASCII.GetBytes($header)
      $stream.Write($hb, 0, $hb.Length)
      $stream.Write($body, 0, $body.Length)
    }
    $stream.Flush()
  } catch {
  } finally {
    $client.Close()
  }
}
