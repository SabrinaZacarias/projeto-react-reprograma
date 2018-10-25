import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Input from '../../componentes/Campo/Input'
import './Login.css'

function Login () { 
    return (
        <main className='login'>
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>

        <Legenda htmlFor='email'>Email:</Legenda>
        <Input type='email' id='email' name='email' placeholder='Email'/>

        <Legenda htmlFor='senha'>Senha:</Legenda>
        <Input type='password' id='senha' name='senha' placeholder='Senha'/>
        <Botao>Enviar</Botao>
        <Link url='/conta'>Criar uma conta</Link>
    </main>
    );
}
export default Login;