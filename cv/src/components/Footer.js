import React from "react";
import '../styles/Footer.css';

class Footer extends React.Component {
    render() {
        return (
            <div className="footer">
                <div className="footerContent">
                    <div className="linkContainer">
                        <a href="https://github.com/connorwarme">
                            <img alt="GitHub Profile"></img>
                        </a>
                        <a href="https://www.linkedin.com/in/connor-warme-103a09167">
                            <img alt="LinkedIn Profile" target="_blank"></img>
                        </a>
                    </div>
                    <div className="textContainer">
                        <div className="footerText">Peregrinning Productions</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;