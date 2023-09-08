import { useNavigate } from "react-router-dom"
import { useState } from "react"
import Axios from "axios"
function Login(){

    const navigate = useNavigate('')
    
    const handleClickRegister = () => {
        navigate('cadastro')
    }
    
    const [values, setValues] = useState()
    
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
    
        Axios.post("http://localhost:3001/login",{
            ds_nome: values.email,
            ds_password: values.password,
        }).then((response) =>{
            console.log(response) 
        })
    }


    return(
        <>
        <h1>Login</h1>

        <form>
            <label >Email</label>
            <input type="email" name="email" onChange={handleChangeValues} />

            
            <label>Senha</label>
            <input type="password" name="password" onChange={handleChangeValues} />

            <button type="button" onClick={()=> handleClickButton()}>Login</button>
            
        </form>
        <button onClick={()=> handleClickRegister()}>Cadastrar-se</button>
        </>
    )
}

export default Login