import "./TextField.css"

export const TextField = (props) => {


const writhing = (event) => {
props.changed(event.target.value);
}


return ( 

<div className="text-field">

<label>{props.label}</label>
<input value={props.value}  onChange={writhing} required = {props.required} placeholder={props.placeholder
}></input>

</div>

)

}

export default TextField;