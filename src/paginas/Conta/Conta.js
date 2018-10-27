import React from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Input from '../../componentes/Campo/Input';
import './Conta.css'

function Conta () { 
    return (
        <main className='conta'>
        <h1>Conta</h1>
        <p>Envie o formulário para criar uma conta!</p>

        <Legenda htmlFor='nome'>Nome:</Legenda>
        <Input type='text' id='nome' name='nome' placeholder='Nome' required/>

        <Legenda htmlFor='telefone'>Telefone:</Legenda>
        <Input type='tel' id='telefone' name='telefone' placeholder='Telefone' required/>

        <Legenda htmlFor='email'>Email:</Legenda>
        <Input type='email' id='email' name='email' placeholder='Email' required minLength={10}
        pattern={/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/}/>

        <Legenda htmlFor='senha'>Senha:</Legenda>
        <Input type='password' id='senha' name='senha' placeholder='Senha' required minLength={6}/>        

        <Botao>Enviar</Botao>

        <Link url='/login'>Fazer login</Link>
    </main>
    );
}
export default Conta;