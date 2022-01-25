function Formgroup(props) {
    return (
        <span className="form-group">
            <label htmlFor={props.htmlFor}> {props.label} </label>
            <input type={props.type} id={props.id} value={props.value} size={props.size} maxLength={props.maxLength} minLength={props.minLength} onChange={props.onChange} name={props.name} placeholder={props.placeholder} required />
            
        </span>
    )
}
export default Formgroup;