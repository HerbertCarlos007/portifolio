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
    height: 500px;
    background-color: #493737;
`
