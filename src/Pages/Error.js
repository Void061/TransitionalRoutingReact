import { motion } from 'framer-motion'

export default function Error(){
    return(
        <motion.div initial={{width: 0}} animate={{width: "100%"}} exit={{x:window.innerWidth, transition: {duration: 0.1}, y: 0}}>
            <h1>404</h1>
        </motion.div>
    )
}