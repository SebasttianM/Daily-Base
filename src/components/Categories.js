import React from "react";
import {
    Announce,
    CategoriesStyle,
    CssContainer,
    CssImg,
    CssText,
    Estadisticas,
    EstadisticasImg,
    EstadisticasText,
    FigmaContainer,
    FigmaImg,
    FigmaText,
    Footer,
    Home,
    HomeIcon,
    HomeText,
    HtmlCage,
    HtmlContainer,
    HtmlImg,
    HtmlText,
    JsContainer,
    JsImg,
    JsText,
    MainCategories,
    PerfilCage,
    PerfilContainer,
    PerfilIcon,
    Section2,
    Section3,
    TopAnnounce,
    UxContainer,
    UxImg,
    UxText,
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
                <Section3>
                    <FigmaContainer>
                        <FigmaImg
                            src="https://res.cloudinary.com/svartblood/image/upload/v1648872799/dailybits/figg_xzcenx.png"
                            alt=""
                        />
                        <FigmaText>FIGMA</FigmaText>
                    </FigmaContainer>
                    <UxContainer>
                        <UxImg
                            src="https://res.cloudinary.com/svartblood/image/upload/v1648872688/dailybits/Ux_pgw6ag.png"
                            alt=""
                        />
                        <UxText> UX</UxText>
                    </UxContainer>
                </Section3>
                <Footer>
                    <PerfilContainer>
                        <PerfilCage
                            src="https://res.cloudinary.com/svartblood/image/upload/v1648880991/dailybits/logosDailybits/perfil_eohckv.png"
                            alt=""
                        />
                    </PerfilContainer>
                    <Estadisticas>
                        <EstadisticasImg
                            src="https://res.cloudinary.com/svartblood/image/upload/v1648668445/dailybits/logosDailybits/Property_1_activity_wzwo0q.svg"
                            alt=""
                        />
                        <EstadisticasText>Estadisticas</EstadisticasText>
                    </Estadisticas>
                    <Home>
                        <HomeIcon
                            src="https://res.cloudinary.com/svartblood/image/upload/v1648668445/dailybits/logosDailybits/Property_1_home_gebz1d.svg"
                            alt=""
                        />
                        <HomeText>Home</HomeText>
                    </Home>
                </Footer>
            </MainCategories>
        </CategoriesStyle>
    );
};

export default Categories;
