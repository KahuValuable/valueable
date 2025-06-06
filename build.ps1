# Remove existing zip if present
Remove-Item -Path .\deploy.zip -ErrorAction SilentlyContinue

# Create new zip with required files
Compress-Archive -Path package.json, package-lock.json, Procfile, .ebextensions, src, public, next.config.js, .ebignore -DestinationPath deploy.zip