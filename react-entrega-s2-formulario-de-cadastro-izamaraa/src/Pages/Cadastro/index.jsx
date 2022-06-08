import "./style.css";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";

export default function Cadastro() {
  const history = useHistory();

  const validacoesYup = yup.object().shape({
    nome: yup.string().required("Preencher campo nome é obrigatório!"),
    email: yup
      .string()
      .required(" Preencher campo Email é obrigatorio!")
      .email("Email inválido"),
    senha: yup
      .string()
      .required("Preencher campo senha é obrigatório!")
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Formato de senha incorreto ! São necessarios 8 caracteres, ter letras maiúsculas e minúsculas, números e ao menos um símbolo"
      ),

    confirmarsenha: yup
      .string()
      .required("confirmação de senha é obrigatório!")
      .oneOf([yup.ref("senha")], "senha incorreta, tente novamente"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(validacoesYup) });

  function cadastrarUsuario(data) {
    history.push(`/logado/${data.nome}`);
  }

  return (
    <div className="cadastro">
      <h1>Formulário de Cadastro</h1>
      <form onSubmit={handleSubmit(cadastrarUsuario)} className="formulario">
        <input
          id="nome"
          placeholder="Digite seu nome aqui."
          {...register("nome")}
        ></input>
        {errors.nome?.message}
        <input
          id="email"
          placeholder="Digite seu email aqui."
          {...register("email")}
        ></input>
        {errors.email?.message}
        <input
          id="senha"
          placeholder="Digite sua senha aqui."
          {...register("senha")}
        ></input>
        {errors.senha?.message}
        <input
          id="confirmarsenha"
          placeholder="Confirme sua senha aqui."
          {...register("confirmarsenha")}
        ></input>
        {errors.confirmarsenha?.message}
        <button className="botaoCadastrar" type="submit">
          Cadastrar
        </button>
      </form>
    </div>
  );
}
