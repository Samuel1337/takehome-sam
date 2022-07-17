import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import "./footer.scss";

function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-main">
                <div className="dev-info">
                    <div className="dev-info-name">Sam Martins</div>
                    <a href="https://github.com/Samuel1337" className="dev-links"><FaGithubSquare/></a>
                    <a href="https://www.linkedin.com/in/samuel-m-b3b9baa2/" className="dev-links"><FaLinkedin/></a>
                </div>
            </div>
            <div className="footer-bottom">
                This web application was designed by Sam Martins, July 2022
            </div>
        </div>
    )
}

export default Footer;