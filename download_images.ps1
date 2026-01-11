$products = @(
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/013/enerji-1.jpg"; name = "enerji-1.jpg" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/005/hango-1.jpg"; name = "hango-1.jpg" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/009/relax-1.jpg"; name = "relax-1.jpg" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/008/kis-semptomlari-2.png"; name = "kis-semptomlari-2.png" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/017/kis-semptomlari-10.png"; name = "kis-semptomlari-10.png" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/018/lax-6.jpg"; name = "lax-6.jpg" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/007/lbd-1.jpg"; name = "lbd-1.jpg" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/016/prtk5.jpg"; name = "prtk5.jpg" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/015/elct2.jpg"; name = "elct2.jpg" },
    @{ url = "https://www.dailyshot.com.tr/idea/mu/66/myassets/products/014/energy-6.jpeg"; name = "energy-6.jpeg" }
)

$destDir = "c:\Users\erenk\OneDrive\Desktop\Projeler\wellworks\WellWorks-repo\src\assets\products"

# Download each image
foreach ($prod in $products) {
    $outPath = Join-Path $destDir $prod.name
    Write-Host "Downloading $($prod.name)..."
    try {
        Invoke-WebRequest -Uri $prod.url -OutFile $outPath
    } catch {
        Write-Error "Failed to download $($prod.name): $_"
    }
}
Write-Host "Download complete."
