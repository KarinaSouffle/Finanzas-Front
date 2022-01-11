//vista
//desplegar tabla de nomina de bd
// tiene que generar lo de persepciones y deducciones
import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { HomeSharp } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

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
