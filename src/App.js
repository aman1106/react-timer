import React from 'react';
import HrTimer from "./Timer/index";
import './App.css';
import '../node_modules/antd/dist/antd.css';

function App() {
  return (
    <div className="App">
      <header className="App-headers">
        <HrTimer />
      </header>
    </div>
  );
}

export default App;
