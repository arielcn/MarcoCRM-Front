import { useLocation, useNavigate } from 'react-router-dom';
import Navbarr from './Navbar';

const Home = () => {
    const navigate = useNavigate();

    const { state } = useLocation();


    return (
        <Navbarr></Navbarr>
    );

}

export default Home;