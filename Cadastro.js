import { useState } from "react"
import Axios from "axios"
import { useNavigate } from "react-router-dom"


function Cadastro(){

    const navigate = useNavigate('')

    const [values, setValues] = useState()
    
    const handleChangeValues = (value) => {
        setValues((prevValue) => ({
            ...prevValue,
            [value.target.name]: value.target.value,
        }))
    }

    const handleClickButton = () => {
    
        Axios.post("http://localhost:3001/register",{
            ds_nome: values.email,
            ds_password: values.password,
        }).then((response) =>{
            console.log(response)
        })
        navigate('/')
    }

    return(
        <>
        <h1>CADASTRO</h1>
        <form>
            <label >Email</label>
            <input type="email" name="email" onChange={handleChangeValues} />

            
            <label>Senha</label>
            <input type="password" name="password" onChange={handleChangeValues} />

            <button type="button"  onClick={()=> handleClickButton()}>Cadastrar</button>
            
        </form>
        </>
    )
}

export default Cadastro