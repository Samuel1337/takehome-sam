import {FaGithubSquare, FaLinkedin} from "react-icons/fa";
import "./header.scss";

function Header() {

    return (
        <div className="header-container">
            <div className="header-left">
                logo
            </div>
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