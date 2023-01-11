import React from "react";
import { Avatar, Container, Text, TextHello, TextName, Description, ContainerAvatar, ButtonLinkedin, Link, AboutMeContainer } from './styles'
import { Header } from '../../components/Header'
import avatar from '../../assets/avatar.png'

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

       </AboutMeContainer>
        </>

    )
}