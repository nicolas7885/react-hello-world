import React from 'react';
import galeria from './assets/galeria.jpg';
import './App.css';

function App() {
  return (
    <div>
      <header>
      </header>
      <body background={galeria} style={{width: '100%', height: '1200px'}}>
        <p style={{backgroundColor: 'white', fontSize: '500%',textAlign: 'center'}}>My Menu</p>
      </body>
    </div>
  );
}

export default App;
