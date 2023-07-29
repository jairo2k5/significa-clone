/* Resources by Libraries */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

/* Stylesheet */
import './styles/Header.sass'

/* Components */
import Routes from './Routes'
import Sidebar from './Sidebar'
import GetQuote from './GetQuote'
import Menu from './Menu'

/* Code */

function Header() {
    const [isActive, setIsActive] = useState(false)

    const reverseActiveState = () => setIsActive(!isActive)

    return (
        <div className="header">
            <div className="significa-home">
                <Link to={'/'}>
                    <img src="/significa.svg" alt="Significa" />
                </Link>
            </div>
            <div className="links">
                <div className="header-routes">
                    <Routes to={'/projects'}>Projects</Routes>
                    <Routes to={'/services'}>Services</Routes>
                    <Routes to={'/about'}>About</Routes>
                </div>
                <GetQuote to={'/get-a-quote'} className='links-gq'>Get a quote</GetQuote>
                <Menu onClick={reverseActiveState}>
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M3 7h2v2H3zM7 7h2v2H7zM11 7h2v2h-2z"></path><path d="M8.6 8.8c-.5 0-1.2.1-1.4-.4 0-.2-.2-.7.1-.7.2 0 .2-.3.5-.3.1 0 .5 0 .6.2M11.7 8.6l-.3-.3V8c0-.3.1-.3.4-.4.2-.1.5-.2.7 0l.2.4v.5M4.3 8.6c.2 0 .3-.2.4-.3V8c0-.3-.2-.3-.4-.4-.2-.1-.6-.2-.8 0l-.1.4v.5" stroke="#fff" stroke-width="1.2" stroke-linecap="round"></path></svg>
                </Menu>
            </div>
            {isActive && <Sidebar active={reverseActiveState} />}
        </div>
    )
}

export default Header
