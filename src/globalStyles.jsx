import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
*,*::before,*::after,h1,h2,h3,h4,h5,h6{
    margin:0;
    padding:0;
    
}
body{
    box-sizing: border-box;
    margin:0;
    padding:0;
    // font-family: 'Karla', sans-serif;
    font-family: 'Source Sans Pro', sans-serif;
}
`

export default GlobalStyles
