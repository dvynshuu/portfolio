import "./Skills.css";
import horns from "../../assets/horns.png"
import {motion} from "framer-motion";
export default function Skills() {
    return (
        <div className="skills">
            <div className="divider"></div>
            <div className="skills-inner">
                <motion.h2
                whileInView={{opacity:1, x :0}}
                initial = {{opacity:0, x :-50}}
                transition={{duration:0.75}}
                >< span >Skills</span></motion.h2>
                <motion.div 
                whileInView={{opacity:1, x :0}}
                initial = {{opacity:0, x :50}}
                transition={{duration:0.75}}
                className="resume-list">
                    <span className="line1">
                        <span className="skill"><span><i className="dot"></i></span> Html</span>
                        <span className="skill"><span><i className="dot"></i></span> Css</span>
                        <span className="skill"><span><i className="dot"></i></span> Javascipt</span>
                        <span className="skill"><span><i className="dot"></i></span> React</span>
                        <span className="skill"><span><i className="dot"></i></span> Node Js</span>
                    </span>
                    <span className="line2"> 
                        <span className="skill"><span><i className="dot"></i></span> Mongo Db</span>
                        <span className="skill"><span><i className="dot"></i></span> Express Js</span>
                        <span className="skill"><span><i className="dot"></i></span>Git & Github</span>
                    </span>

                </motion.div>
            </div>

            <div className="box">
                <div className="column-level">
                    <div className="column-items">
                        <h1>Start a Project</h1>
                    </div>
                    <div className="column-items">
                        <span>Intrested in Working Together?</span>&nbsp;
                        <span>We should queue up a time to chat.</span>
                    </div>
                    <div className="column-items">
                        <a href="/connect" className="anchor-button">
                            <span className="icon"><img src={horns} alt="" /></span>
                            <span className="anchor-text">Let's do this</span>
                        </a>
                    </div>
                </div>
            </div>

        </div>
    )
}