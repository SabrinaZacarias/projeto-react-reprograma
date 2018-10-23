const linkCriarUmaConta = React.createElement('a', {
    className: 'link',
    href: '/conta',
    children: 'Criar uma conta'
})

const linkFazerLogin = React.createElement('a', {
    className: 'link',
    href: '/login',
    children: 'Fazer login'
})

const formularioLogin = React.createElement('form', {
    children: [linkCriarUmaConta, linkFazerLogin]
})

const divisaoProjeto = document.getElementById('projeto');

//ReactDOM.render(elementoReact, tagHTML)
ReactDOM.render(formularioLogin, divisaoProjeto);