import styled from "styled-components";

export const Image = styled.img`
    height: 90%;
    width: 100%;
    max-width: 720px;
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 20px;
    animation: animateThumb 0.5s;
    cursor: pointer;

    :hover{
        opacity: 0.8;
    }

    @keyframes animateThumb {
        from{
            opacity: 0;
        }to{
            opacity: 1;
        }
    }
`;

export const Title = styled.span`
    font-weight: 600;
    font-size: var(--fontMed);
`;