import { useHistory } from "react-router-dom";

export default function Home() {
  const history = useHistory();
  return (
    <div>
      <h1>Entre para se cadastrar !</h1>
      <button onClick={() => history.push("/cadastro")}>Entrar</button>
    </div>
  );
}
