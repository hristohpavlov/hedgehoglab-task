import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    const navigate = useNavigate();
    const handleNeedHelp = () =>{
        navigate('#')
    }
    return (
        <nav className="navbar">
        <ul className="navbar-list">
            <li className="navbar-item navbar-title">
            <Link to="/" className="nav-title">hedgehog lab</Link>
            </li>
            <li className="navbar-item navbar-button">
            <button onClick={handleNeedHelp}>Button</button>
            </li>
        </ul>
        </nav>
    );
};

export default Navbar;