import React from "react";
import { Container, RightSide, List, ListItem, Logo } from './styles'


export const Header = () => {
    return(
        <Container>
            <Logo>aaa</Logo>
                <List>
                    <ListItem>Início</ListItem>
                    <ListItem>Sobre mim</ListItem>
                    <ListItem>Projetos</ListItem>
                    <ListItem>Habilidades</ListItem>
                </List>
        </Container>
    )
}