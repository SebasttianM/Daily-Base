import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios  from "axios";
import {
    ButtonRegister,
    ForgotPassword,
    GoogleLogo,
    ImgRegister,
    InputEmail,
    InputSearch,
    InputTitle,
    InputTitleEmail,
    LoginLine,
    LoginTitle,
    MainRegister,
    Register,
    RegisterEmail,
    RegisterInput,
    Suscribe,
    TitleRegister,
} from "../style/styled";
import { url } from "../helpers/url";

const Registro = () => {


    const [email, setEmail] = useState();


    const [emailSearch, setEmailSearch] = useState()

    const getEmail = () => {
        axios.get(url)
        .then(resp=> {console.log(resp.data)
        setEmail(resp.data)
        })

        .catch(error=>console.log(error))
    };

    

    const submitPrevent= (e)=>{
        e.preventDefault()
    }
    
   

    useEffect(() => {
      getEmail();
    }, [])
    
    // const{correo}= email

    const handleChange= ({target})=>{
        
        setEmailSearch(target.value)

         if (setEmailSearch === emailSearch) {
             console.log(email)
         } else {
            
         }
    }

    return (
        <Register>
            <ImgRegister
                src="https://res.cloudinary.com/svartblood/image/upload/v1648618153/dailybits/Color_Purple_Container_Yes_rdtwcv.png"
                alt=""
            />
            <MainRegister>
                <TitleRegister>Iniciar sesion</TitleRegister>
                <RegisterInput>
                    <RegisterEmail>
                        
                            <ButtonRegister>
                                <GoogleLogo
                                    src="https://res.cloudinary.com/svartblood/image/upload/v1648668535/dailybits/logosDailybits/Vector_hweesv.png"
                                    alt=""
                                />
                                <LoginTitle>
                                    <InputTitleEmail>
                                        Correo Electronico
                                    </InputTitleEmail>
                                </LoginTitle>
                            </ButtonRegister>
                            <LoginLine />
                            <InputEmail onSubmit={submitPrevent}>
                                <InputTitle>Correo electronico</InputTitle>
                                <InputSearch placeholder="Ingrese su correo electronico"  onChange={handleChange}/>
                            </InputEmail>
                        
                    </RegisterEmail>
                </RegisterInput>
                    
                <ForgotPassword>
                    <Link to="#">Se te olvido tu contrasena?</Link>
                </ForgotPassword>
                <Suscribe>Aun no tienes cuenta? Inscribete{emailSearch}</Suscribe>
            </MainRegister>
        </Register>
    );
};

export default Registro;
