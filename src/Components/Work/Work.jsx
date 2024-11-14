import "./Work.css";
import project1 from "../../assets/SpotifyClone.png";
import project2 from "../../assets/SimonGame.png";
import project4 from "../../assets/TodoList.png";
import project3 from "../../assets/Portfolio.png"
import project5 from "../../assets/SpotifyClone.png";
import project6 from "../../assets/Portfolio.png";

import { animate, delay, motion } from "framer-motion";

const container = {
    hidden: { opacity: 1, scale: 0 },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            delayChildren: 0.2,
            staggerChildren: 0.1
        }
    }
}

const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
        y: 0,
        opacity: 1,
    }
}

export default function Work() {
    return (
        <div className="work">


            <div className="divider-title"><span className="divider-heading">My Recent Work</span></div>

            <motion.div
                variants={container}
                initial="hidden"
                whileInView="visible"
                class="project-grid">

                <motion.div
                    variants={item}
  
                    className="project-card" >
                    <img src={project1} alt="SpotifyClone" />
                    <p><a href="https://github.com/dvynshuu/SpotifyClone">SpotifyClone</a></p>

                </motion.div>
                <motion.div
                    variants={item}
                   
                    className="project-card" >
                    <img src={project2} alt="Burkett & Co Logo" />
                    <p><a href="https://simongameeee.netlify.app/">Simon Game</a></p>
                </motion.div>
                <motion.div
                    variants={item}
                    
                    className="project-card" >
                    <img src={project3} alt="Chronicled Logo" />
                    <p>Portfolio</p>
                </motion.div>
                <motion.div
                    variants={item}
                    
                    className="project-card" >
                    <img src={project4} alt="GLC Solutions Logo" />
                    <p>Todo List</p>
                </motion.div>
                <motion.div
                    variants={item}
                    
                    className="project-card" >
                    <img src={project5} alt="Coupal Logo" />
                    <p>SpotifyClone</p>
                </motion.div>
                <motion.div
                    variants={item}
                    
                    className="project-card" >
                    <img src={project6} alt="Wedler Engineering Logo" />
                    <p>Portfolio</p>
                </motion.div>
            </motion.div>
        </div>

    )
}
