import  styled from 'styled-components'
import { COLORS } from '../../scss/_variables'

export const Container = styled.div`
    width: 100vw;
    background: ${COLORS.purple};

    color: white;

    padding: 1rem 2rem 2rem 2rem;
`

export const Title = styled.h3`
    font-size: 2rem;
    font-weight: 200;
`

export const SubTitle = styled.h2`
    font-size: 1.5rem;
    font-weight: 600;
`

export const ContentInfo = styled.p`
    font-size: 1rem;
    margin-top: 1rem;
`