import { useNavigate } from 'react-router-dom';
import '../App.css';

const LandingPage = () => {
    const navigate = useNavigate();
    const handleRedirectLogin = () =>{
        navigate(`/login`)
    }
    const handleRedirectRegister = () =>{
        navigate(`/register`)
    }
    return (
        <>
            <div>Landing Page</div>
            <button onClick={handleRedirectLogin}>Login</button>
            <button onClick={handleRedirectRegister}>Register</button>
        </>
        
    );
  };
  
  export default LandingPage;