import { Switch, Route } from "react-router-dom";
import Cadastro from "../Pages/Cadastro";
import Home from "../Pages/Home";
import Logado from "../Pages/Logado";

export default function Rotas() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route path="/cadastro">
        <Cadastro />
      </Route>
      <Route path="/logado/:user">
        <Logado />
      </Route>
    </Switch>
  );
}
