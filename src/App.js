import Formulario from "./components/Formulario/";
import Lista from "./components/Lista/";
import "./assets/index.css";
import "./assets/app.css"
import { Component } from "react";
class App extends Component {

  constructor(){
    super()
    this.state = {
      notas:[]
    }
  }

  criaNota(titulo, texto){
    const novanota = {titulo, texto};
    const novoArrayNotas = [...this.state.notas,novanota];
    const novoState = {
      notas:novoArrayNotas
    }
    this.setState(novoState)
  }

  render(){
    return (
      <section>
        <Formulario criaNota={this.criaNota.bind(this)}/>
        <Lista notas={this.state.notas}/>
      </section>
    );
  }
  
}

export default App;
