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

  componentDidMount() {
    alert("Elije tu propia aventura");
  }

  handleClick = (e) => {
    const id = e.target.id;
    if (this.state.contador >= 7) {
      alert("Fin");
    }
    if (id === "A") {
      if (this.state.ultimaSeleccion === "A") {
        this.setState({
          contador: this.state.contador + 2,
          ultimaSeleccion: "A",
        });
      } else if (this.state.ultimaSeleccion !== "A") {
        this.setState({
          contador: this.state.contador + 1,
          ultimaSeleccion: "A",
        });
      }
    }
    if (id === "B") {
      if (this.state.ultimaSeleccion === "A") {
        this.setState({
          contador: this.state.contador + 3,
          ultimaSeleccion: "B",
        });
      } else if (this.state.ultimaSeleccion !== "A") {
        this.setState({
          contador: this.state.contador + 2,
          ultimaSeleccion: "B",
        });
      }
    }
  };

  render() {
    return (
      <div className="main">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Opciones
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}
        />
        <h3 className="selecciones">Selección anterior: {this.state.ultimaSeleccion}</h3>
        <Reiniciar reiniciarHistoria={this.reiniciarHistoria} />
      </div>
    );
  }
}

export default Main;
