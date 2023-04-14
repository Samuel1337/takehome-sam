import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import "./header.scss";

function Header() {

    return (
        <div className="header-container">
            <a href="https://hellomoon.io" target="_blank" rel="noopener noreferrer">
                <div className="header-left">
                    <img src="./logo.png" />
                    <h1>Solana Watch</h1>
                </div>
            </a>
            <div className="header-right">
            <div className="dev-info">
                    <a href="https://github.com/Samuel1337" className="dev-links"><FaGithubSquare/></a>
                    <a href="https://www.linkedin.com/in/samuel-m-b3b9baa2/" className="dev-links"><FaLinkedin/></a>
                    <div className="dev-info-name">Sam Martins</div>
                </div>
            </div>
        </div>
    )
}

export default Header;