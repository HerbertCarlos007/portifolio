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
    TextAboutMe,
    ContainerProjects,
    Title,
    CardProjects,
    ContainerCardProjects,
    ComingSoon,
    TextComingSoon,
    LinkToGithub,
    Paragraph,
    ContainerSkills,
    ContainerWithMySkills,
    CardSkills,
    ImageSkill,
    ContainerDescriptionSkill,
    TextDescriptionSkill,
    Footer,
    TextEmailFooter,
    ContainerContact,
    ContainerIcons,
    ImageIcons,
    ContainerImageIcons
} from './styles'
import { Header } from '../../components/Header'
import avatar from '../../assets/avatar.png'
import avatar2 from '../../assets/avatar2.png'
import html from '../../assets/html.svg'
import css from '../../assets/css.svg'
import js from '../../assets/js.svg'
import react from '../../assets/react.svg'
import styledComponents from '../../assets/styledComponents.svg'
import git from '../../assets/git.svg'
import github from '../../assets/github.svg'
import linkedin from '../../assets/linkedin.svg'

import { Tooltip } from "@mui/material";

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
                <TextAboutMe>
                    <Title style={{ marginRight: '325px', marginBottom: '130px' }}>Sobre mim</Title>

                    <Paragraph>Meu nome é Herbert Carlos e eu sou um apaixonado</Paragraph>

                    por tecnologia que decidiu trilhar o caminho da
                    <br />
                    programação. Possuo experiência em Desenvolvimento
                    <br />
                    Web. Trabalhei com projetos envolvendo gestão
                    <br />
                    de seguros, APIs e banco de dados. Atualmente estou
                    <br />
                    focando nas tecnologias voltadas ao Frontend e Backend.
                    <br />

                    <Paragraph>Hoje já entendo tecnologias como ReactJS, NodeJS, Mysql e etc.</Paragraph>
                </TextAboutMe>
            </AboutMeContainer>

            <ContainerProjects id="projects">
                <Title>Projetos</Title>
                <ContainerCardProjects>
                    <CardProjects>
                        <ComingSoon>
                            <TextComingSoon>Em breve</TextComingSoon>
                        </ComingSoon>
                    </CardProjects>
                    <CardProjects>
                        <ComingSoon>
                            <TextComingSoon>Em breve</TextComingSoon>
                        </ComingSoon>
                    </CardProjects>
                    <CardProjects>
                        <ComingSoon>
                            <TextComingSoon>Em breve</TextComingSoon>
                        </ComingSoon>
                    </CardProjects>
                </ContainerCardProjects>

                <LinkToGithub href="https://github.com/HerbertCarlos007?tab=repositories" target='_blank'>Repositórios no github</LinkToGithub>

            </ContainerProjects>

            <ContainerSkills id="skills">
                <Title>Habilidades</Title>
                <ContainerWithMySkills>

                    <Tooltip title='HTML: É uma linguagem de marcação utlizada na construção de páginas web'>
                        <CardSkills>
                            <ImageSkill src={html} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='CSS: É um mecanismo para adicionar estilo a um documento web'>
                        <CardSkills>
                            <ImageSkill src={css} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='JAVASCRIPT: É uma linguagem de programação. Juntamente com HTML e CSS, é uma das três principais tecnologias da web'>
                        <CardSkills>
                            <ImageSkill src={js} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='REACTJS: O React é uma biblioteca Javascript de código aberto com foco em criar interfaces em páginas web'>
                        <CardSkills>
                            <ImageSkill src={react} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='STYLED COMPONENTS: É uma biblioteca que utiliza o conceito de CSS-IN-JS, 
                    ou seja, que nos permita escrever códigos CSS dentro do JS '>
                        <CardSkills>
                            <ImageSkill src={styledComponents} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='GIT: É um sistema de controle de versões distribuído, usado principalmente no desenvolvimento de so'>
                        <CardSkills>
                            <ImageSkill src={git} />
                        </CardSkills>
                    </Tooltip>


                </ContainerWithMySkills>

                <ContainerDescriptionSkill>
                    <TextDescriptionSkill>
                        <Paragraph>/* Passe o mouse por cima de</Paragraph>
                        alguma habilidade para ler a
                        <br />
                        descrição */
                    </TextDescriptionSkill>
                </ContainerDescriptionSkill>
            </ContainerSkills>
            <Footer>
                <ContainerContact>
                    <TextEmailFooter>E-mail para contato: herbert.saopaulino@hotmail.com</TextEmailFooter>
                </ContainerContact>

                <ContainerIcons>
                    <ContainerImageIcons>
                        <Link href="https://github.com/HerbertCarlos007?tab=repositories" target='_blank'>
                            <ImageIcons src={github}></ImageIcons>
                        </Link>
                    </ContainerImageIcons>

                    <ContainerImageIcons>
                        <Link href="https://www.linkedin.com/in/herbert-carlos-063a62184/" target='_blank'>
                            <ImageIcons src={linkedin}></ImageIcons>
                        </Link>
                    </ContainerImageIcons>
                </ContainerIcons>

            </Footer>
        </>

    )
}