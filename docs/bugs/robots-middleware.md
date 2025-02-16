# Robots.txt Middleware Issue

## Overview

LinkedIn featured section was unable to add the website link due to robots.txt being blocked by middleware. The issue was discovered through Sentry error logs while attempting to add the website to LinkedIn's featured section.

## Problem

- LinkedIn's website verification process failed repeatedly
- Sentry logged RangeError: `middleware GET /robots.txt`
- Initially suspected LinkedIn's verification system was corrupted
- Support ticket raised with LinkedIn

## Root Cause Analysis

After investigating Sentry logs, discovered that the we were not adding the `robots.txt` file (and only `robots.ts` file) to the matcher in the middleware. This made the middleware redirect to `/locale/robots.txt` instead of `/robots.txt` and the file was not found.

## Solution

Added the `robots.txt` file to the matcher in the middleware. This prevented the middleware from redirecting to `/locale/robots.txt` and the file was found.

## Results

- LinkedIn featured section was able to verify website ownership
- Sentry logs no longer show RangeError: `middleware GET /robots.txt`
