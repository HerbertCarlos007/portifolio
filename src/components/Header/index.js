import React from "react";
import { Container, RightSide, List, ListItem, Logo, LinkToSession } from './styles'


export const Header = () => {
    return(
        <Container>
            <Logo>HC</Logo>
                <List>
                    <ListItem>
                        <LinkToSession href="#home">Início</LinkToSession>
                    </ListItem>
                    <ListItem>
                        <LinkToSession href="#aboutMe">Sobre mim</LinkToSession>
                    </ListItem>
                    <ListItem>
                        <LinkToSession href="#projects">Projetos</LinkToSession>
                    </ListItem>
                    <ListItem>
                        <LinkToSession href="#skills">Habilidades</LinkToSession>
                    </ListItem>
                </List>
        </Container>
    )
}