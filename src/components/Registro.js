import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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

    const navigate = useNavigate()


    const [userBd, setUserBd] = useState()

    const [user, setUser] = useState()
    
    const getEmail = () => {
        axios.get(url)
        .then(resp=> {
        setUserBd(resp.data)
      
        })

        .catch(error=>console.log(error))
    };

    const handleSubmit= (e)=>{
        e.preventDefault()
        searchUser(user)
    }
    

    useEffect(() => {
      getEmail();
    }, [])
    
    const handleChange=({target})=>{
        setUser(target.value)
    }

    console.log(user)

    const searchUser=(correo)=>{
        const busqueda= userBd.find(
            use=> use.correo.toString().toLowerCase().includes(correo.toLowerCase())
        )
        if(busqueda.correo=== user.toString()){
            console.log('Existe el correo')
            navigate('/categories')
            
        }else{
            alert('No estas registrado')
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
                            <InputEmail onSubmit={handleSubmit}>
                                <InputTitle>Correo electronico</InputTitle>
                                <InputSearch placeholder="Ingrese su correo electronico" onChange={handleChange} />
                            </InputEmail>
                        
                    </RegisterEmail>
                </RegisterInput>
                    
                <ForgotPassword>
                    <Link to="#">Se te olvido tu contrasena?</Link>
                </ForgotPassword>
                <Suscribe>Aun no tienes cuenta? Inscribete</Suscribe>
            </MainRegister>
        </Register>
    );
};

export default Registro;
