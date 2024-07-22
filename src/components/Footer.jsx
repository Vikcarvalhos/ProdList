import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLogoWhatsapp } from "react-icons/io";
import '../css/footer.css';

function Footer(){

    return(
        <>
            <footer className="footer-content">
                <div className="footer-container">
                    <h3>Contato</h3>
                    <div className="footer-links">
                        <a href="https://www.linkedin.com/in/vikcarvalhos/" target="_blank" className="footer-link"><FaLinkedin/></a>
                        <a href="https://github.com/Vikcarvalhos" target="_blank" className="footer-link"><FaGithub/></a>
                        <a href="mailto:vikcarvalhos.pr@gmail.com" className="footer-link"><MdEmail/></a>
                        <a href="https://wa.me/+5511989541262" target="_blank" className="footer-link"><IoLogoWhatsapp/></a>
                    </div>
                </div>
                <p>Desenvolvido por João Viktor</p>
                <p>2024 - Todos os Direitos Reservados</p>
            </footer>
        </>
    )
}

export default Footer