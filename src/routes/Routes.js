import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Login from "../components/Login";
import ButtonAppBar from "../components/Menu";
import Horas from "../components/Horas";
import Solicitud from "../components/Solicitud";
import RevisarHoras from "../components/RevisarHoras";
import RevisarSolicitud from "../components/RevisarSolicitud";
import AreasDeerland from "../components/AreasDeerland";
import SolicitudNomina from "../components/SolicitudNomina";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route exact path="/menu" component={ButtonAppBar} />
        <Route exact path="/horas" component={Horas} />
        <Route exact path="/areasdeerland" component={AreasDeerland} />
        <Route exact path="/solicitud-nomina" component={SolicitudNomina} />
        <Route exact path="/solicitud" component={Solicitud} />
        <Route exact path="/revisarsolicitud" component={RevisarSolicitud} />
      </Switch>
    </BrowserRouter>
  );
}
export default Routes;
