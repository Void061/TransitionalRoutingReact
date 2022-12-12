import { useNavigate } from "react-router-dom";
export default function Card(){
    const navigate = useNavigate();
    return(
        <div onClick={() => {navigate("/Pizza");}} className="card">
        <div className="copertina">
            <img src="/images/pizza.png" alt="pizza" />
        </div>
        <div className="Titolo">
            <h2>Pizza patatosa</h2>
        </div>
        <div className="testo">
            <p>Questa pizza grazie alla sua combo di carboidrati ti farà soffocare.</p>
        </div>
    </div>
    )
}