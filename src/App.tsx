import React, { FC } from 'react';
import './App.css';
import Lista from './components/Lista';

const App:FC = () => {  
  return (
    <div className ="App">
      <Lista/>
      <div className ="borde">
      </div>
    </div>
  );
}

export default App;
