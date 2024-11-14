import "./Footer.css";
import  xlogo from "../../assets/Xlogo.avif";

export default function Footer() {
    return(
        <div className="footer">
            <div className="inner-footer">
            <h1>Looking for a new talent?</h1>
            <span className="Email">singh.dvynshuu@gmail.com</span>
            <div className="links">
            <span className="resume"><span><i className="dot"></i></span><a href="https://x.com/dvynshuu">X</a></span>
            <span className="resume"><span><i className="dot"></i></span><a href="https://github.com/dvynshuu">Github</a></span>
            <span className="resume"><span><i className="dot"></i></span><a href="https://drive.google.com/file/d/1nrGRBByKS-uyUJXyxjZj66aHPgID8Bjd/view?usp=sharing">Download CV</a></span>
            <span className="resume"><span><i className="dot"></i></span> <a href="https://www.linkedin.com/in/divyanshu-singh-82847a309/">LinkedIn</a></span>
            <span className="resume"><span><i className="dot"></i></span><a href="https://www.instagram.com/__dvynshuu__/">Instagram</a></span>
            </div>
            
            </div>

            <div className="footer-bottom">
                <span className="lowO">©2024 Singh D.</span>
                <span><i className="available"></i>Available for Full Time Position</span>
                <span className="lowO">Made by Singh D.</span>
            </div>
            
        </div>
        
    )
}