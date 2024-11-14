import "./Hero.css";
import profile from "../../assets/profile.png"
import { motion, transform } from "framer-motion";

const container = (delay) => ({
    hidden: { x: 100, opacity: 0 },
    visible: {
        x: 0,
        opacity: 1,
        transition: { duration: 0.5, delay: delay }
    },
});

export default function Hero() {
    return (
        <div className="hero">
            <div className="profile">
                <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.75}}
                    whileHover={{rotate: 360, scale:1.01}}
                    src={profile} loading="lazy" alt="profile-img" />
                    <motion.span
                    initial={{ x: -100, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ duration: 1}}
                    className="hello-dvynshu">Hello I'm <br /> <span className="red-text"> Divyanshu Singh</span></motion.span>
            </div>
            <div className="description">
                <motion.h1
                    variants={container(0.3)}
                    initial="hidden" 
                    animate="visible">
                    <span className="lightdesc">I craft digital experinces</span>
                    <span>combining <span className="strong">design,</span> </span>
                    <span className="strong">& development</span>
                </motion.h1>
                <motion.p
                    variants={container(0.6)}
                    initial="hidden"
                    animate="visible">
                    Welcome to creative space! I am currently pursuing my Bachelor's Degree in Computer Application from Swami Rama Himalayn University.
                    I am constantly exploring new technologies and pushing myself to stay up-to-date with the latest trends in web development. Whether it’s collaborating on a team or working on personal projects, I thrive in an environment that challenges my creativity and problem-solving abilities.
                    Let’s create something remarkable together!
                </motion.p>
            </div>
        </div>
    )
}