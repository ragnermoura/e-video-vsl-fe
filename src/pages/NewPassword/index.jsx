import { ToastContainer, toast } from "react-toastify"
import { Btn, Card, Container, Input, Title } from "./styles"
import { useState } from "react"
import { authApi } from "../../services/auth"
import { useNavigate } from "react-router-dom"


export default () => {

    const [user, setUser] = useState({
        senha: '',
        confirmSenha: ''
    })

    const navigate = useNavigate()

    const [isDisibled, setIsDisabled] = useState(false)

    const handleSendCode = async () => {

        const email = await localStorage.getItem('email')
        const body = {
         email: email,
         ...user
        }
        const res = await authApi.newPassword(body)
        console.log(res)
        if(res?.data?.success){
            
            
            toast.success(res?.data?.message)

                setTimeout(() => {
                
                    navigate('/')
    
                }, 1000)


                localStorage.clear()
        } else{
            toast.error(res?.message)
        }

        setIsDisabled(true)
    }

    return(

        <Container>

        <Title>Escreva a nova senha</Title>


        <Card>

            <Input type="text" placeholder="Nova senha" onChange={(e) => setUser({...user, senha: e.target.value})}  />
            <Input type="text" placeholder="Confirme a senha" onChange={(e) => setUser({...user, confirmSenha: e.target.value})}  />

            <Btn disabled={isDisibled}  onClick={handleSendCode}>
                Recuperar 
            </Btn>
        </Card>


<ToastContainer/>
        </Container>

    )
}