# DriveEasy - Push to GitHub Script
# Replace YOUR-USERNAME and YOUR-REPO-NAME with your actual GitHub details

Write-Host "🚀 Pushing DriveEasy updates to GitHub..." -ForegroundColor Cyan

# Navigate to project directory
Set-Location "c:\Users\hp\OneDrive\Desktop\car-rental-website"

# Initialize git if needed
if (-not (Test-Path ".git")) {
    Write-Host "📦 Initializing Git repository..." -ForegroundColor Yellow
    git init
    git branch -M main
}

# Add all files
Write-Host "📁 Adding all files..." -ForegroundColor Yellow
git add .

# Commit changes
Write-Host "💾 Committing changes..." -ForegroundColor Yellow
git commit -m "✨ Major Update: Premium features, dark mode, luxury cars section

- Modernized entire website with premium design
- Added Google Fonts and glassmorphism effects
- Integrated professional car images
- Added Premium Luxury Cars section (₹9,500-₹15,000/day)
- Added animated statistics counter
- Added customer testimonials
- Added How It Works guide
- Implemented dark mode toggle switch
- Enhanced all sections with animations
- Fully responsive design"

# Push to GitHub
Write-Host "🌐 Pushing to GitHub..." -ForegroundColor Yellow
Write-Host "⚠️  Make sure to set your remote first:" -ForegroundColor Red
Write-Host "git remote add origin https://github.com/YOUR-USERNAME/YOUR-REPO-NAME.git" -ForegroundColor White
Write-Host ""
Write-Host "Then run: git push -u origin main" -ForegroundColor Green
