import FooterList from './FooterList'
import GrayParagraph from './GrayParapragh'
import './styles/Footer.sass'

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="presentation">
                    <svg width="24" height="29" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 27.887c-6.39 0-11.59-5.04-11.59-11.285C.41 9.563 6.005.614 12 .614c5.995 0 11.591 8.948 11.591 15.988 0 6.245-5.2 11.285-11.59 11.285Zm0-2.573c5.006 0 9.044-3.913 9.044-8.712 0-5.797-4.765-13.415-9.044-13.415-4.279 0-9.043 7.618-9.043 13.415 0 4.8 4.037 8.712 9.043 8.712Z" fill="#fff"></path></svg>
                    <p className="phrase">
                        Think. Design. Develop. Launch. <GrayParagraph>Repeat.</GrayParagraph>
                    </p>
                </div>
                <div className="footer-links">
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

            <div className="end-footer">
                <p>Significa — Design-led digital products</p>
                <p>Legal</p>
            </div>
        </>
    )
}

export default Footer
