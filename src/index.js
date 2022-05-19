import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';


function AppComponent() {
  return (
    <h1 id='title'>
      Hola Caracola.
    </h1>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.Fragment>
      <App />
      <AppComponent />
    </React.Fragment>
);

