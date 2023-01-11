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
    ImageSkill
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
import node from '../../assets/node.png'


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

                    <CardSkills>
                        <ImageSkill src={html}/>
                    </CardSkills>

                    <CardSkills>
                    <ImageSkill src={css}/>
                    </CardSkills>

                    <CardSkills>
                    <ImageSkill src={js}/>
                    </CardSkills>

                    <CardSkills>
                    <ImageSkill src={react}/>
                    </CardSkills>
                
                    <CardSkills>
                    <ImageSkill src={styledComponents}/>
                    </CardSkills>

                    <CardSkills>
                    <ImageSkill src={git}/>
                    </CardSkills>

                    
                </ContainerWithMySkills>
            </ContainerSkills>
        </>

    )
}