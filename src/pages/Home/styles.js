import styled, { keyframes } from "styled-components";

export const Container = styled.div`
     background: linear-gradient(63.13deg, #352728 51.04%, #8E5D52 51.05%);
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    z-index: 999;
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
            top: -290px;
        }
    
        100%{
            top: -320px;
        }
    `
export const ContainerAvatar = styled.div`
    display: flex;
    justify-content: center;
    position: relative;
    left: 260px;
    bottom: 200px;
    animation: ${animationAvatar} 2.1s infinite alternate-reverse;
`
export const Avatar = styled.img`
 width: 300px;

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
    height: 580px;
    background-color: #493737;
    display: flex;
    justify-content: center;
    align-items: center;
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
    height: 580px;
`

export const Title = styled.h2`
    display: flex;
    justify-content: center;
    text-align: center;
    position: relative;
    top: 70px;
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
