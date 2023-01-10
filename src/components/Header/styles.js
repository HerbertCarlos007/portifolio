import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 95px;
    display: flex;
    justify-content: space-around;
    background: rgba( 255, 255, 255, 0.35 );
    box-shadow: 0 2px 10px 0 rgba( 31, 38, 135, 0.37 );
    backdrop-filter: blur( 13.5px );
    -webkit-backdrop-filter: blur( 13.5px );
    border: 1px solid rgba( 255, 255, 255, 0.18 );
`

export const Logo = styled.div`
    display: flex;
    justify-content: center;
`


export const List = styled.ul`
    max-width: 400px;
    display: flex;
    margin-right: 50px;
    gap: 30px;
    list-style: none;
`

export const ListItem = styled.li`
`

