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

                    <Paragraph>Meu nome ?? Herbert Carlos e eu sou um apaixonado</Paragraph>

                    por tecnologia que decidiu trilhar o caminho da
                    <br />
                    programa????o. Possuo experi??ncia em Desenvolvimento
                    <br />
                    Web. Trabalhei com projetos envolvendo gest??o
                    <br />
                    de seguros, APIs e banco de dados. Atualmente estou
                    <br />
                    focando nas tecnologias voltadas ao Frontend e Backend.
                    <br />

                    <Paragraph>Hoje j?? entendo tecnologias como ReactJS, NodeJS, Mysql e etc.</Paragraph>
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

                <LinkToGithub href="https://github.com/HerbertCarlos007?tab=repositories" target='_blank'>Reposit??rios no github</LinkToGithub>

            </ContainerProjects>

            <ContainerSkills id="skills">
                <Title>Habilidades</Title>
                <ContainerWithMySkills>

                    <Tooltip title='HTML: ?? uma linguagem de marca????o utlizada na constru????o de p??ginas web'>
                        <CardSkills>
                            <ImageSkill src={html} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='CSS: ?? um mecanismo para adicionar estilo a um documento web'>
                        <CardSkills>
                            <ImageSkill src={css} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='JAVASCRIPT: ?? uma linguagem de programa????o. Juntamente com HTML e CSS, ?? uma das tr??s principais tecnologias da web'>
                        <CardSkills>
                            <ImageSkill src={js} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='REACTJS: O React ?? uma biblioteca Javascript de c??digo aberto com foco em criar interfaces em p??ginas web'>
                        <CardSkills>
                            <ImageSkill src={react} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='STYLED COMPONENTS: ?? uma biblioteca que utiliza o conceito de CSS-IN-JS, 
                    ou seja, que nos permita escrever c??digos CSS dentro do JS '>
                        <CardSkills>
                            <ImageSkill src={styledComponents} />
                        </CardSkills>
                    </Tooltip>

                    <Tooltip title='GIT: ?? um sistema de controle de vers??es distribu??do, usado principalmente no desenvolvimento de so'>
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
                        descri????o */
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