import styled from "styled-components";


export const CardElement = styled.article`
    padding: 1rem;
    background-color: ${props => props.theme.colors.bg_color_card};
    min-width: 10rem;
    border: 1px solid ${props => props.theme.colors.border_color};
    border-radius: 0.375rem;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 23.875rem;
    div.icon-name{
        display: flex;
        align-items: center;
         
        a{
            margin-left: 0.5rem;
            display: block;
            text-decoration: none;
            color: ${props => props.theme.colors.link};
            transition: all 0.3s ease;

            &:hover{
                text-decoration: underline;
            }

        }
    }   

    p{
        color: ${props => props.theme.colors.white};
        font-size: 0.8rem;
        margin-left: 0.3rem;
        margin-top: 0.8rem;
        line-height: 1.2rem;

        &.language{
            margin-top: 1.5rem;

            span{
                width: 0.5rem;
                height: 0.5rem;
                background-color:  ${props => props.theme.colors.white};
                margin-right: 0.5rem;
                border-radius: 99rem;
                display: inline-block;
            }
        }
    }
`