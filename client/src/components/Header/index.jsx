import React from 'react'
import { Container, Title, SubTitle, ContentInfo } from './styles'


export const Header = () => {

    return (
        <Container>
            <Title>Desafio BrickUP</Title>
            <SubTitle>Todo List</SubTitle>

            <ContentInfo>Tarefas de hoje {new Date().toLocaleDateString()}</ContentInfo>
        </Container>
    )
}