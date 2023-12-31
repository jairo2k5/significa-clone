/* Resources by Libraries */
import styled from 'styled-components'
import { Link } from 'react-router-dom'

/* Stylesheet */
import './styles/Footer.sass'
import FooterList from './FooterList'
import EndFooter from './EndFooter'

const GrayParagraph = styled.p`
    color: #999;
    margin: 0;
`

function Footer() {
    return (
        <div className="footer">
            <div className="top">
                <div className="presentation">
                    <svg width="24" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 27.887c-6.39 0-11.59-5.04-11.59-11.285C.41 9.563 6.005.614 12 .614c5.995 0 11.591 8.948 11.591 15.988 0 6.245-5.2 11.285-11.59 11.285Zm0-2.573c5.006 0 9.044-3.913 9.044-8.712 0-5.797-4.765-13.415-9.044-13.415-4.279 0-9.043 7.618-9.043 13.415 0 4.8 4.037 8.712 9.043 8.712Z" fill="#fff"></path></svg>
                    <p className="phrase">
                        Think. Design. <br /> Develop. Launch. <br /> <GrayParagraph>Repeat.</GrayParagraph>
                    </p>
                </div>
                <div className="footer-links">
                    <FooterList>
                        <small>SIGNIFICA</small>
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/projects'}>Projects</Link></li>
                        <li><Link to={'/services'}>Services</Link></li>
                        <li><Link to={'/about'}>About</Link></li>
                        <li><Link>Blog</Link></li>
                        <li><Link>Careers</Link></li>
                        <li><Link>Contact us</Link></li>
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
            <EndFooter />
        </div>
    )
}

export default Footer
