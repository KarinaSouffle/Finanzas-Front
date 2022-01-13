import React, { useEffect } from "react";
import { Grid, Button, Typography, TextField } from "@mui/material";
import { HomeSharp, Send } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";


export default function Solicitud() {
  const [solicitud, setSolicitud] = React.useState([]);
  const [fechaPago, setFechaPago] = React.useState("");

 
  useEffect(() => {
    const getSolicitud= async () => {
      const res = await axios.get('https://deerland-finanzas.herokuapp.com/areasdeerland');
      const response = res.data.map(({ID_A, ...rest}) => ({...rest, id:ID_A}));
      setSolicitud(response);
    };
    getSolicitud();
  }, []);

  const columns = [
    { field: "id", headerName: "ID Empleado", width: 110 },
    { field: "Nombre_A", headerName: "Nombre", width: 180 },
    
  ];

  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item  className="solicitud-form">
        <FormControl>
          <Typography variant="h4" component="h4" marginTop="40px">
            Areas Deerland
          </Typography>
          <br />
        </FormControl>
      </Grid>
      <Grid item md={12}>  
          <div style={{ height: 500, width:1010}}>
            <DataGrid
              rows={solicitud}
              columns={columns}

            />
          </div>
          </Grid>
          <Grid item md={12}>  
            <FormControl>
            <Typography variant="p" component="p" marginTop="40px">
            Agregar Area Deerland
          </Typography>  
            <TextField
              id="outlined-basic"
              variant="outlined"
              type="text"
              onChange={(ev) => setFechaPago(ev.target.value)}
           />
              <Button
                color="secondary"
                variant="contained"
                startIcon={<Send />}
                onClick={()=>{Agregar(solicitud)}}
              >
                Enviar Area
              </Button>
              <br />
              <Button
                variant="contained"
                startIcon={<HomeSharp />}
                onClick={() => (window.location.href = "/")}
              >
                Home
              </Button>
            </FormControl>
          </Grid>
    </Grid>
  );
  function Agregar(solicitud){
    axios.post("https://deerland-finanzas.herokuapp.com/areasdeerland/agregar",
          {
            'Nombre_A': fechaPago
          }).then(response => console.log(response));
    alert("Area Agregada");
    window.location.href = "/";
  }
}