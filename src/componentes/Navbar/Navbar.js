import React from 'react'
import Menu from '../Menu/Menu'
import logo from './logo.png'
import './Navbar.css'

function Navbar(props){
    return(
        <header className='navbar'>
            <a href='/'>
                <img className='navbar__logo' src={logo} alt='logo'/>
            </a>

        <Menu usuario={props.usuario} deslogaUsuario={props.deslogaUsuario}/>

        </header>
    )
}

export default Navbar