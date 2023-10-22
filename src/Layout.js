import './App.css';
import { Outlet, useNavigate } from "react-router-dom";




const Layout = () => {
    const navigate = useNavigate();

    const goBack = () => {
        navigate(-1);
    };
    return (
        <>
            <nav>
                <header className="App-header">
                    <div className='iconoFlecha'>
                        <ion-icon name="arrow-back-outline" onClick={goBack} size='large'></ion-icon>
                    </div>
                    <img src="logo.png" className="App-logo" alt="logo" />
                </header>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;