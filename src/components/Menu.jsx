import styled from 'styled-components'

const Menu = styled.button`
    color: #fff;
    padding: 15px 20px;
    border: 1px solid #333;
    cursor: pointer;
    border-radius: 15px;
    transition-duration: 150ms;
    margin: 0px 5px 0px 5px;
    display: grid;
    align-self: center;
    background: #151515;
    &:hover {
        border: #ffb44386 solid 1px;
        box-shadow: 0px 0px 2px 2px #ffb4435e;
    }
`

export default Menu