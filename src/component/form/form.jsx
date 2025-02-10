import { useEffect } from "react"
import { useRef } from "react"

 

const Form =()=> {





 
    const emailRef = useRef(null)
     
 useEffect(  ()=>{
emailRef.current.focus()
 },[])

const handleclick=(e)=>{
    e.preventDefault()
console.log(emailRef.current.value);

}



    return (
        <div  >
<form onSubmit={handleclick} >
<input ref={emailRef} type=" text" name=" name"  />
<input type="submit" value="submit" />
 
</form>

        </div>
    )
}

export default Form
