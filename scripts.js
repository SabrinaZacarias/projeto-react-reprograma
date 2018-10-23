
const linkCriarUmaConta = document.createElement('a');
linkCriarUmaConta.className = 'link';
linkCriarUmaConta.href = '/conta';
linkCriarUmaConta.appendChild(document.createTextNode('Criar uma conta'));

const linkLogin = document.createElement('a');
linkLogin.className = 'link';
linkLogin.href = '/login';
linkLogin.appendChild(document.createTextNode('Fazer Login'))

const formularioLogin = document.createElement('form');
formularioLogin.appendChild(linkCriarUmaConta);
formularioLogin.appendChild(linkLogin);


const divisaoProjeto = document.getElementById('projeto');
divisaoProjeto.appendChild(formularioLogin);
