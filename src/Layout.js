import './App.css';
import { Outlet, useNavigate } from "react-router-dom";



const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };

    const click = () => {
        navigate('/editar-perfil')
    }
    return (
        <>
            <nav>
                <header className="App-header">
                    <div className='iconoFlecha'>
                        <ion-icon name="arrow-back-outline" onClick={goBack} size='large'></ion-icon>
                    </div>
                    <img src="logo.png" className="App-logo" alt="logo" />
                    <ion-icon name="person-circle-outline" className='iconoPerfil' onClick={click} size='48px'></ion-icon>
                    
                </header>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;