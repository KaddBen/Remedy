import React, { useState, useEffect } from 'react'

const Input = (props) => {
    const [focused, setFocused] = useState(false);
    const [errorMsg, setErrorMsg]= useState("");
    useEffect(() => {
    if(props.type === "text") setErrorMsg("Ce champ doit contenir au moins 3 caracteres");
    if(props.type === "date") setErrorMsg("Veuillez entrez une date valide");

} ,[props.type])
    
    const handleFocus = () => setFocused(true)
  return (
<div>
<input type={props.type} id={props.id} pattern={props.pattern} onBlur={handleFocus} onChange={props.onChange} focused={focused.toString()} value={props.value}/>
<span >{errorMsg}</span>
</div>
  )
 
}

export default Input;

