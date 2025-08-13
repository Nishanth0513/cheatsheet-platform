#!/bin/bash

# Script to help with project setup and development

case "$1" in
  setup)
    echo "Setting up the project..."
    npm install
    echo "Setup complete! Run 'npm run dev' to start the development server."
    ;;
  dev)
    echo "Starting development server..."
    npm run dev
    ;;
  build)
    echo "Building the project..."
    npm run build
    ;;
  lint)
    echo "Linting Markdown files..."
    npm run lint:md
    ;;
  *)
    echo "Usage: ./run.sh [setup|dev|build|lint]"
    echo "  setup - Install dependencies"
    echo "  dev   - Start development server"
    echo "  build - Build the project"
    echo "  lint  - Lint Markdown files"
    ;;
esac