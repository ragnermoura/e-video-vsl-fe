import { useState } from "react"
import {  Button, Container,InputArea, InputText, SmallText, Title } from "./styles"
import { FaEnvelope, FaLock } from 'react-icons/fa'
import  {useNavigate} from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import VerificationInput from "react-verification-input";
import { authApi } from "../../services/auth";
export default ( ) => {

      const navigate = useNavigate()
    const [code, setCode] = useState('')


    const handleValidate = async ()=> {

        const user = await localStorage.getItem('email')
        const body = {
         email: user,
         code
        }
        const res = await authApi.validateCode(body)
        console.log(res)
        if(res?.data?.success){
            
            
            toast.success(res?.data?.message)

                setTimeout(() => {
                
                    navigate('/nova-senha/')
    
                }, 1000)

            
        } else{
            toast.error(res?.message)
        }


    }


    return(

        <Container>
            
            <Title>
               Informe o código de confirmação no e-mail
            </Title>

            <InputArea>

            <VerificationInput
            
            classNames={{
                container: "container",
                character: "character",
                characterInactive: "character--inactive",
                characterSelected: "character--selected",
              }}
            placeholder="0"
            validChars="0-9"
            inputProps={{
                inputMode: 'numeric'
            }}
            length={4}
            value={code}
            onChange={t => {
                setCode(t)
            }}
            />

            </InputArea>

        <Button onClick={handleValidate}>
           Continuar
        </Button>
{/* 
        <SmallText>
            OU
        </SmallText>

        <OutLineButton onClick={() => {

        navigate('/cadastro')

        }}>
        <BtnText>
        CADASTRAR-SE
        </BtnText>    
        </OutLineButton> */}

        
        <ToastContainer/>
        </Container>

    )


}