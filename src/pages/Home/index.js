import React from "react";
import {
    Avatar,
    Container,
    Text,
    TextHello,
    TextName,
    Description,
    ContainerAvatar,
    ButtonLinkedin,
    Link,
    AboutMeContainer,
    AvatarAboutMe,
    TextAboutMe
} from './styles'
import { Header } from '../../components/Header'
import avatar from '../../assets/avatar.png'
import avatar2 from '../../assets/avatar2.png'

export const Home = () => {
    return (
        <>
            <Container id="home">
                <Header />
                <Description>
                    <TextHello>Oi, eu sou</TextHello>
                    <TextName>Herbert Carlos.</TextName>
                    <Text>Desenvolvedor Full-Stack</Text>
                    <ButtonLinkedin>
                        <Link href="https://www.linkedin.com/in/herbert-carlos-063a62184/" target='_blank'>Linkedin</Link>
                    </ButtonLinkedin>
                </Description>
                <ContainerAvatar>

                    <Avatar src={avatar} />
                </ContainerAvatar>
            </Container >

            <AboutMeContainer id="aboutMe">
                <AvatarAboutMe src={avatar2} />
                <TextAboutMe>Sobre mim

                    <p style={{textIndent: '30px'}}>Meu nome é Herbert Carlos e eu sou um apaixonado </p>
                    
                    por tecnologia que decidiu trilhar o caminho da 
                    <br/> 
                    programação. Possuo experiência em Desenvolvimento 
                    <br/> 
                    Web. Trabalhei com projetos envolvendo gestão 
                    <br/> 
                    de seguros, APIs e banco de dados. Atualmente estou 
                    <br/> 
                    focando nas tecnologias voltadas ao Frontend e Backend. 
                    <br/> 


                   <p style={{textIndent: '30px', marginTop: '10px'}}>Hoje já entendo tecnologias como ReactJS, NodeJS, Mysql e etc.</p></TextAboutMe>
            </AboutMeContainer>
        </>

    )
}