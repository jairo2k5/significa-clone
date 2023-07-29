import { Link } from 'react-router-dom'
import styled from 'styled-components'

const GetQuote = styled(Link)`
    text-decoration: none;
    background: #f1f1f1;
    color: #222;
    padding: 10px 20px 10px 20px;
    border: none;
    cursor: pointer;
    border-radius: 15px;
    transition-duration: 150ms;
    font-weight: 600;
    font-size: 1em;
    &:hover {
        box-shadow: 0px 0px 2px 2px #ffb44396;
    }
`

export default GetQuote