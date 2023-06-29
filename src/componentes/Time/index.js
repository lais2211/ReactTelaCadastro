import Collaborator from '../Collaborator';
import './Time.css'

const Time = (props) =>{

    const css = {backgroundColor : props.corSecundaria}

return(

props.collaborators.length > 0 ?<section className='time' style={css}>
<h3 style={{borderColor : props.corPrimaria}}>{props.nome}</h3>
<div className='colaborators'>
{props.collaborators.map(collaborator => <Collaborator
nome={collaborator.nome}
cargo={collaborator.cargo}
imagem ={collaborator.imagem}
key={collaborator.nome}
corDeFundo={props.corPrimaria}></Collaborator>)}
</div>
</section> : ''

) 

}
export default Time;