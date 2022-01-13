import React, { useEffect } from "react";
import { Grid, Button, Typography } from "@mui/material";
import { HomeSharp } from "@material-ui/icons";
import FormControl from "@mui/material/FormControl";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";

export default function VerTransaccion() {
  const [transaccion, SetTransacciones] = React.useState([]);

  useEffect(() => {
    const getTransacciones = async () => {
      const res = await axios.get('https://deerland-finanzas.herokuapp.com/transacciones');
      const response = res.data.map(({transaction_num, ...rest}) => ({...rest, id:transaction_num}));
      SetTransacciones(response);
    };
    getTransacciones();
  }, []);

  const columns = [
    { field: "id", headerName: "ID", width: 150 },
    {
      field: 'status',
      headerName: 'Estatus',
      width: 150,
      editable: false,
    },
    {
        field: 'date',
        headerName: 'Fecha',
        width: 150,
        editable: false,
    },
    {
        field: 'ammount',
        headerName: 'Monto',
        width: 100,
        editable: false,
    },
    {
        field: 'origin',
        headerName: 'Cuenta Origen',
        width: 150,
        editable: false,
    },
    {
        field: 'destiny',
        headerName: 'Cuenta Destino',
        width: 150,
        editable: false,
    },
    {
        field: 'receipt',
        headerName: 'Recibo',
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
            Transacciones
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
            onClick={() => (window.location.href = "/menu")}
          >
            Home
          </Button>
        </FormControl>
      </Grid>
    </Grid>
  );
}