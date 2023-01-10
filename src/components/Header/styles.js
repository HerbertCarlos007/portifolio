import styled from "styled-components";

export const Container = styled.div`
    height: 95px;
    display: flex;
    justify-content: space-around;
    background: rgba( 220, 230, 240, 0.1 );
    box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
    
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    font-size: 40px;
    color: white;
`


export const List = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 25px;
    gap: 50px;
    list-style: none;
    cursor: pointer;
`

export const ListItem = styled.li`
font-size: 18px;
color: white;
`

