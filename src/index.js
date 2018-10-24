import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'

function Link(props){
    return(
        <a className='link' href={props.url}>
            {props.children}
        </a>
    )
}

function Botao(props){
    let classes = 'botao';

    if(props.desabilitado){
        classes += ' botao--desabilitado';
    }

    return(
        <button className={classes}>
            {props.children}
        </button>
    )
}

const paginaLogin = (
    <main className='pagina-login'>
        <h1>Login</h1>
        <p>Entre com seu e-mail e senha.</p>

        <Link url='/conta'>Criar uma conta</Link>

        <Botao desabilitado>Enviar</Botao>

    </main>
)




// const linkCriarUmaConta = <a class='link' href='/conta'>Criar uma conta</a>;
// const linkFazerLogin = <a class='link' href='/login'>Fazer login</a>;



// const formularioLogin = (
//     <form>
//         {linkCriarUmaConta};
//         {linkFazerLogin};
//     </form>
// )


const divisaoProjeto = document.getElementById('projeto');

//ReactDOM.render(elementoReact, tagHTML)
ReactDOM.render(paginaLogin, divisaoProjeto);