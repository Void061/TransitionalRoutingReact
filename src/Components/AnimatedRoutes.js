import {Routes, Route, useLocation} from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'


export default function AnimatedRoutes(props){
    const location = useLocation();

    return(
    <AnimatePresence>
        <Routes location={location} key={location.pathname}>
            <Route path="/" element={props.home}/>
            <Route path="/About" element={props.about } />
            <Route path="/Pizze" element={props.pizze } />
            <Route path="/Pizza" element={props.pizza} />
            <Route path="*" element={props.error} />
        </Routes>
    </AnimatePresence>
    )
}