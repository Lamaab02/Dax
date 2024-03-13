import "./hero.scss" 
import { motion } from "framer-motion";

const textVariants = {
    initial: {
        x : -500,
        opacity: 0,
    },
    animate: {
        x : 0,
        opacity: 1,
        transition:{
            duration:1 ,
            staggerChildren: 0.1,
        }
    },
    scrollButton:{
        opacity: 0,
        y: 10,
        transition:{
            duration: 4,
            repeat: Infinity
        }
    },
};
const sliderVariants = {
    initial: {
        x : 0,
    },
    animate: {
        x : "-220%",
        transition:{
            repeat: Infinity,
            repeatType:"mirror",
            duration:25,
        }
    },
};

export default function Hero() {
  return (
    <div className="hero">
        <div className="warpper">
            <motion.div className="textCointainer" variants={textVariants} initial="initial" animate="animate" >
                <motion.h1 variants={textVariants}>Design Automation for X</motion.h1>
                <motion.h2 variants={textVariants}>Short description</motion.h2>  
                <motion.div variants={textVariants} className="buttons">
                    <motion.button variants={textVariants}>Contact Us</motion.button>
                </motion.div>
                <motion.img src="/scroll.png" variants={textVariants} animate="scrollButton" />
            </motion.div>
        </div>
        <motion.div className="slidingText" variants={sliderVariants} initial="initial" animate="animate">
            Design Automation Systems for X
        </motion.div>
        <div className="imageContainer">
                <img src="../../public/hero.png"/>
        </div>
    </div>
  )
}
