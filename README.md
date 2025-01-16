# React Router DOM v6 Nested Route Rendering Issue

This repository demonstrates a bug encountered when working with nested routes in React Router DOM v6.  The issue involves nested routes failing to render, even though the parent route renders correctly and the paths appear to be properly configured. 

The `bug.js` file contains the buggy code. `bugSolution.js` provides a corrected version.

## Problem Description

The application uses nested routes to structure the navigation.  When navigating to a nested route, only the parent route renders; the nested components are not displayed.  This occurs despite apparent correct path configuration.

## Solution

The solution involves ensuring proper nesting and use of the `useParams` hook or similar method for passing dynamic parameters correctly into nested components if required. The solution is demonstrated in the `bugSolution.js` file.