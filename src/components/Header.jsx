/* Resources by Libraries */
import { Link } from 'react-router-dom'
import { useState } from 'react'
import styled from 'styled-components'

/* Stylesheet */
import './styles/Header.sass'

/* Code */

const Sidebar = styled.div`
    display: ${props => props.active ? 'flex' : 'none'};
    flex-direction: column;
    padding: 20px;
    position: absolute;
    top: 0;
    right: 0;
    height: 100%;
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

function Header() {
    const [isActive, setIsActive] = useState(false)

    return (
        <div className="header">
            <div className="significa-home">
                <Link to={'/'}>
                    <img src="/significa.svg" alt="Significa" />
                </Link>
            </div>
            <div className="links">
                <Link to={'/projects'} is_route='true'>Projects</Link>
                <Link to={'/services'} is_route='true'>Services</Link>
                <Link to={'/about'} is_route='true'>About</Link>
                <Link to={'/get-a-quote'}>
                    <button>Get a quote</button>
                </Link>
                <Menu onClick={() => { setIsActive(!isActive) }}>
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3 7h2v2H3zM7 7h2v2H7zM11 7h2v2h-2z"></path><path d="M8.6 8.8c-.5 0-1.2.1-1.4-.4 0-.2-.2-.7.1-.7.2 0 .2-.3.5-.3.1 0 .5 0 .6.2M11.7 8.6l-.3-.3V8c0-.3.1-.3.4-.4.2-.1.5-.2.7 0l.2.4v.5M4.3 8.6c.2 0 .3-.2.4-.3V8c0-.3-.2-.3-.4-.4-.2-.1-.6-.2-.8 0l-.1.4v.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round"></path></svg>
                </Menu>
                <Sidebar active={isActive}>
                    <div className="top-sidebar">
                        <svg width="24" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 27.887c-6.39 0-11.59-5.04-11.59-11.285C.41 9.563 6.005.614 12 .614c5.995 0 11.591 8.948 11.591 15.988 0 6.245-5.2 11.285-11.59 11.285Zm0-2.573c5.006 0 9.044-3.913 9.044-8.712 0-5.797-4.765-13.415-9.044-13.415-4.279 0-9.043 7.618-9.043 13.415 0 4.8 4.037 8.712 9.043 8.712Z" fill="#fff"></path></svg>
                        <Menu onClick={() => { setIsActive(!isActive) }}>
                            <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3 7h2v2H3zM7 7h2v2H7zM11 7h2v2h-2z"></path><path d="M8.6 8.8c-.5 0-1.2.1-1.4-.4 0-.2-.2-.7.1-.7.2 0 .2-.3.5-.3.1 0 .5 0 .6.2M11.7 8.6l-.3-.3V8c0-.3.1-.3.4-.4.2-.1.5-.2.7 0l.2.4v.5M4.3 8.6c.2 0 .3-.2.4-.3V8c0-.3-.2-.3-.4-.4-.2-.1-.6-.2-.8 0l-.1.4v.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round"></path></svg>
                        </Menu>
                    </div>
                </Sidebar>
            </div>
        </div>
    )
}

export default Header
