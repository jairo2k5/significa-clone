import styled from 'styled-components'

const Sidebar = styled.div`
    display: flex;
    flex-direction: column;
    padding: 20px;
    position: absolute;
    top: 0;
    right: ${props => props.active ? '0' : '-400px'};
    height: 100vh;
    color: #fff;
    background: #171717;
    width: 100%;
    max-width: 400px;
    .top-sidebar {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default Sidebar