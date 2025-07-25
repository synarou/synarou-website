# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Synarou static website built with Vue 3 + Vite for Google authentication purposes. The site is deployed to GitHub Pages.

## Commands

- **Development**: `npm run dev` - Starts Vite dev server
- **Build**: `npm run build` - Builds production assets to `dist/`
- **Preview**: `npm run preview` - Preview production build locally

## Architecture

### Stack
- **Framework**: Vue 3 with Vue Router 4
- **Build Tool**: Vite
- **Deployment**: GitHub Pages via GitHub Actions

### Project Structure
- `synarou-static-site/` - Main Vue application
  - `src/router/index.js` - Vue Router configuration with base path `/synarou-website/`
  - `src/components/` - Vue components (Home.vue, Privacy.vue)
  - `vite.config.js` - Vite configuration with base path for GitHub Pages

### Key Configuration
- **Base Path**: `/synarou-website/` - Used in both Vite config and Vue Router for GitHub Pages deployment
- **GitHub Actions**: Automatic deployment to GitHub Pages on push to main branch
- **Node Version**: 20 (specified in GitHub Actions workflow)

### Deployment Notes
- The site automatically deploys to GitHub Pages when changes are pushed to the main branch
- Build artifacts are uploaded from the `dist/` directory
- Custom domain can be configured via CNAME file in public directory