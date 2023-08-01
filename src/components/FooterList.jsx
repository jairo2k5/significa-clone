import styled from 'styled-components'

const FooterList = styled.ul`
    margin: 0;
    padding: 0;
    list-style-type: none;
    color: #fff;
    margin-right: 40px;
    small {
        color: rgb(160, 160, 162);
        font-weight: bold;
    }
    li {
        margin: 15px 0px 15px 0px;
        width: 100%;
        font-size: 1em;
        a {
            text-decoration: none;
            color: #fff;
            font-size: 1em;
            border-bottom: 2px solid rgba(0, 0, 0, 0);
            transition: 250ms;

            &:hover {
                border-color: #555;
            }
        }
    }
`

export default FooterList