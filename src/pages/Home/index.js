import React from "react";
import { Avatar, Container, Text, TextHello, TextName } from './styles'
import { Header } from '../../components/Header'
import avatar from '../../assets/avatar.png'

export const Home = () => {
    return (
        <Container>
                <Header />
                <TextHello>Oi, eu sou</TextHello>
                <TextName>Herbert Carlos.</TextName>
                <Text>Desenvolvedor Full-Stack</Text>
                
            </Container>
    )
}