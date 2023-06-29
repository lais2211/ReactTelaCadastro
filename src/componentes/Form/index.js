import "./Form.css";
import TextField from "../TextField"
import SuspendList from "../SuspendList";
import Button from "../Button";
import { useState } from "react";

const Form = (props) => {

  const save = (event) => {
    event.preventDefault();
    props.registerCollaborator(
     { nome,cargo,imagem,time}
    )
    setNome('')
    setCargo('')
    setImagem('')
    setTime('')
  }

  const [nome, setNome] = useState('')
  const [cargo, setCargo] = useState('')
  const [imagem, setImagem] = useState('')
  const [time, setTime] = useState('')

  return (
    <section className="form">
      <form onSubmit={save}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <TextField value = {nome} changed = {value => setNome(value)}label="Nome" required = {true} placeholder="Digite seu nome" />
        <TextField  value = {cargo} changed = {value => setCargo(value)} label="Cargo" required = {true} placeholder="Digite seu cargo" />
        <TextField value = {imagem} changed = {value => setImagem(value)} label="Imagem" placeholder="Informe o endereço da imagem" />
        <SuspendList value = {time} changed = {value => setTime(value)} label = "Time" required = {true} itens = {props.times}></SuspendList>
        <Button>
          Criar Card
        </Button>
      </form>
    </section>
  );
};

export default Form;