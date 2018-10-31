import React, {Component} from 'react'
import Link from '../../componentes/Link/Link';
import Botao from '../../componentes/Botao/Botao';
import Legenda from '../../componentes/Legenda/Legenda';
import Input from '../../componentes/Campo/Input';
import './Conta.css'

class Conta extends Component { 
    constructor(props){
        super(props)
        this.nomeRef = React.createRef()
        this.telefoneRef = React.createRef()
        this.emailRef = React.createRef()
        this.senhaRef = React.createRef()
        this.state = {desabilitado:true}
    }

    habilitaOuDesabilita = () => {
        const campoNome = this.nomeRef.current
        const campoTelefone = this.telefoneRef.current
        const campoEmail = this.emailRef.current
        const campoSenha = this.senhaRef.current

        if(campoNome.temErro() || campoTelefone.temErro() || campoEmail.temErro() || campoSenha.temErro()){
            this.setState({desabilitado:true})
        } else{
            this.setState({desabilitado:false})
        }
    }

    render() {
        return (
        <main className='conta'>
        <h1>Conta</h1>
        <p>Envie o formulário para criar uma conta!</p>

        <Legenda htmlFor='nome'>Nome:</Legenda>
        <Input ref={this.nomeRef} type='text' id='nome' name='nome' placeholder='Nome' required minLength={10} onChange={this.habilitaOuDesabilita}/>

        <Legenda htmlFor='telefone'>Telefone:</Legenda>
        <Input ref={this.telefoneRef} type='tel' id='telefone' name='telefone' placeholder='Telefone' required onChange={this.habilitaOuDesabilita}/>

        <Legenda htmlFor='email'>Email:</Legenda>
        <Input ref={this.emailRef} type='email' id='email' name='email' placeholder='Email' required onChange={this.habilitaOuDesabilita}/>

        <Legenda htmlFor='senha'>Senha:</Legenda>
        <Input ref={this.senhaRef} type='password' id='senha' name='senha' placeholder='Senha' required minLength={6} onChange={this.habilitaOuDesabilita}/>        

        <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>

        <Link url='/login'>Fazer login</Link>
    </main>
    )
    }
}
export default Conta;