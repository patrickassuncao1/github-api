import styled from "styled-components";
import { CursorPointer, MaxWidthContainer } from "../../themes/style";

export const Header = styled.header`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1.5rem 1rem 1.5rem 1rem;
    background-color: ${props => props.theme.colors.secondary};
`

export const Main = styled.main`
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

`

export const UserNotFound = styled.p`
    margin-top: 3rem;
    color: ${props => props.theme.colors.white};
    font-size: 1rem;

`
export const ContainerCards = styled.div`
    width: 100%;
    height: 100%;
    max-width: ${MaxWidthContainer};
    padding: 1rem;
    margin-bottom: 2rem;

`
export const ContainerGrid = styled.div`
    display:grid;
    grid-gap: 1.5rem;
    grid-template-columns: repeat(auto-fit, minmax(17rem, 1fr));
    justify-items: center;
    align-items: center;
    width: 100%;
    height: 100%;

    @media screen and (max-width: 340px) {
        grid-template-columns: repeat(auto-fit, minmax(15rem, 1fr));
    }
`

export const ContainerButtons = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem 0;

    button{
        padding: 0.8rem;
        border-radius: 1rem;
        background-color: ${props => props.theme.colors.tertiary};
        color: ${props => props.theme.colors.white};
        border: 1px solid rgba(240,246,252,0.1);
        transition: all 0.5s ease;
        
        &:hover{
            box-shadow: inset -1px 3px 8px 5px ${props => props.theme.colors.link}, 
            2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0,0,0,0);
            letter-spacing: 0.05rem;
        }

        &.active{
            box-shadow: inset -1px 3px 8px 5px ${props => props.theme.colors.link}, 
            2px 5px 16px 0px #0B325E, 5px 5px 15px 5px rgba(0,0,0,0);
        }

        ${CursorPointer}

        &:first-child{
            margin-right: 1rem;
        }
    }
`