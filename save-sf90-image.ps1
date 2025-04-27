# Script to save the Ferrari SF90 image that was shared

# Create cars directory if it doesn't exist
$carsDir = "assets/images/cars"

if (!(Test-Path $carsDir)) {
    New-Item -ItemType Directory -Path $carsDir -Force
}

Write-Host "Ferrari SF90 image needs to be saved manually." -ForegroundColor Yellow
Write-Host "Please follow these steps:" -ForegroundColor Yellow
Write-Host "1. Right-click on the Ferrari SF90 image in the conversation" -ForegroundColor Cyan
Write-Host "2. Select 'Save image as...'" -ForegroundColor Cyan
Write-Host "3. Save the image to: $carsDir/ferrari-sf90.jpg" -ForegroundColor Cyan
Write-Host "4. This will replace the current SF90 image with the correct one" -ForegroundColor Cyan

Write-Host "`nAfter saving the image, all Ferrari SF90 images on the website will display correctly." -ForegroundColor Green 