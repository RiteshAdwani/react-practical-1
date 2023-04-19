# react-practical-1
- This is a React App built from scratch.
- Live demonstration: [React from scratch](https://create-react-app-from-scratch.netlify.app/)

**********

## What is React?
- React is an open-source JavaScript library used for building user interfaces.
- It was developed by Facebook and is widely used by developers for building single-page applications (SPAs) and mobile applications.
- React allows developers to build reusable UI components, which can be used in multiple parts of an application.
- It uses a declarative approach to programming, which means that developers describe what they want the user interface to look like, and React takes care of updating the user interface when the data changes.
- React is built on the concept of a virtual DOM, which is a lightweight representation of the actual DOM. 
- When data changes, React updates the virtual DOM and then efficiently updates the actual DOM to reflect those changes, which can result in better performance compared to traditional web applications.

**********

## Setting up React from scratch
- In this setup, we've used Node js and npm to manage operations. \
**Step 1:**
- Initialize the project using `npm init`.

**Step 2:**
- Install react and react dom packages using `npm install react react-dom`.

**Step 3:**
- Install Babel packages using `npm install @babel/core @babel/preset-env @babel/preset-react babel-loader`.
- babel/core is the basic package.
- preset-env allows to use modern JS and transpiles to older JS code.
- preset-react allows taking JSX code and transpiles into vanilla React.
- babel-loader is the intermediary package that connects babel to webpack.

**Step 4:**
- Install webpack using `npm install webpack webpack-cli webpack-dev-server`.
- webpack-dev-server allows to use webpack in a development environment.

**Step 5:**
- Update "scripts" in `package.json`.
- Here, we add `start` and `build` scripts.

**Step 6:**
- Install html plugin using `npm install html-webpack-plugin`.
- this basically finds the html file and automatically links the generated JS file.

**Step 7:**
- Install CSS loader with the command `npm install style-loader css-loader`.

**Step 8:**
- To be able to add images, use command `npm install --dev file-loader`.
- We can add pngs,jpgs,gifs and svgs as well.

**Step 9:**
- Add prettier using `npm install --save-dev --save-exact prettier`.
- Set up "format" in scripts by adding `prettier --write` command.

**********
## Features
- The app is built using React from scratch.
- It contains loaders for HTML,CSS and Bootstrap.
- Contains configurations for babel and prettier.
- On clicking on the images/gif, it redirects to the respective technology's official website.
