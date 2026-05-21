Add-Type -AssemblyName System.Drawing

$inputPath = "e:\My Portfolio Website\masterPortfolio\images\myimage2.png"
$outputPath = "e:\My Portfolio Website\masterPortfolio\public\myimage2.png"

if (Test-Path $outputPath) {
    Remove-Item $outputPath -Force
}

$img = [System.Drawing.Image]::FromFile($inputPath)
$w = $img.Width
$h = $img.Height
$cropSize = [System.Math]::Min($w, $h)

# center crop coordinates
$x = ($w - $cropSize) / 2
$y = ($h - $cropSize) / 2

# Output dimensions for favicon
$targetSize = 256

# Create new bitmap with target dimensions and transparent background
$bmp = New-Object System.Drawing.Bitmap($targetSize, $targetSize)
$g = [System.Drawing.Graphics]::FromImage($bmp)
$g.SmoothingMode = [System.Drawing.Drawing2D.SmoothingMode]::HighQuality
$g.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
$g.PixelOffsetMode = [System.Drawing.Drawing2D.PixelOffsetMode]::HighQuality
$g.Clear([System.Drawing.Color]::Transparent)

# Create circular clip path
$path = New-Object System.Drawing.Drawing2D.GraphicsPath
$path.AddEllipse(0, 0, $targetSize, $targetSize)
$g.SetClip($path)

# Draw cropped & resized image
# Source rectangle from original image
$srcRect = New-Object System.Drawing.Rectangle($x, $y, $cropSize, $cropSize)
# Destination rectangle in new bitmap
$destRect = New-Object System.Drawing.Rectangle(0, 0, $targetSize, $targetSize)

$g.DrawImage($img, $destRect, $srcRect, [System.Drawing.GraphicsUnit]::Pixel)

$g.Dispose()
$img.Dispose()

# Save rounded image as PNG
$bmp.Save($outputPath, [System.Drawing.Imaging.ImageFormat]::Png)
$bmp.Dispose()

Write-Host "Favicon crop, resize, and round completed successfully!"
