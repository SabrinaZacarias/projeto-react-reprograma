import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import './Login.css'

function Login () { 
    return (
        <main className='login'>
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>

        <Link url='/conta'>Criar uma conta</Link>

        <Botao desabilitado>Enviar</Botao>
        <Botao>Enviar</Botao>
    </main>
    );
}
export default Login;