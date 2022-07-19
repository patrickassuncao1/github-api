import styled from "styled-components";
import { CursorPointer, maxWidthMobile } from "../../themes/style";

export const Container = styled.div`
    max-width: 49.5rem;
    width: 100%;
    height: 4.25rem;
    border-radius: 2.2rem;
    background-color: ${props => props.theme.colors.primary};
    
    @media screen and (max-width: ${maxWidthMobile}) {
        height: 3rem;
    }
    form{
        width: 100%;
        height: 100%;

        div.content {
            width: 100%;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: center;
        }

    }
    

`
export const InputSearch  = styled.input`
    padding: 0.625rem;
    height: 100%;
    font-size: 1rem;
    width: 100%;
    border: 0;
    background-color: ${props => props.theme.colors.primary};
    outline: none;
    color: ${props => props.theme.colors.white};

    :-webkit-autofill {
        box-shadow: 0 0 0 2.5rem ${props => props.theme.colors.primary} inset;
        -webkit-text-fill-color: white;
    }

    @media screen and (max-width: ${maxWidthMobile}) {
        font-size: 0.75rem;
        padding-left: 0.3rem;
    }
`

export const Div = styled.div`
    height: 100%;
`

export const Button = styled.button`
    height: 100%;
    font-size: 1rem;
    font-weight: bold;
    border: 0;
    border-radius: 0 2.2rem 2.2rem 0;
    min-width:13.5rem;
    color: ${props => props.theme.colors.white};
    background-color: ${props => props.theme.colors.tertiary};
    transition: all 0.3s ease;

    &:hover{
        background-color: ${props => props.theme.colors.hover};
    }
    @media screen and (max-width: ${maxWidthMobile}) {
        min-width: 6rem;
        font-size: 0.75rem;
    }

    ${CursorPointer}
`

export const IconSearch = styled.div`
    min-width: 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    @media screen and (max-width: ${maxWidthMobile}) {
        min-width: 3rem;
    }

    svg{
        font-size: 2.25rem;

        @media screen and (max-width: ${maxWidthMobile}) {
            height: 1.5rem;
        }

    }
`