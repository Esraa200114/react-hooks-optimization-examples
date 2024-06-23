import React from 'react';
import Example from "./components/Example";
import "./../node_modules/bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
      <div className="container">
          <div className="content p-5">
            <h1 className="text-center mb-4">useMemo Example</h1>
            <Example />
          </div>
      </div>
  );
}

export default App;
