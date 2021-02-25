import styled from 'styled-components'
import { COLORS } from '../../scss/_variables'

export const Container = styled.div`
    height: 100%;
    width: 100vw;
    background: ${COLORS.ligth_purple};
`

export const InnerContainer = styled.div`
    height: 100%;
    width: 100vw;
    background: white;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

    padding: 2rem 2rem 0 2rem;
    box-shadow: 0.1em 0.1em 0.2em rgba(0,0,0,0.15);

    transition: transform 1s ease-in-out;
`