import React from 'react';
import 'App.css';
import babel from './images/babel.png';
import webpackImg from './images/webpack.svg';
import reactImg from './images/react.gif';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <div>
    <div className="heading p-3 mb-5">
      <h1 className="text-center text-white">Hello React</h1>
    </div>
    <div className="d-lg-flex justify-content-between px-5">
      <a href="https://babeljs.io/">
        <img src={babel} alt="Babel" height="300px" width="300px"></img>
      </a>
      <a href="https://webpack.js.org/">
        <img src={webpackImg} alt="Webpack" height="300px" width="300px"></img>
      </a>
      <a href="https://react.dev/">
        <img src={reactImg} alt="React" height="300px" width="400px"></img>
      </a>
    </div>
  </div>
);

export default App;
