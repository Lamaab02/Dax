import "./services.scss"
import { motion} from "framer-motion"

const variants={
    initial:{
        x: -500,
        y:100,
        opacity:0
    },
    animate:{
        x: 0,
        y:0,
        opacity: 1,
        tranition:{
            duration: 1,
            staggerChildren:0.1
        }
    },
    
}

export const Services = () => {
  return (
    <motion.div className="services" >
        <motion.div className="textContainer">
            <p>Proudly operating from the University of 
                <br/>   North Carolina Chapel Hill</p>
            <hr/>
        </motion.div>
        <motion.div className="titleContainer">
            <div className="title">
                <img src="./news.png"/>
                <h1><motion.b whileHover={{color:"#81c690"}}>View</motion.b> our latest</h1>
            </div>
            <div className="title">
                <h1><motion.b whileHover={{color:"#81c690"}}>News </motion.b>items</h1>
                <motion.button whileHover={{background:"white"}}>View All</motion.button>
            </div>
        </motion.div>
        <motion.div className="listContainer">
            <motion.div className="box" whileHover={{background:"white", color:"#07547d"}}>
                <h2>title</h2>
                <p>text hereis about this like news article text hereis about this like news article text hereis about this like news article text hereis about this like news article</p>
                <button>read more</button>
            </motion.div>
            <motion.div className="box" whileHover={{background:"white", color:"#07547d"}}>
                <h2>title</h2>
                <p>text hereis about this like news article text hereis about this like news article text hereis about this like news article text hereis about this like news article</p>
                <button>read more</button>
            </motion.div>
            <motion.div className="box"  whileHover={{background:"white", color:"#07547d"}}>
                <h2>title</h2>
                <p>text hereis about this like news article text hereis about this like news article text hereis about this like news article text hereis about this like news article</p>
                <button>read more</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}
