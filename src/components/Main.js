import data from "./data";
import React, { Component } from "react";
import Opciones from "./Opciones";
import Reiniciar from "./Reiniciar";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      ultimaSeleccion: "",
    };
  }

  reiniciarHistoria = () => {
    this.setState({
      contador: 0,
      ultimaSeleccion: "",
    });
  };

  componentDidUpdate() {
         if (this.state.contador >= 7 ){
           alert(
            "Fin"
           );
         }
       }

  handleClick = (valor) => {
    const id = valor.target.id;
    /* if (this.state.contador >= 7) {
      alert("Colorin colorado este cuento se ha terminado");
     
  } else  */if (id === "A" && this.state.ultimaSeleccion !== "A") {
      this.setState({
        contador: this.state.contador + 1,
        ultimaSeleccion: "A",
      });

    } else if (id === "A" && this.state.ultimaSeleccion === "A") {
      this.setState({
        contador: this.state.contador + 2,
      });
    } else if (id === "B" && this.state.ultimaSeleccion === "A") {
      this.setState({
        contador: this.state.contador + 3,
        ultimaSeleccion: "B",
      });
    } else if (id === "B") {
      this.setState({
        contador: this.state.contador + 2,
        ultimaSeleccion: "B",
      });
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
       <Reiniciar reiniciarHistoria={this.reiniciarHistoria} />
      </div>
    );
  }
}

export default Main;
