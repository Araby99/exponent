import { Link } from 'react-router-dom';
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="company-details">
                    <img src="https://brandexponents.com/exponent-lite/corporate/wp-content/uploads/sites/2/2018/12/exp-logo-light.svg" alt="Logo" />
                    <ul>
                        <li><i className="fas fa-map-marker-alt"></i>935 Allen Way, Yuba City CA, USA</li>
                        <li><i className="fas fa-phone"></i>6547 547 897</li>
                        <li><i className="fab fa-telegram-plane"></i><a href="mailto:support@exponentthemes.com" className="telegram">support@exponentthemes.com</a></li>
                    </ul>
                </div>
                <div className="footer-list">
                    <p className="list-head">our products</p>
                    <ul>
                        <li>Expodesk</li>
                        <li>Expochat</li>
                        <li>Exposales</li>
                        <li>Exposervice</li>
                        <li>Expocaller</li>
                        <li>Expoteam</li>
                    </ul>
                </div>
                <div className="footer-list">
                    <p className="list-head">resources</p>
                    <ul>
                        <li>About</li>
                        <li>Privacy</li>
                        <li>Blog – Software Firm</li>
                        <li>Leadership – Software Firm</li>
                        <li>FAQ</li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <button className="contact-us">contact us</button>
                    <button className="subscribe">subscribe</button>
                    <div className="social-icon">
                        <div><i className="fab fa-facebook-f"></i></div>
                        <div><i className="fab fa-twitter"></i></div>
                        <div><i className="fab fa-linkedin"></i></div>
                        <div><i className="fab fa-pinterest"></i></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
export default Footer