import React, { useEffect } from "react";
import { Grid, Button, TextField, Typography } from "@mui/material";
import { HomeSharp, SaveSharp } from "@material-ui/icons";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import axios from "axios";

//aqui debe haber inputs de
//drop down eliges el empleado
//horas trabajadas (solicitudnom)
//horas extras (solicitudnom)

export default function Horas() {
  const [recursos, setrecursos] = React.useState([]);
  const [selectedrecursos, setselectedrecursos] = React.useState("");
  const [estado, setestado] = React.useState("");

  useEffect(() => {
    const getrecursos = async () => {
      const res = await axios.get(
        "https://deerland-finanzas.herokuapp.com/recursosproceso"
      );
      //console.log(res);
      const response = await res.data;
      setrecursos(response);
    };
    getrecursos();
  }, []);
  return (
    <Grid
      container
      direction="column"
      justifyContent="center"
      alignItems="center"
    >
      <Grid item sm={12} md={6} className="ingredients-form">
        <FormControl>
          <Typography variant="h4" component="h4" marginTop="40px">
            Aprobacion de Solicitudes de Recursos
          </Typography>
          <br />
          <Select
            displayEmpty
            value={selectedrecursos}
            onChange={(ev) => setselectedrecursos(ev.target.value)}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {recursos.map((recursos) => (
              <MenuItem
                key={recursos.ID_Solicitud_R}
                value={recursos.ID_Solicitud_R}
              >
                {recursos.ID_Solicitud_R}
              </MenuItem>
            ))}
          </Select>
          <br />
          <TextField
            id="outlined-basic"
            label="Estado nuevo"
            variant="outlined"
            type="text"
            onChange={(ev) => setestado(ev.target.value)}
          />
          <Button
            color="success"
            variant="contained"
            startIcon={<SaveSharp />}
            onClick={async () => {
              let rest = await axios.put(
                "https://deerland-finanzas.herokuapp.com/solicitud-recursos/editar/"+selectedrecursos,
                {
                  "ES_Solicitud_R": estado,
                }
              );
              alert("Reporte guadado");
              window.location.href = "/menu";
            }}
          >
            Guardar Estado
          </Button>
          <br />
          <Button
            variant="contained"
            startIcon={<HomeSharp />}
            onClick={() => (window.location.href = "/menu")}
          >
            Home
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );

}
