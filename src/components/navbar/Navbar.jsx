import "./navbar.scss"
import {motion} from "framer-motion"
export const Navbar = () => {
  return (
    <div className="navbar">
        <motion.div
        initial={{opacity:0}} 
        animate={{opacity:1}}
        transition={{duration:0.5}}
        className="warpper">
                <motion.img initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}}
                transition={{duration:0.5}}
                 src="../../public/logo.png" alt="React Image" />
                <div className="tabs">
                    <motion.a whileHover={{scale:1.1}} >Home</motion.a>
                    <div className="vl"></div>
                    <motion.a whileHover={{scale:1.1}} >People</motion.a>
                    <div className="vl"></div>
                    <motion.a whileHover={{scale:1.1}} >Research</motion.a>
                    <div className="vl"></div>
                    <motion.a whileHover={{scale:1.1}} >Publication</motion.a>
                </div>
            </motion.div>

    </div>
  )
}


