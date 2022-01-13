import React, { Component } from "react";
import { AppBar } from "@mui/material";
import { Box } from "@mui/material";
import { Toolbar } from "@mui/material";
import { Typography } from "@mui/material";
import { Button } from "@mui/material";
import { slide as Menu } from "react-burger-menu";
import Cookies from "universal-cookie";
import "../css/hamburguesa.css";

const cookies = new Cookies();
var isMenuOpen = function (state) {
  return state.isOpen;
};

class ButtonAppBar extends Component {
  showSettings(event) {
    event.preventDefault();
  }

  cerrarSesion = () => {
    cookies.remove("id", { path: "/" });
    cookies.remove("nombre", { path: "/" });
    cookies.remove("correo", { path: "/" });
    //alert("Adios");
    window.location.href = "./";
  };

  componentDidMount() {
    if (!cookies.get("correo")) {
      window.location.href = "./";
    }
  }
  render() {
    return (
      <Box sx={{ flexGrow: -5, ml: -6  }}>
        <AppBar position="static" color="success">
          <Toolbar>
            <Menu onStateChange={isMenuOpen}>
              <a id="home" className="menu-item" href="/">
                Inicio
              </a>
              <br />
              <a id="home" className="menu-item" href="/solicitud-nomina">
                Solicitudes De Nomina
              </a>
              <br />
              <a id="home" className="menu-item" href="/aprobacionnomina">
                Aprobacion de Solicitud de Nomina
              </a>
              <br />
              <a id="home" className="menu-item" href="/solicitud-recursos">
                Solicitudes De Recursos
              </a>
              <br />
              <a id="home" className="menu-item" href="/aprobacionrecursos">
                Aprobacion de Solicitud de Recursos
              </a>
              <br />
              <a id="home" className="menu-item" href="/solicitud-transaccion">
                Transaccion
              </a>
              <br />
              <a id="home" className="menu-item" href="/vertransacciones">
                Ver Transacciones
              </a>
            </Menu>

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 6 }}>
              Gestion de Recursos Financieros
            </Typography>
            <Button color="inherit" onClick={() => this.cerrarSesion()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    );
  }
}
export default ButtonAppBar;
