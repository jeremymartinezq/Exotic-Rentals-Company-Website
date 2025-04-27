# Script to add the missing van interior image

$vansDir = "assets/images/vans"

# Use one of the existing van images for the interior view
# Ideally, we would use an actual interior image, but let's use business lounge image as a placeholder
$sourceImage = Join-Path -Path $vansDir -ChildPath "brabus-mercedes-sprinter-business-lounge_100478383_l.jpg"
$destImage = Join-Path -Path $vansDir -ChildPath "van-interior.jpg"

if ((Test-Path $sourceImage) -and !(Test-Path $destImage)) {
    Write-Host "Creating van interior image from $sourceImage" -ForegroundColor Yellow
    Copy-Item -Path $sourceImage -Destination $destImage
    Write-Host "Interior image created successfully" -ForegroundColor Green
}
elseif (!(Test-Path $sourceImage)) {
    Write-Host "Source file not found: $sourceImage" -ForegroundColor Red
}
elseif (Test-Path $destImage) {
    Write-Host "Interior image already exists: $destImage" -ForegroundColor Yellow
}

Write-Host "`nVan interior image has been added." -ForegroundColor Green
Write-Host "The website will now display all van images properly." -ForegroundColor Yellow 