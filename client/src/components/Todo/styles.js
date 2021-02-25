import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
    height: 3rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 2rem 1rem;
    margin-bottom: .75rem;


    &:focus, :hover {
        background-color: red;
        border-radius: 1.25rem;
    }
`

export const Img = styled.img`
    width: 2.5rem;
    height: 2.5rem;
    border-radius: .5rem;
    border: none;
    outline: none;
    background: green;
`

export const TextContainer = styled.div`
    margin-left: 1rem;
    color: black;
`

export const Status = styled.div`
    margin-left: auto;
    width: 1rem;
    height: 1rem;
    border-radius: .5rem;
    background: green;
`