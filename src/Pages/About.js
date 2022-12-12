import { motion } from 'framer-motion'

export default function About(){
    return(
        <motion.div initial={{width: 0}} animate={{width: "100%", position: "unset"}} exit={{x:window.innerWidth, position: 'absolute', transition: {duration: 0.1}, y:0}}>
            <div className="about">
            <div className="header">
                <h1>About</h1>
            </div>

            <div className="content">
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
            </div>
            </div>
        </motion.div>
    )
}