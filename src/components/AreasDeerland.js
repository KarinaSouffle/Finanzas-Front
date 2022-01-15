
import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { HomeSharp } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { render } from "react-dom/cjs/react-dom.development";

export default function Nomina() {
  const [areas, setAreasDeerland] = React.useState([]);

  useEffect(() => {
    const getAreasDeerland = async () => {
      const res = await axios.get('https://deerland-finanzas.herokuapp.com/areasdeerland');
      const response = res.data.map(({ID_A, ...rest}) => ({...rest, id:ID_A}));
      setAreasDeerland(response);
    };
    getAreasDeerland();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: 'Nombre_A',
      headerName: 'Nombre Area',
      width: 150,
      editable: true,
    }
  ];

  return (
    return(){
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

            <Typography variant="h6" component="div" sx={{ flexGrow: 1, ml: 12 }}>
              Gestion de Recursos Financieros
            </Typography>
            <Button color="inherit" onClick={() => this.cerrarSesion()}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
    }
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sm={12} md={6} className="ingredients-form">
        <FormControl>
          <Typography variant="h4" component="h4" marginTop="40px">
            Areas Deerland
          </Typography>
          <br />
          <div style={{ height: 400, width: 1010 }}>
            <DataGrid
              rows={areas}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
          <br />
          <Button
            variant="contained"
            color="success"
            onClick={() => (window.location.href = "/menu")}
          >
            Inicio
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}
