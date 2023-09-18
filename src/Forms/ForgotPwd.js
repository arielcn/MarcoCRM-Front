import { useState } from "react";
import { Form, Button } from "react-bootstrap";

const ForgotPwd = () => {
    const [mail, setMail] = useState("");

    const handleSubmit = () => {
        console.log("forgot", mail)
    };

    return (
        <div className="container text-center mt-5">
            <img className="text-center" src="https://flaticons.net/icon.php?slug_category=network-security&slug_icon=lock" width={"18%"} alt="lock"></img>
            <h1 className="text-white">¿Tienes problemas para iniciar sesión?</h1>
            <p className="text-white">Introduce tu correo electrónico y te enviaremos un código para que recuperes tu contraseña.</p>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3 text-white" >
                    <Form.Control style={{width: "50%", marginLeft: "25%"}} type="email" placeholder="Ingresar email" required value={mail} onChange={(e => setMail(e.target.value))} />
                </Form.Group>
                <Button variant="primary" size="lg" type="submit">Enviar</Button>
            </Form>
        </div>
    )
}

export default ForgotPwd;