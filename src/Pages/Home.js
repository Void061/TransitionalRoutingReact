import Presentation from "../Components/presentation"
import { motion } from 'framer-motion'
export default function Home(){
    return(

        <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{x:window.innerWidth,position: 'absolute', transition: {duration: 0.1}, y: 0}}>
            <Presentation />
        </motion.div>
    )
}