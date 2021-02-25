import { createGlobalStyle } from 'styled-components'
import { COLORS } from './_variables'

export const GlobalStyles = createGlobalStyle`

    *, #root {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Poppins', sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        overflow: hidden;
    }

    body, #root {
        width: 100vw;
        height: 100vh;

        background: ${COLORS.purple};
    }
`