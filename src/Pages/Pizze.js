import Card from "../Components/Card"
import {motion} from 'framer-motion'
export default function Pizze(){
    return(
        <motion.div className="container-pizze" initial={{width: 0}} animate={{width: "100%"}} exit={{x:window.innerWidth,position: 'absolute', transition: {duration: 0.1}, y: 0}}>
            
            <h1>Menù pizze</h1>
            
            <div className="pizze">
                <Card/>
                <Card />
                <Card />
                <Card />
            </div>
        </motion.div>
    )
}