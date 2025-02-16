# Bug Documentation

## Overview

Documentation of significant bugs encountered, their solutions, and preventive measures.

## Contents

- Bot Protection Issues
- Build & Performance Issues
- Integration Issues
- Security Concerns

## Structure

Each bug document should include:

- Clear problem description
- Steps to reproduce
- Root cause analysis
- Solution implemented
- Prevention measures
- Related code changes

## Recent Issues

1. [Robots.txt Middleware Issue](./robots-middleware.md)
   - LinkedIn featured section was unable to add the website link due to robots.txt being redirected by middleware. The issue was discovered through Sentry error logs while attempting to add the website to LinkedIn's featured section.
2. [Typography Safelist Issue](./typography-safelist.md)
   - Tailwind v4 has removed the `safelist` feature, which was previously used to ensure certain utility classes were always included in the production build. This particularly affects our typography component's responsive variants.
