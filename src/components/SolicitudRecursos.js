import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { HomeSharp } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function Recursos() {
  const [recursos, SetSolicitudRecursos] = React.useState([]);

  useEffect(() => {
    const getSolicitudRecursos = async () => {
      const res = await axios.get('https://deerland-finanzas.herokuapp.com/solicitud-recursos');
      const response = res.data.map(({ID_Solicitud_R, ...rest}) => ({...rest, id:ID_Solicitud_R}));
      SetSolicitudRecursos(response);
    };
    getSolicitudRecursos();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
        field: 'ID_A',
        headerName: 'ID del area',
        width: 150,
        editable: false,
    },
    {
        field: 'Nombre_P',
        headerName: 'Nombre proveedor',
        width: 150,
        editable: false,
      },
      {
        field: 'Subtotal',
        headerName: 'Subtotal',
        width: 150,
        editable: false,
      },
      {
        field: 'IVA',
        headerName: 'IVA',
        width: 150,
        editable: false,
      },{
        field: 'Total_C',
        headerName: 'Total',
        width: 150,
        editable: false,
      },{
        field: 'Fecha',
        headerName: 'Fecha',
        width: 150,
        editable: false,
      },{
        field: 'ES_Solicitud_R',
        headerName: 'Estado de Solicitud',
        width: 150,
        editable: true,
      },{
        field: 'Ajuste',
        headerName: 'Ajuste',
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
            Solicitudes de Recursos
          </Typography>
          <br />
          <div style={{ height: 400, width: 1010 }}>
            <DataGrid
              rows={recursos}
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
