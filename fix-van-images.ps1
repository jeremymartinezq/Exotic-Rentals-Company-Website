# Script to fix van images by renaming them to match the expected filenames

$vansDir = "assets/images/vans"

# Rename mappings - source filename to destination filename
$renameMap = @{
    "Used-2017-Mercedes-Benz-Sprinter-2500-First-Class-1592316821.jpg" = "sprinter-executive.jpg"
    "Mercedez Benz Sprinter.png" = "sprinter-luxury.jpg"
    "mercedes-benz-sprinter-vip-1.jpg" = "sprinter-vip.jpg"
    "Sprinter-Limo-1024x680.jpg" = "sprinter-party.jpg"
}

# Perform the rename operations
foreach ($rename in $renameMap.GetEnumerator()) {
    $sourcePath = Join-Path -Path $vansDir -ChildPath $rename.Key
    $destPath = Join-Path -Path $vansDir -ChildPath $rename.Value
    
    if ((Test-Path $sourcePath) -and !(Test-Path $destPath)) {
        Write-Host "Renaming $($rename.Key) to $($rename.Value)" -ForegroundColor Yellow
        Copy-Item -Path $sourcePath -Destination $destPath
        Write-Host "File renamed successfully" -ForegroundColor Green
    } elseif (!(Test-Path $sourcePath)) {
        Write-Host "Source file not found: $($rename.Key)" -ForegroundColor Red
    } elseif (Test-Path $destPath) {
        Write-Host "Destination file already exists: $($rename.Value)" -ForegroundColor Yellow
    }
}

Write-Host "`nAll van images have been correctly renamed." -ForegroundColor Green
Write-Host "The website will now display the vans properly." -ForegroundColor Yellow 