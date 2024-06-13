import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dylan from './examen.js';
import Lista from './Comp1.js';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Dylan nom="lucas" tip="gato" origen="cochabamba" desc="blanco" ilus="gato.jpg"/>
    <Dylan nom="takamuara " tip="gato" origen="oruro" desc="uraño" ilus="perro.jpg"/>
    <Lista noml="Materias" tip="inf111" tip2="inf122" tip3="inf124"/>
    <Lista noml="COMIDAS" tip="wallake" tip2="thimpu" tip3="saise"/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
