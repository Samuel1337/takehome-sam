import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import "./footer.scss";

function Footer() {

    return (
        <div className="footer-container">
            <div className="footer-main">
                <a href="https://hellomoon.io" target="_blank" rel="noopener noreferrer">
                    <div className="footer-logo">
                        {/* <img src="./helloMoonLogo.png" /> */}
                        <h1>Takehome Exercise</h1>
                    </div> 
                </ a>
                <div className="dev-info">
                    <a href="https://github.com/Samuel1337" className="dev-links"><FaGithubSquare/></a>
                    <a href="https://www.linkedin.com/in/samuel-m-b3b9baa2/" className="dev-links"><FaLinkedin/></a>
                    <div className="dev-info-name">Sam Martins</div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>This web application was designed by Sam Martins, July 2022</p>
            </div>
        </div>
    )
}

export default Footer;