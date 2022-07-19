import styled from "styled-components";
import { MaxWidthContainer, maxWidthMobile } from "../../themes/style";


export const Container = styled.section`
    margin-top: 1rem;
    padding: 2rem;
    width: 100%;
    max-width: ${MaxWidthContainer};
    display: flex;
    align-items: center;
    justify-content: space-around;
    
    @media screen and (max-width: ${maxWidthMobile}) {
        flex-direction: column;
    }
    span.img{
        width: 20rem;
        height: 20rem;
        border-radius: 20rem;
        background-color: transparent;
        border: 2px solid ${props => props.theme.colors.secondary};
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.5s ease;

        
        @media screen and (max-width: 350px) {
            width: 16rem;
            height: 16rem;
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius:100rem;
        }
    }
`

export const ProfileDescriptionContainer = styled.div`

    @media screen and (max-width: ${maxWidthMobile}) {
        margin-top: 3rem;
    }

   div.content {
        a{
            color: white;
            font-size: 1rem;
            text-decoration: none;
            margin-top: 1rem;
            display: block;
            @media screen and (max-width: ${maxWidthMobile}) {
                text-align: center;
            } 

            &:hover{
                color: ${props => props.theme.colors.link};
            }
        }
        p{
            color: white;
            font-size: 1rem;
            
            @media screen and (max-width: ${maxWidthMobile}) {
                text-align: center;
            }

            &:not(:first-child){
                margin-top: 1rem;
            }
        }

        span{
            font-weight: bold;
            margin-right: 0.5rem;
        }

   } 

`

export const FlexElements = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin-top: 1rem;
    article{
        flex: 1;
        text-align: center;
        min-width: 5rem;
        span{
            color: ${props => props.theme.colors.white};
            font-size: 0.75rem;
            text-align: center;
        }

        p{
            color: ${props => props.theme.colors.white};
            margin-top: 0.5rem;
            text-align: center;
        }
    }
    
    
`