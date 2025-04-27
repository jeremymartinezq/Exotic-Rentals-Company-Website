# Script to save the pink Ferrari image for hero background

$imagesDir = "assets/images"

# Make sure directory exists
if (!(Test-Path $imagesDir)) {
    New-Item -ItemType Directory -Path $imagesDir -Force
}

Write-Host "To set the pink Ferrari as your hero background:" -ForegroundColor Yellow
Write-Host "1. Right-click on the pink Ferrari image (with the two women in bikinis) that you shared" -ForegroundColor Cyan
Write-Host "2. Select 'Save image as...'" -ForegroundColor Cyan
Write-Host "3. Save the image to: $imagesDir/ferrari-pink-models.jpg" -ForegroundColor Cyan

Write-Host "`nAfter saving the image, we'll update the website to use it as the hero background." -ForegroundColor Green 