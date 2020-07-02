# gif-browser

[![Build](https://github.com/GHOSCHT/gif-viewer/workflows/Build/badge.svg)](https://github.com/GHOSCHT/gif-viewer/actions?query=workflow%3ABuild)

## Features

- Includes Electron, React, Formik with Yup Validation, React Router and Redux and fontawesome
- Includes premade CI via GitHub Actions

## Install

First, clone the repo via git:

```bash
git clone --depth 1 --single-branch --branch master https://github.com/GHOSCHT/electron-react-boilerplate your-project-name
```

And then install the dependencies with yarn.

```bash
cd your-project-name
yarn
```

## Starting Development

Start the app in the `dev` environment. This starts the renderer process in [**hot-module-replacement**](https://webpack.js.org/guides/hmr-react/) mode and starts a webpack dev server that sends hot updates to the renderer process:

```bash
yarn dev
```

## Packaging for Production

To package apps for the local platform:

```bash
yarn package
```

## Built With

- [React](https://reactjs.org/)
- [Formik](https://jaredpalmer.com/formik/)
- [Yup](https://github.com/jquense/yup)
- [React Router](https://reacttraining.com/react-router/)
- [Redux](https://react-redux.js.org/)

## Docs

See our [docs and guides here](https://electron-react-boilerplate.js.org/docs/installation)
