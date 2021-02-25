import styled from 'styled-components'
import { COLORS } from '../../scss/_variables'

export const Container = styled.div`
    height: 4rem;
    width: 100vw;
    background: ${COLORS.purple};

    transition: height .5s ease-in-out;

    ${props => props.fullWidth ? 'height: 50vh' : ''}
`

export const InnerContainer = styled.div`
    height: 4rem;
    width: 100vw;
    background: ${COLORS.ligth_purple};
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

    padding: 1rem 2rem;
    transform: translateY(1px); //GAMBIARRA POR CAUSA DO CHROME

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    transition: height .5s ease-in-out;

    ${props => props.fullWidth ? 'height: 50vh' : ''}
`

export const ButtonAdd = styled.a`
    outline: none;
    background: transparent;
    color: grey;
    cursor: pointer;
`

export const FormContainer = styled.div`
    width: 90vw;
    height: 100%;
    padding: 3rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;

    transition: display 1.2s ease-in-out;

    ${props => props.hide ? 'display: none' : ''}
`

export const InputFile = styled.input`
    display: none;
`

export const InputLabel = styled.label`
    width: 100%;
    height: 6rem;
    border: 1px dashed grey;
    border-radius: .75rem;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 6px 12px;
    position: relative;

    color: grey;
    background-position: center;
    background-size: cover;

    margin-bottom: 1rem;

    ${props => props.image ? `background-image: url(${props.image}); font-size: 0;` : 'cursor: pointer;'}
`

export const Svg = styled.img`
    position: absolute;
    top: .3rem;
    right: .3rem;

    cursor: pointer;

    ${props => props.image ? '' : 'display: none;'}
`

export const InputNameLabel = styled.label`
    width: 100%;
    height: 3rem;

    display: flex;
    align-items: center;

    padding: 0 1rem;

    border: 1px solid grey;
    border-radius: .75rem;

    position: relative;
`

export const InputName = styled.input`
    width: 100%;
    height: 100%;
    margin-top: 2rem;
    outline: none;
    border: none;
    background: transparent;

    display: flex;
    align-items: center;
    position: absolute;

    top: 0;
    right: 0.5rem;
    left: 0.5rem;

`

export const ButtonSubmit = styled.button`
    margin-top: auto;
    background: ${COLORS.purple};
    padding: 1rem 2rem;
    border-radius: .75rem;
    border: none;
    color: white;
    font-size: 1rem;
`