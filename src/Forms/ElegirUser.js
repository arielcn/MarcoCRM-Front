import "./ElegirUser.css";
import { useNavigate } from "react-router-dom";

const ElegirUser = () => {
    const navigate = useNavigate();

    return (
        <div className="container text-center">
            <h1 className="mt-5 text-white">Elige el tipo de cuenta</h1>
            <div className="w-100">
            <button onClick={() => navigate("/registro-d")} className="btn1">Dueño</button>
            </div>
            <button onClick={() => navigate("/registro-v")} className="btn2">Vendedor</button>
        </div>
    );
}

export default ElegirUser;