# Script to save the uploaded images and match them with correct vehicle descriptions
# This script assumes the user has provided actual image files

# Create directories if they don't exist
$carsDir = "assets/images/cars"
$vansDir = "assets/images/vans"

if (!(Test-Path $carsDir)) {
    New-Item -ItemType Directory -Path $carsDir -Force
}

if (!(Test-Path $vansDir)) {
    New-Item -ItemType Directory -Path $vansDir -Force
}

Write-Host "Setting up directories for the exact vehicle images provided..." -ForegroundColor Cyan

# Mapping of vehicles to their filenames
$vehicleMapping = @{
    # Exotic Cars - exact mapping from the images
    "ferrari-sf90.jpg" = "Ferrari SF90 Stradale"
    "lamborghini-huracan.jpg" = "Lamborghini Huracan EVO"
    "mclaren-720s.jpg" = "McLaren 720S"
    "ferrari-f8.jpg" = "Ferrari F8 Tributo"
    "rolls-royce-cullinan.jpg" = "Rolls-Royce Cullinan"
    "bentley-continental.jpg" = "Bentley Continental GT"
    "mercedes-maybach.jpg" = "Mercedes-Maybach S680"
    "lamborghini-aventador.jpg" = "Lamborghini Aventador SVJ Roadster"
    "ferrari-portofino.jpg" = "Ferrari Portofino M"
    "lamborghini-urus.jpg" = "Lamborghini Urus"
    "bentley-bentayga.jpg" = "Bentley Bentayga"
    
    # Sprinter Vans - exact mapping from the images
    "sprinter-executive.jpg" = "Mercedes Sprinter Executive"
    "sprinter-luxury.jpg" = "Mercedes Sprinter Luxury"
    "sprinter-vip.jpg" = "Mercedes Sprinter VIP"
    "sprinter-party.jpg" = "Mercedes Sprinter Party"
    "van-interior.jpg" = "Luxury Sprinter Van Interior"
}

Write-Host "Please save the images to the following paths:" -ForegroundColor Yellow

# List all the car images needed
Write-Host "Exotic Cars:" -ForegroundColor Cyan
foreach ($car in $vehicleMapping.GetEnumerator() | Where-Object { $_.Key -notlike "*sprinter*" -and $_.Key -ne "van-interior.jpg" }) {
    $filename = $car.Key
    $filepath = Join-Path -Path $carsDir -ChildPath $filename
    Write-Host "- Save image for '$($car.Value)' to: $filepath" -ForegroundColor Green
}

# List all the van images needed
Write-Host "`nSprinter Vans:" -ForegroundColor Cyan
foreach ($van in $vehicleMapping.GetEnumerator() | Where-Object { $_.Key -like "*sprinter*" -or $_.Key -eq "van-interior.jpg" }) {
    $filename = $van.Key
    $filepath = Join-Path -Path $vansDir -ChildPath $filename
    Write-Host "- Save image for '$($van.Value)' to: $filepath" -ForegroundColor Green
}

Write-Host "`nNOTE: After saving the images to these locations, the website will display them correctly for each vehicle." -ForegroundColor Yellow
Write-Host "The filenames must match exactly as listed above." -ForegroundColor Yellow 