import React , { useRef , useEffect} from 'react'
import "../styles/Login.css"
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const Login = ({ activeLogin, setActiveLogin }) => {

  let ref = useRef(null);

  const handleClickOutside = (event) => {
    if (ref.current && !ref.current.contains(event.target)) {
     setActiveLogin(false);
     console.log(activeLogin);
    }
  };

  useEffect(() => {
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  },[]);

  return (
    <>
    {activeLogin &&
      <div ref={ref} className="login-container-active d-flex justify-content-center align-items-center">

        <h2 className="login-header">Login to my account</h2>
        <p>Enter your e-mail and password:</p>
        <TextField fullWidth id="filled-basic" label="Email" variant="filled" />
        <TextField fullWidth id="filled-basic" label="Password" variant="filled"  margin="normal"/>
        <Button fullWidth variant="contained">Login</Button>
        <div className="footer-container">
          <p className="footer">New Costumer?<a href="">Create your password</a></p>
          <p className="footer">Lost Password?<a href="">Recover password</a></p>
        </div>
      </div>
    }
      
    </>
  )
}


  
export default Login
