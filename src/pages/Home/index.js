import React from "react";
import { Avatar, Container, Text, TextHello, TextName, Description, ContainerAvatar } from './styles'
import { Header } from '../../components/Header'
import avatar from '../../assets/avatar.png'

export const Home = () => {
    return (
        <Container>
            <Header />
            <Description>
                <TextHello>Oi, eu sou</TextHello>
                <TextName>Herbert Carlos.</TextName>
                <Text>Desenvolvedor Full-Stack</Text>
            </Description>
            <ContainerAvatar>

            <Avatar src={avatar}/>
            </ContainerAvatar>
        </Container>
    )
}