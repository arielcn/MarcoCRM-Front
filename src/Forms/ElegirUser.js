import "./ElegirUser.css";
import { useNavigate } from "react-router-dom";

const ElegirUser = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1 className="titulo">Elige el tipo de cuenta</h1>
            <button onClick={() => navigate("/registro-d")} className="btn1">Dueño</button>
            <button onClick={() => navigate("/registro-v")} className="btn2">Vendedor</button>
        </div>
    );
}

export default ElegirUser;