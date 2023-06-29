import './SuspendList.css'

const SuspendList = (props) => {

    return(

        <div className='suspendList'>

        <label>{props.label}</label>
        <select onChange={event =>props.changed(event.target.value)} required = {props.required} value={props.value}>
        <option value=""></option>
            {props.itens.map(i => <option key = {i}>{i}</option>)}
        </select>

        </div>


    )

}

export default SuspendList;