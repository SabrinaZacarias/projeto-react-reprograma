import React from 'react'
import './Input.css'

class Input extends React.Component{
    constructor(props){
        super(props)
        this.state = {erro: ''}
    }

    valida = (evento) => {
        const alvo = evento.target
        if(this.props.required && alvo.value.trim()=== ''){
           this.setState({erro:'Campo obrigatório'})
        } else if(this.props.minLength && alvo.value.length < this.props.minLength){
            this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`})
        }else if(this.props.pattern && !this.props.pattern.test(alvo.value)){
            this.setState({erro:'Email inválido'})
        }else{
            this.setState({erro:''})
        }
    }



    render() {
        return (
            <div>
                <input 
                className='caixa-texto'
                type={this.props.type}
                id={this.props.id}
                name={this.props.name}
                placeholder={this.props.placeholder}
                onChange={this.valida}
                />

                <p className='grupo__erro'>
                {this.state.erro}
                </p>
            </div>
        )
    }
}
    
    
export default Input