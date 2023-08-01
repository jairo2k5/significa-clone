import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Routes = styled(Link)`
    text-decoration: none;
    color: #fff;
    margin: 0px 10px 0px 10px;
    font-size: 1em;
    border-bottom: 2px solid rgba(0, 0, 0, 0);
    transition: 250ms;
    &:hover {
        border-bottom: 2px solid #555;
    }
`

export default Routes