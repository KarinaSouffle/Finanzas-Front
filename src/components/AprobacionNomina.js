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
  const [nomina, setnomina] = React.useState([]);
  const [selectednomina, setselectednomina] = React.useState("");
  const [horastrabajadas, sethorastrabajadas] = React.useState("");
  const [horasextra, sethorasextra] = React.useState("");

  useEffect(() => {
    const getnomina = async () => {
      const res = await axios.get(
        "https://deerland-finanzas.herokuapp.com/solicitud-nomina"
      );
      //console.log(res);
      const response = await res.data;
      setnomina(response);
    };
    getnomina();
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
            Reporte de horas trabajadas
          </Typography>
          <br />
          <Select
            displayEmpty
            value={selectednomina}
            onChange={(ev) => setselectednomina(ev.target.value)}
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {nomina.map((nomina) => (
              <MenuItem
                key={nomina.ID_Solicitud_N}
                value={nomina.ID_Solicitud_N}
              >
                {nomina.ID_Solicitud_N}
              </MenuItem>
            ))}
          </Select>
          <br />
          <TextField
            id="outlined-basic"
            label="Horas trabajadas"
            variant="outlined"
            type="number"
            onChange={(ev) => sethorastrabajadas(ev.target.value)}
          />
          <br />
          <TextField
            id="outlined-basic"
            label="Horas extra"
            variant="outlined"
            type="number"
            onChange={(ev) => sethorasextra(ev.target.value)}
          />
          <br />
          <Button
            color="success"
            variant="contained"
            startIcon={<SaveSharp />}
            onClick={async () => {
              let rest = await axios.post(
                "https://deerland-nomina.herokuapp.com/Horas",
                {
                  ID_Solicitud_N: selectednomina,
                  horasextra: horasextra,
                  horastrabajadas: horastrabajadas,
                }
              );
              alert("Reporte guadado");
              window.location.href = "/";
            }}
          >
            Guardar horas trabajadas
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
}
