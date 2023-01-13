import styled, { keyframes } from "styled-components";

export const Container = styled.div`
     background: linear-gradient(63.13deg, #352728 51.04%, #8E5D52 51.05%);
    height: 600px;
    display: flex;
    
    
`

export const Text = styled.span`
    color: white;
    margin: 0;
    font-size: 30px;
`

export const TextHello = styled.span`
    color: white;
    margin: 0;
    font-size: 30px;
    position: relative;
    
`

export const TextName = styled.h1`
    color: white;
    margin: 0;
    font-size: 50px;
    
`

export const Description = styled.div`
    margin-left: 22%;
    margin-top: 12%;
    
    `
    const animationAvatar = keyframes`
        0% {
            top: 120px;
        }
    
        100%{
            top: 150px;
        }
    `
export const ContainerAvatar = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    animation: ${animationAvatar} 2.1s infinite alternate-reverse;
`
export const Avatar = styled.img`
    position: relative;
    left: 20px;
    width: 400px;
    height: 400px;

`

export const ButtonLinkedin = styled.button`
    width: 390px;
    height: 85px;
    background-color: #8E5D52;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 62px;
    margin-top: 5px;
    
`

export const Link = styled.a`
     color: white;
    font-size: 28px;
    text-decoration: none;
    
`

export const AboutMeContainer = styled.div`
    height: 100vh;
    background-color: #493737;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const Paragraph = styled.p`
    text-indent: 25px;
`

export const AvatarAboutMe = styled.img`
    position: relative;
    right: 50px;
    width: 350px;
    height: 350px;
`

export const TextAboutMe = styled.span`
    font-size: 25px;
    color: white;
    
`

export const ContainerProjects = styled.div`
    background-color: #352728;
    height: 500px;
`

export const Title = styled.h2`
    display: flex;
        
    justify-content: center;
    text-align: center;
    position: relative;
    top: 100px;
    font-family: 'Press Start 2P', cursive;
    font-size: 45px;
    color: white;
`

export const ContainerCardProjects = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 150px;
`

export const CardProjects = styled.div`
    background-color: #C4C4C4;
    height: 195px;
    width: 310px;
    border-radius: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    overflow: hidden;
    margin-left: 30px;  
`
export const ComingSoon = styled.div`
    background-color: #705656;
    width: 1000px;
    text-align: center;
    padding: 5% 0;
    transform: rotate(-50deg);
`

export const TextComingSoon = styled.span`
    font-family: 'Fira Sans', sans-serif;
    font-size: 20px;
    color: #C4C4C4;
`


export const LinkToGithub = styled.a`
    display: flex;
    justify-content: center;
    font-size: 20px;
    margin-top: 60px;
    text-decoration: none;
    color: white;

    :hover {
        color: green;
    }
`

export const ContainerSkills = styled.div`
     height: 550px;
    background-color: #493737;
`

export const ContainerWithMySkills = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 180px;
  margin-right: 350px;
  flex-wrap: wrap;
  display: grid;
  grid-template-columns: repeat(3, 0.1fr);
  grid-gap: 25px;

  
    
`

export const CardSkills = styled.div`
    height: 106px;
    display: flex;
    width: 106px;
    background-color: #C4C4C4;
    border-radius: 20px;
    margin-left: 20px;
    justify-content: center;
    align-items: center;
    cursor: pointer;
`

export const ImageSkill = styled.img`

`

export const ContainerDescriptionSkill = styled.div`
    display: flex;
    justify-content: right;
    margin-right: 350px;
    position: relative;
    bottom: 230px;
    
`

export const TextDescriptionSkill = styled.span`
    color: white;
    font-family: 'Quando', serif;
    font-size: 20px;
    max-width: 40%;
`

export const Footer = styled.footer`
    background-color: #241a1b;
    display: flex;
    justify-content: space-evenly;
    
`

export const ContainerContact = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const ContainerIcons = styled.div`
    display: flex;
`

export const ImageIcons = styled.img`
    width: 80px;
    padding: 10px;
`

export const ContainerImageIcons = styled.div`

`

export const TextEmailFooter = styled.span`
    color: white;
`

