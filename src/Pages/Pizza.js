import {motion} from 'framer-motion'
import { useNavigate } from 'react-router-dom'
export default function Pizza(){
    const navigate = useNavigate();
    return(
        <motion.div initial={{scale: 0}} animate={{scale: 1}} exit={{scale: 0, position: 'absolute', transition: {duration: 0}, y: 0}} >

            <div className="single-pizza">
                <div className="copertina">
                    <img src="/images/pizza.png" alt="pizza"/>
                </div>
                <div className="container-info">
                    <h1>Pizza patatosa</h1>
                    <p>Questa pizza grazie alla sua combo di carboidrati ti farà soffocare</p>
                    <div className="prezzo">10,50€</div>
                    <div className="actions">
                        <button>Acquista</button>
                        <button onClick={() => {navigate("/Pizze")}}>Menù</button>
                    </div>
                </div>
            </div>

        </motion.div>
    )
}