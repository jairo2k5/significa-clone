import './styles/Sidebar.sass'
import GetQuote from './GetQuote'
import Menu from './Menu'
import FooterList from './FooterList'

function Sidebar({ active }) {
    return (
        <div className="sidebar">
            <div className="top">
                <svg width="24" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 27.887c-6.39 0-11.59-5.04-11.59-11.285C.41 9.563 6.005.614 12 .614c5.995 0 11.591 8.948 11.591 15.988 0 6.245-5.2 11.285-11.59 11.285Zm0-2.573c5.006 0 9.044-3.913 9.044-8.712 0-5.797-4.765-13.415-9.044-13.415-4.279 0-9.043 7.618-9.043 13.415 0 4.8 4.037 8.712 9.043 8.712Z" fill="#fff"></path></svg>
                <div className="right">
                    <GetQuote to={'/get-a-quote'}>Get a quote</GetQuote>
                    <Menu onClick={active}>
                    <svg width="16" height="16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="m4.5 4.5 7 7M4.5 11.5l7-7" stroke="currentColor" stroke-width="1.2"></path><path d="M4.4 4.3c0 .4.2.8.4 1.1l.8 1c.4.4.7.8 1.2 1.1l1.5.8c.6.2 1 .6 1.5 1l1 .6.7 1" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path><path d="M11.3 5c0 .2-.3.4-.5.6l-.5.9c-.2.4-.4.5-.7.8l-1 .8c-.6.3-1.1.6-1.5 1-.6.7-1.4 1.2-2.1 1.6-.4.1-.7.4-.7.8" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"></path></svg>
                    </Menu>
                </div>
            </div>
            <div className="body">
                <FooterList>
                    <small>SIGNIFICA</small>
                    <li>Home</li>
                    <li>Projects</li>
                    <li>Services</li>
                    <li>About</li>
                    <li>Blog</li>
                    <li>Careers</li>
                    <li>Contact us</li>
                </FooterList>
                <FooterList>
                    <small>HANDBOOK</small>
                    <li>Handbook</li>
                    <li>Playbook</li>
                    <li>Mission and Values</li>
                    <li>Design</li>
                    <li>Development</li>
                </FooterList>
                <FooterList>
                    <small>FOLLOW US</small>
                    <li>Instagram</li>
                    <li>Dribbble</li>
                    <li>LinkedIn</li>
                    <li>Behance</li>
                    <li>Twitter</li>
                    <li>Github</li>
                    <li>YouTube</li>
                </FooterList>
            </div>
        </div>
    )
}

export default Sidebar