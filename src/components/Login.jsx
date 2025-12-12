import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "./AuthContext";
import ReactDom from 'react-dom';

function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    login();
    navigate("/");
  };

  return ReactDom.createPortal(
    <div>
      <h2>Login Page</h2>
      <button onClick={handleLogin}>Login</button>
    </div>,
    document.getElementById("portal")
  );
}

export default Login;
