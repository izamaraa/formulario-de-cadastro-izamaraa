import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";
import "./style.css";
export default function Logado() {
  const params = useParams();
  const history = useHistory();
  console.log(params);
  return (
    <>
      <div className="logado">
        <div>
          <h1>Olá, seja bem vindo(a) {params.user} !</h1>
          <button onClick={() => history.push("/")}>Voltar inicio</button>
        </div>
      </div>
    </>
  );
}
