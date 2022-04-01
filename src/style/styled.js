import styled from "styled-components";

export const Primary = styled.div`
    background-color: #6b47dc;
    width: 393px;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 400px){
        width: 100%;
    }
    `;

///Registro styled


export const Register = styled.div`
    position: relative;
    width: 393px;
    background-color: black;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (min-width: 400px) {
        width: 100%;
    }
`;


export const ImgRegister = styled.img`
    position: absolute;
    width: 80px;
    height: 80px;
    left: 140px;
    top: 32px;
    
`;

export const ImgCage = styled.div`
    position: absolute;
    width: 80px;
    height: 80px;
    left: 140px;
    top: 32px;
`;

export const MainRegister = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px 16px;

    position: absolute;
    width: 360px;
    height: 343px;
    left: 0px;
    top: 149px;
`;

export const RegisterInput = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 0px;

    position: static;
    width: 328px;
    height: 160px;
    left: 16px;
    top: 71px;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 32px 0px;
`;

export const RegisterEmail = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 328px;
    height: 80px;
    left: 0px;
    top: 80px;
`;

export const TitleRegister = styled.h1`
    position:static;
    padding-top: 39px;
    width: 208px;
    height: 20px;
    left: calc(50% - 208px / 2);
    top: calc(50% - 39px / 2 - 152px);

    font-family: "Inter";
    font-style: normal;
    font-weight: 700;
    font-size: 32px;
    line-height: 39px;
    /* identical to box height */

    /* White */

    color: #fffffe;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 32px 0px;
`;

export const ButtonRegister = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px 16px;

    position: static;
    width: 328px;
    height: 48px;
    left: 0px;
    top: 0px;

    background: #ef4565;
    border-radius: 4px;
`;

export const GoogleLogo = styled.img`
    position: static;
    width: 24px;
    height: 24px;
    left: 63.5px;
    top: 12px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 8px;
`;

export const GoogleIcon = styled.div`
    position: absolute;
    left: 10.6%;
    right: 7.71%;
    top: 8.33%;
    bottom: 8.33%;
`;

export const LoginTitle = styled.div`
    position: static;
    width: 169px;
    height: 24px;
    left: calc(50% - 169px / 2 + 16px);
    top: calc(50% - 24px / 2);


    font-family: "Inter";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;

    color: #fffffe;
`;

export const LoginLine = styled.div`
    position: static;
    width: 328px;
    height: 0px;
    left: 0px;
    top: 64px;

    /* Grey */

    border: 1px solid #94a1b2;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 0px;
`;

export const InputEmail = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 328px;
    height: 80px;
    left: 0px;
    top: 80px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    align-self: stretch;
    flex-grow: 0;
    margin: 16px 0px;
`;

export const InputTitle = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px 0px 0px 16px;

    position: static;
    width: 157px;
    height: 24px;
    left: 0px;
    top: 0px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
    color: white;
`;
export const InputTitleEmail = styled.div`
    width: 141px;
    height: 24px;
    left: 16px;
    top: 0px;

    /* /Body 1/Regular */

    font-family:"Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #fffffe;
    flex: none;
    
`;

export const InputSearch = styled.input`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 16px;

    position: static;
    width: 328px;
    height: 48px;
    left: 0px;
    top: 32px;
    background: #fffffe;
    border: 1px solid #72757e;
    box-sizing: border-box;
    border-radius: 4px;
    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const InputSearchEmail = styled.p`
    position: static;
    width: 221px;
    height: 24px;
    left: 16px;
    top: 12px;

    /* /Body 1/Regular */

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* Tertiary */

    color: #72757e;

    /* Inside auto layout */

    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 0px 8px;
`;

export const ForgotPassword = styled.p`
    position: static;
    width: 215px;
    height: 24px;
    left: 72.5px;
    top: 263px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-decoration-line: underline;
    color: #2cb67d;
    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 32px 0px;
`;

export const Suscribe = styled.p`
    position: static;
    width: 291px;
    height: 24px;
    left: 34.5px;
    top: 319px;

    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    /* White */

    color: #fffffe;

    /* Inside auto layout */

    flex: none;
    order: 3;
    flex-grow: 0;
    margin: 32px 0px;
`;

////Styled Categories


export const CategoriesStyle = styled.div`
    position: relative;
    width: 393px;
    height: 100vh;
    background: #16161a;
`;

export const TopAnnounce = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px;

    position: absolute;
    width: 393px;
    height: 82px;
    left: 0px;
    top: 0px;
`;
export const Announce = styled.p`
    position: static;
    width: 350px;
    height: 50px;
    left: 16px;
    top: 16px;

    /* Subtitle/Subtitle 1 */

    font-family: "Nunito";
    font-style: normal;
    font-weight: 600;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.0015em;

    color: #fffffe;

    flex: none;
    order: 0;
    flex-grow: 1;
    margin: 0px 16px;
`;

export const MainCategories = styled.main`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 393px;
    height:560px;
    left: 0px;
    top: 115px;
    border: 1px red solid;
`;

export const HtmlContainer = styled.div`
    position: static;
    width: 96px;
    height: 128px;
    left: 132px;
    top: 0px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 24px 0px;
    border: 1px red solid;
`;

export const HtmlCage = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 0px;

    position: absolute;
    width: 96px;
    height: 128px;
    left: 0px;
    top: 0px;
    border: 1px red solid;
`;

export const HtmlText = styled.div`
    position: static;
    left: 0%;
    right: 0%;
    top: 81.25%;
    bottom: 0%;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;

    text-align: center;
    letter-spacing: 0.005em;

    color: #fffffe;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const HtmlImg = styled.img`
    position: static;
    width: 90px;
    height: 90px;
    left: 0px;
    top: 0px;
    justify-content: center;
    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const Section2 = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 216px;
    height: 128px;
    left: 72px;
    top: 152px;
    border: 1px red solid;

    /* Inside auto layout */
    flex: none;
    order: 1;
    flex-grow: 0;
    margin: 24px 0px;
`;

export const CssContainer = styled.div`
    position: static;
    width: 96px;
    height: 128px;
    left: 0px;
    top: 0px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 0px 24px;
`;

export const CssText = styled.p`
    position: static;
    left: 0%;
    right: 0%;
    top: 81.25%;
    bottom: 0%;

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
 
    text-align: center;
    letter-spacing: 0.005em;

    color: #fffffe;

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const CssImg = styled.img`
    position: static;
    width: 96px;
    height: 96px;
    left: 0px;
    top: 0px;

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
    margin-left: -18px;
`;

export const JsContainer = styled.div`
    position: static;
    width: 96px;
    height: 128px;
    left: 120px;
    top: 0px;

    /* Inside auto layout */
    
    flex: none;
    order: 1;
    flex-grow: 0;
    margin-left: -26px;
    border: 1px solid red;
`;

export const JsText = styled.p`
    position: static;
    left: 0%;
    right: 0%;
    top: 81.25%;
    bottom: 0%;

    /* Body 1/Bold */

    font-family: "Nunito";
    font-style: normal;
    font-weight: 700;
    font-size: 16px;
    line-height: 24px;
    /* identical to box height, or 150% */

    text-align: center;
    letter-spacing: 0.005em;

    /* White */

    color: #fffffe;

    /* Inside auto layout */

    flex: none;
    order: 1;
    align-self: stretch;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const JsImg = styled.img`
    position: static;
    width: 96px;
    height: 96px;
    left: 0px;
    top: 0px;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
    margin: 8px 0px;
`;

export const Section3 = styled.section`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 216px;
    height: 128px;
    left: 72px;
    top: 304px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 24px 0px;
`;

export const FigmaContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;

    position: static;
    width: 216px;
    height: 128px;
    left: 72px;
    top: 304px;

    /* Inside auto layout */

    flex: none;
    order: 2;
    flex-grow: 0;
    margin: 24px 0px;
`;

export const FigmaImg = styled.img`
background-position: top;
`
