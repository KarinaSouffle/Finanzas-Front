import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { HomeSharp } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function Recursos() {
  const [transaccion, SetTransacciones] = React.useState([]);

  useEffect(() => {
    const getTransacciones = async () => {
      const res = await axios.get('https://deerland-finanzas.herokuapp.com/transaccion');
      const response = res.data.map(({Transaction_num, ...rest}) => ({...rest, id:Transaction_num}));
      SetTransacciones(response);
    };
    getTransacciones();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
      field: 'Fecha',
      headerName: 'Fecha',
      width: 150,
      editable: false,
    },
    {
        field: 'Recibo',
        headerName: 'Recibo',
        width: 150,
        editable: false,
    },
    {
        field: 'Origen',
        headerName: 'Cuenta de Origen',
        width: 150,
        editable: false,
    },
    {
        field: 'Destino',
        headerName: 'Cuenta Destino',
        width: 150,
        editable: false,
    },
    {
        field: 'Estatus',
        headerName: 'Estatus de la transaccion',
        width: 150,
        editable: false,
    },
    {
        field: 'Monto',
        headerName: 'Monto',
        width: 150,
        editable: false,
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
              rows={transaccion}
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