import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import ButtonAppBar from "../components/Menu";
import Horas from "../components/Horas";
import RevisarSolicitud from "../components/RevisarSolicitud";
import AreasDeerland from "../components/AreasDeerland";
import SolicitudNomina from "../components/SolicitudNomina";
import SolicitudRecursos from "../components/SolicitudRecursos";
import VerTransacciones from "../components/VerTransacciones";
import AgregarArea from "../components/AgregarArea";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={ButtonAppBar} />
        <Route exact path="/horas" component={Horas} />
        <Route exact path="/areasdeerland" component={AreasDeerland} />
        <Route exact path="/solicitud-nomina" component={SolicitudNomina} />
        <Route exact path="/solicitud-recursos" component={SolicitudRecursos} />
        <Route exact path="/vertransacciones" component={VerTransacciones} />
        <Route exact path="/revisarsolicitud" component={RevisarSolicitud} />
        <Route exact path="/agregararea" component={AgregarArea}/>
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
