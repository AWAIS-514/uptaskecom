# Simple E-Commerce Product List App

## Overview

This is a cross-platform e-commerce product list application built using **React Native** with **Redux Toolkit** for state management and **TypeScript** for type safety. The app is structured based on **Atomic Design Principles** to ensure scalability, reusability, and maintainability. It allows users to add products with a name and price, view them in a list, and delete them when no longer needed.

## Features

- **Product List View**: Display a list of products with a name, price, and delete functionality.
- **Add Product**: Users can add new products with a name and price.
- **Delete Product**: Users can delete products from the list.
- **State Management**: All product data is managed using **Redux Toolkit**.
- **Performance Optimization**: Utilizes `useMemo` and `useCallback` hooks to optimize list rendering and avoid unnecessary re-renders.
- **Atomic Design Structure**: Components are structured using atomic design principles:
  - **Atoms**: Small, reusable components such as `Button`, `Input`, and `Text`.
  - **Molecules**: Combinations of atoms, like `ProductCard`.
  - **Organisms**: Groups of molecules, like `ProductList`.
  - **Templates**: Overall structure of screens, like `ProductListTemplate`.
  - **Pages**: Full pages that render templates, like the `MainPage`.

## Tech Stack

- **React Native**: For cross-platform mobile development.
- **Redux Toolkit**: For state management.
- **TypeScript**: For type safety and cleaner code.
- **React Hooks**: For performance optimization (`useMemo`, `useCallback`).

## File Structure

![Description of Image](https://firebasestorage.googleapis.com/v0/b/storage-asset-backup.appspot.com/o/Screenshot%202024-09-16%20at%2011.58.14%E2%80%AFAM.png?alt=media&token=37746b20-cefd-4ccb-a929-078be905aaa8)

## How to Start Project
### Getting Started

To get your development environment set up and start working on this project, follow these steps:

#### Prerequisites

Ensure you have the following installed on your machine:

- **Node.js**: You can download it from [nodejs.org](https://nodejs.org/).
- **npm** (Node Package Manager): Comes with Node.js.
- **React Native CLI**: You can install it globally using npm:

  ```bash
  npm install -g react-native-cli
#### Prerequisites

  Clone the Repository
 ```bash
  git clone https://github.com/AWAIS-514/uptaskecom

  cd uptaskecom

  npm install / yarn install

  npx react-native run-android

  npx react-native run-ios


