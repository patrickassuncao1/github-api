import styled from "styled-components";

export const ContainerSpinner = styled.div`

    display: inline-block;
    position: relative;
    width: 5rem;
    height: 5rem;

    span{
        position: absolute;
        top: 2.063rem;
        width: 0.813rem;
        height: 0.813rem;
        border-radius: 50%;
        background: ${props => props.theme.colors.white};
        animation-timing-function: cubic-bezier(0, 1, 1, 0);

        &:nth-child(1){
            left: 0.5rem;
            animation: lds-ellipsis1 0.6s infinite;
        }

        &:nth-child(2) {
            left: 0.5rem;
            animation: lds-ellipsis2 0.6s infinite;
        }

        &:nth-child(3) {
            left: 2.188rem;
            animation: lds-ellipsis2 0.6s infinite;
        }
        &:nth-child(4) {
            left: 3.5rem;
            animation: lds-ellipsis3 0.6s infinite;
        }
    }
    

    @keyframes lds-ellipsis1 {
        0% {
            transform: scale(0);
        }
        100% {
            transform: scale(1);
        }
    }
    @keyframes lds-ellipsis3 {
        0% {
            transform: scale(1);
        }
        100% {
            transform: scale(0);
        }
    }
    @keyframes lds-ellipsis2 {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(1.5rem, 0);
        }
    }

`