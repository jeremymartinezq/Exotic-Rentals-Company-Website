# Script to update the van interior image with the user-provided image

$vansDir = "assets/images/vans"
$interiorImagePath = Join-Path -Path $vansDir -ChildPath "van-interior.jpg"

Write-Host "To update the van interior image:" -ForegroundColor Yellow
Write-Host "1. Right-click on the Brabus van interior image you just shared" -ForegroundColor Cyan
Write-Host "2. Select 'Save image as...'" -ForegroundColor Cyan
Write-Host "3. Save the image to: $interiorImagePath" -ForegroundColor Cyan
Write-Host "4. This will replace the current interior image with the luxury Brabus interior" -ForegroundColor Cyan

Write-Host "`nAfter saving the image, the website will display the new van interior." -ForegroundColor Green
Write-Host "This is a much better representation of a luxury Sprinter van interior!" -ForegroundColor Green 