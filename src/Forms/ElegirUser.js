import "./ElegirUser.css";

const ElegirUser = (props) => {
    return (
        <div>
            <h1>Elige el tipo de cuenta</h1>
            <button className="btn1">Dueño</button>
            <button className="btn2">Vendedor</button>
        </div>
    );
}

export default ElegirUser;