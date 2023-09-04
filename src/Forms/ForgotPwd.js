import { useState } from "react";

const ForgotPwd = () => {
    const [mail, setMail] = useState("");

    return (
        <div className="container">
            <img src="https://www.freeiconspng.com/thumbs/lock-icon/lock-icon-11.png" width={"100px"} alt="lock"></img>
            <h1>¿Tienes problemas para iniciar sesión?</h1>
            <p>Introduce tu correo electrónico y te enviaremos un código para que recuperes tu contraseña.</p>
            <form onSubmit={handleSubmit}>
                <input required type={"email"} placeholder="Email" onChange={(e => setMail(e.target.value))}></input>
                <button type="submit">Enviar</button>
            </form>
        </div>
    )
}

export default ForgotPwd;