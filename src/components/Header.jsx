import { Link } from 'react-router-dom'
import Menu from './Menu'
import './styles/Header.sass'

function Header() {
    return (
        <div className="header">
            <Link to={'/'}>
                <img src="/significa.svg" alt="Significa" />
            </Link>
            <div className="links">
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/services'}>Services</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/get-a-quote'}>
                    <button>Get a quote</button>
                </Link>
                <Menu />
            </div>
        </div>
    )
}

export default Header
