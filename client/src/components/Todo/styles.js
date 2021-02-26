import styled from 'styled-components'
import { COLORS } from '../../scss/_variables'

export const Container = styled.div`
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 1rem;
    margin-bottom: .75rem;

    border-radius: 1.25rem;
    background: ${COLORS.ligth_purple};
    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);


    &:focus, :hover {
        background-color: ${COLORS.medium_ligth_purple};
    }

    @media (min-width: 70em) {
        width: 70%;
        height: 6rem;
        margin: 0 auto;

        margin-bottom: 1rem;
    }
`

export const Img = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .5rem;
    border: none;
    outline: none;

    @media (min-width: 70em) {
        width: 4rem;
        height: 4rem;
    }
`

export const TextContainer = styled.div`
    margin-left: 1rem;
    color: black;
    font-size: .8rem;
`

export const Status = styled.div`
    margin-left: auto;
    width: 1rem;
    height: 1rem;
    border-radius: .5rem;
    cursor: pointer;

    ${ props => props.status ? 'background: green;' : 'background: yellow;'}
`