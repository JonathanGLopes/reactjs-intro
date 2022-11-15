import React, {Component} from "react";


/* Aqui estamos criando componentes em que cada um fica responsável por uma função, assim podendo ser reutilizado e facilitando a edição dos dados. */

class Equipe extends Component{
    render(){
        return(
            <div>
                <Sobre nome={this.props.nome} cargo={this.props.cargo} idade={this.props.idade} />
                <Social/>
                <hr></hr>
            </div>
        );
    }
}

class Sobre extends Component {
    render(){
        return(
        <div>
            <h2>Olá, me chamo {this.props.nome}</h2>
            <h3>Cargo: {this.props.cargo} </h3>
            <h3>Idade: {this.props.idade} </h3>
        </div>

        );
    }
}

const Social = () => {
    return (
        <div>
            <a href="#">Facebook </a>
            <a href="#">LinkedIn </a>
            <a href="#">Youtube </a>
        </div>
    );
}

function App(){
    return(
        <div>
            <h1>Conheça nossa equipe:</h1>
            <Equipe nome="Matheus" cargo="Desenvolvedor Web" idade="24" />
            <Equipe nome="Amanda" cargo="Desenvolvedora Mobile" idade="22" />
        </div>
    )
}


export default App;