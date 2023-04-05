import React, { Fragment } from "react";
import Sobre from './objects/Sobre';
import Logo from './objects/Logo';

function App(){
    return(
        // A abertura e fechamento envolvendo os elementos se trata de uma abreviação do Fragment
        // para evitar a criação de divs desnecessárias e melhorar o nosso código.
        <>
            <Logo />
            <Sobre />
        </>

    );
}

export default App;