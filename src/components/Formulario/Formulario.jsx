import React, { Component } from "react";
import "./Formulario.css"
class Formulario extends Component {
  
  constructor(props){
    super(props);
    this.titulo = "";
    this.texto = "";
  }

  _handleMudancaTitulo(evento){
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    this.texto = evento.target.value;
  }

  _criaNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criaNota(this.titulo, this.texto);
  }

  render() {
    return (
      <form className="form-cadastro" onSubmit={this._criaNota.bind(this)}>
        <input type="text" placeholder="Titulo" className="form-cadastro_input" onChange={this._handleMudancaTitulo.bind(this)}/>
        <textarea cols="30" rows="10" placeholder="escrava sua nota" className="form-cadastro_input" onChange={this._handleMudancaTexto.bind(this)}></textarea>
        <button className="form-cadastro_input form-cadastro_submit">criar nota</button>
      </form>
    );
  }
}

export default Formulario;
