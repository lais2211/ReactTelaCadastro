import { useState } from "react";
import "./App.css";
import Banner from "./componentes/Banner";
import  Form  from "./componentes/Form";
import Time from "./componentes/Time";
import Footer from "./componentes/Footer";

function App() {

  const times = [
  {
    nome: 'Programação',
    corPrimaria:'#57C278',
    corSecundaria:'#D9F7E9'
  },
  {
    nome: 'Front-End',
    corPrimaria:'#82CFFA',
    corSecundaria:'#E8F8FF'
  },
  {
    nome: 'Data Science',
    corPrimaria:'#A6D157',
    corSecundaria:'#F0F8E2'
  },
  {
    nome: 'Devops',
    corPrimaria:'#E06B69',
    corSecundaria:'#FDE7E8'
  },
  {
    nome: 'UX e Design',
    corPrimaria:'#DB6EBF',
    corSecundaria:'#FAE9F5'
  },
  {
    nome: 'Mobile',
    corPrimaria:'#FFBA05',
    corSecundaria:'#FFF5D9'
  },
  {
    nome: 'Inovação de Gestão',
    corPrimaria:'#FF8A29',
    corSecundaria:'#FFEEDF'
  }
  ];

  const [collaborators,setCollaborator]= useState ([])

  const newCollaboratorRegister = (collaborator) => {
    setCollaborator([...collaborators,collaborator]);
  }

  return (
    <div className="App">
      <Banner />
      <Form times={times.map(time => time.nome)} registerCollaborator= {collaborator => newCollaboratorRegister(collaborator)}/>
      {times.map(time => <Time 
      key={time.nome} 
      nome= {time.nome} 
      corPrimaria = {time.corPrimaria} 
      corSecundaria = {time.corSecundaria} 
      collaborators={collaborators.filter(collaborator => collaborator.time === time.nome)}
      /> )}
      <Footer></Footer>
    </div>
    
  );
}

export default App;
