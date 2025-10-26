#!/bin/bash
set -e pipefail

# Install Node.js dependencies
cd /app/frontend
npm install -g npm@11.4.0
npm install