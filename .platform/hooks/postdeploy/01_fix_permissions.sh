#!/bin/bash
# Fix permissions for Next.js binaries after deployment
chmod -R +x /var/app/current/node_modules/.bin/
echo "Permissions fixed for node_modules/.bin" >> /var/log/eb-hooks.log