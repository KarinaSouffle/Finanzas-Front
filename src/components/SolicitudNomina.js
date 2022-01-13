import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { HomeSharp } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function Nomina() {
  const [nomina, SetSolicitudNomina] = React.useState([]);

  useEffect(() => {
    const getSolicitudNomina = async () => {
      const res = await axios.get('https://deerland-finanzas.herokuapp.com/solicitud-nomina');
      const response = res.data.map(({ID_Solicitud_N, ...rest}) => ({...rest, id:ID_Solicitud_N}));
      SetSolicitudNomina(response);
    };
    getSolicitudNomina();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: 'NumNomina',
      headerName: 'Numero de nomina',
      width: 150,
      editable: false,
    },{
        field: 'ID_A',
        headerName: 'ID del area',
        width: 150,
        editable: false,
    },
    {
        field: 'Total_Horas_T',
        headerName: 'Horas trabajadas',
        width: 150,
        editable: false,
      },
      {
        field: 'Total_Sueldo_B',
        headerName: 'Sueldo base',
        width: 150,
        editable: false,
      },
      {
        field: 'Sueldo_Total',
        headerName: 'Sueldo Total',
        width: 150,
        editable: false,
      },{
        field: 'Fecha',
        headerName: 'Fecha',
        width: 150,
        editable: false,
      },{
        field: 'ES_Solicitud_N',
        headerName: 'Estado Solicitud',
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
            Solicitudes de Nomina
          </Typography>
          <br />
          <div style={{ height: 400, width: 1010 }}>
            <DataGrid
              rows={nomina}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
            />
          </div>
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
