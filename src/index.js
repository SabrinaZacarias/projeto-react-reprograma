import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import Login from './paginas/Login/Login';
import Conta from './paginas/Conta/Conta';

const divisaoProjeto = document.getElementById('projeto');

const pagina = <Login/>

//ReactDOM.render(elementoReact, tagHTML)
ReactDOM.render(pagina, divisaoProjeto);