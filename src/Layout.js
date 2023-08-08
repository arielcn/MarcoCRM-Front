import './App.css';

import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <>
            <nav>
                <header className="App-header">
                    <img src="logo.png" className="App-logo" alt="logo" />
                </header>
            </nav>
            <Outlet />
        </>
    );
};

export default Layout;