import React from "react";
import {
    Announce,
    CategoriesStyle,
    CssContainer,
    CssImg,
    CssText,
    HtmlCage,
    HtmlContainer,
    HtmlImg,
    HtmlText,
    JsContainer,
    JsImg,
    JsText,
    MainCategories,
    Section2,
    TopAnnounce,
} from "../style/styled";

const Categories = () => {
    return (
        <CategoriesStyle>
            <TopAnnounce>
                <Announce>
                    Practica tus conocimientos en la categoría que prefieras.
                </Announce>
            </TopAnnounce>
            <MainCategories>
                <HtmlContainer>
                    <HtmlImg
                        src="https://res.cloudinary.com/svartblood/image/upload/v1648712863/dailybits/htmlimg_tqt4cb.png"
                        alt=""
                    />
                    <HtmlText>HTML</HtmlText>
                </HtmlContainer>
                <Section2>
                    <CssContainer>
                        <CssImg
                            src="https://res.cloudinary.com/svartblood/image/upload/v1648715140/dailybits/Css_re9smz.png"
                            alt=""
                        />
                        <CssText>CSS</CssText>
                    </CssContainer>
                    <JsContainer>
                        <JsImg src="https://res.cloudinary.com/svartblood/image/upload/v1648716011/dailybits/JS_jmplow.png" />
                        <JsText>JS</JsText>
                    </JsContainer>
                </Section2>
            </MainCategories>
        </CategoriesStyle>
    );
};

export default Categories;
