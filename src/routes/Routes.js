import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import ButtonAppBar from "../components/Menu";
import SolicitudTransaccion from "../components/SolicitudTransaccion";
import AreasDeerland from "../components/AreasDeerland";
import SolicitudNomina from "../components/SolicitudNomina";
import SolicitudRecursos from "../components/SolicitudRecursos";
import VerTransacciones from "../components/VerTransacciones";
import AgregarArea from "../components/AgregarArea";
import AprobacionNomina from "../components/AprobacionNomina";
import AprobacionRecursos from "../components/AprobacionRecursos";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={ButtonAppBar} />
        <Route exact path="/areasdeerland" component={AreasDeerland} />
        <Route exact path="/solicitud-nomina" component={SolicitudNomina} />
        <Route exact path="/solicitud-recursos" component={SolicitudRecursos} />
        <Route exact path="/vertransacciones" component={VerTransacciones} />
        <Route exact path="/solicitud-transaccion" component={SolicitudTransaccion} />
        <Route exact path="/agregararea" component={AgregarArea}/>
        <Route exact path ="/aprobacionnomina" component={AprobacionNomina}/>
        <Route exact path ="/aprobacionrecursos" component={AprobacionRecursos}/>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
