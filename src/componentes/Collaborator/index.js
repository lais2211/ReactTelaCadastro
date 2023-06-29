import './Colaborator.css'

const Collaborator = (props) => {

return (
<div className='card'>
    <div className='cabecalho' style={{backgroundColor: props.corDeFundo}}>
       <img src = {props.imagem} alt ={props.nome}></img>
    </div>
    <div className='rodape'>
   <h4>{props.nome}</h4>
   <h5>{props.cargo}</h5>

    </div>
        
</div>
);

}

export default Collaborator;