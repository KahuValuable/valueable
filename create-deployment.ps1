# Define the source directory and ZIP file name
$sourceDir = "c:\Users\kahum\Desktop\Personal projects\Oberon\Valueable\valueable"
$outputZip = "valueable-deployment.zip"

# Define the files/directories needed for deployment
$filesToInclude = @(
    "src",
    "public",
    "package.json",
    "package-lock.json",
    "next.config.ts",
    "postcss.config.mjs",
    ".ebextensions",
    ".platform",
    "tsconfig.json"
)

# Create a temporary directory for preparing the deployment package
$tempDir = "$sourceDir\temp_deployment"
if (Test-Path $tempDir) { Remove-Item -Path $tempDir -Recurse -Force }
New-Item -ItemType Directory -Path $tempDir | Out-Null

# Copy the necessary files/directories into the temp directory
foreach ($file in $filesToInclude) {
    $sourcePath = Join-Path $sourceDir $file
    $destPath = Join-Path $tempDir $file

    if (Test-Path $sourcePath) {
        Copy-Item -Path $sourcePath -Destination $destPath -Recurse -Force
    }
    else {
        Write-Warning "File/Directory not found: $sourcePath"
    }
}

# Remove any existing ZIP file
if (Test-Path "$sourceDir\$outputZip") { Remove-Item -Path "$sourceDir\$outputZip" -Force }

# Use 7-Zip for compression (CORRECT PATH to 7z.exe; fix this if needed!)
$sevenZipPath = "C:\Program Files\7-Zip\7z.exe"
if (-Not (Test-Path $sevenZipPath)) {
    $sevenZipPath = "C:\Program Files (x86)\7-Zip\7z.exe"
}
if (-Not (Test-Path $sevenZipPath)) {
    throw "7z.exe not found. Please install 7-Zip and adjust the script to your path."
}
Push-Location $tempDir
& $sevenZipPath a -tzip "$sourceDir\$outputZip" * | Out-Null
Pop-Location

# Clean up by removing the temporary directory
Remove-Item -Path $tempDir -Recurse -Force

Write-Host "Deployment package has been created successfully at: $outputZip"
