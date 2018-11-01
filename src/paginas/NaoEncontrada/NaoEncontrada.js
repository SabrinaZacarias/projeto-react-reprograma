import React from 'react'
import './NaoEncontrada.css'
import erro from './erro.jpg'

function NaoEncontrada(){
    return(
        <main className='nao-encontrada'>
            <h1>Pagina não encontrada</h1>
            <p className='nao-encontrada__simbolo'>
                :-(
            </p>
            <img src={erro} alt='morte erro not found'/>
        </main>

    )
}

export default NaoEncontrada