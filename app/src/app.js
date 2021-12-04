import React from 'react';
import { render } from "react-dom";
import './styles/styles.scss';

const App = () => {
  return (
    <div>
      <h1>Hello from Django React</h1>
    </div>
  );
};

const appDiv = document.getElementById("app");
render(<App />, appDiv);

export default App;