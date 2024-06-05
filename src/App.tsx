import React from 'react';
import FormComponent from './FormComponent';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="text-3xl font-bold">Formulaire d'Inscription</h1>
        <FormComponent />
      </header>
    </div>
  );
};

export default App;
