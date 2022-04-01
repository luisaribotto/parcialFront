import React, { Component } from "react";

class Reiniciar extends Component {
    render() {
        return (
          <div>
            <button className="boton" onClick={() => this.props.reiniciarHistoria()}>
              Volver a empezar
            </button>
          </div>
        );
      }
    }

export default Reiniciar;


