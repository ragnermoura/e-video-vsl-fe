import { ToastContainer, toast } from "react-toastify"
import { Btn, Card, Container, Input, Title } from "./styles"
import { useState } from "react"
import { authApi } from "../../services/auth"
import { useNavigate } from "react-router-dom"


export default () => {

    const [user, setUser] = useState({
        email: '',
    })

    const navigate = useNavigate()

    const [isDisibled, setIsDisabled] = useState(false)

    const handleSendCode = async () => {

        const res = await authApi.sendEmailRecovery(user)

        console.log('res', res)

        if(!res?.success){
            toast.error(res?.message, {
               theme: 'colored' 
            })
        }

        if(res?.data?.success){
            localStorage.setItem('email', user.email)

            navigate('/verificar-codigo')
        }

        setIsDisabled(true)
    }

    return(

        <Container>

        <Title>Esqueceu sua senha? Não se preocupe. escreva seu e-mail abaixo para redefinir sua senha</Title>


        <Card>

            <Input type="text" placeholder="Digite seu e-mail" onChange={(e) => setUser({...user, email: e.target.value})}  />

            <Btn disabled={isDisibled}  onClick={handleSendCode}>
                Recuperar 
            </Btn>
        </Card>


<ToastContainer/>
        </Container>

    )
}