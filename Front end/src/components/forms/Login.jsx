import { Link } from "react-router-dom";
import { useEffect, useState } from 'react';
import "./styles/forms.css";
import WarningAlert from "./WarningAlert";
//import { GlobalContext } from "../../context/GlobalState";


export default function Login(props) {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [userIncorrect, setUserIncorrect] = useState(false);
  const [error, setError] = useState("");
  const [url,setUrl]= useState("./login");
  const [session, setSession] = useState(false);
  const userData = {
    "email": email,
    "password": password
  }
  

  
  

  function handleSubmit(e) {
    e.preventDefault();
    const regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    setValidEmail(regexEmail.test(email));
    setValidPassword(password.length > 6);

    const userData = {
      "email": email,
      "password": password
    }
    if (validEmail && validPassword) {
      fetch("/user/login", {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }).then(res => res.json()).then((res) => {
        console.log(res)
        if(res.jwt){
        sessionStorage.setItem("token", res.jwt)
        sessionStorage.setItem("nombre", res.nombre)
        sessionStorage.setItem("email", res.email)
        sessionStorage.setItem("apellido", res.apellido)
        sessionStorage.setItem('isLoggedIn', true);
        sessionStorage.setItem("rol", res.rol)
        setSession(true)
        linkTo()
        }else{
          setError("Lamentablemente no ha podido registrarse. Por favor, intente más tarde.")
          console.log(123)
          setUserIncorrect(true);
        }

      }).catch(err => {
        console.log(err)
        setError("Lamentablemente no ha podido registrarse. Por favor, intente más tarde.")
        console.log(124)
        setUserIncorrect(true);
      });
    }
  }


  function linkTo() {
    setUserIncorrect(false);
    props.setSessionStarted(true);
    if (window.sessionStorage.getItem('needLogin') !== null) {
      window.sessionStorage.removeItem('needLogin');
      document.getElementById("link1").click()
    } else {
      document.getElementById("link2").click()
    }
  
  }

  function handleChange(e) {
    switch (e.target.name) {
      case "password":
        setPassword(e.target.value);
        setValidPassword(password.length > 6);
        break;
      case "email":
        setEmail(e.target.value);
        const regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
        setValidEmail(regexEmail.test(email));
        break;
    }
  }

  function deleteNeedLogin() {
    window.sessionStorage.removeItem('needLogin');
  }

  return (
    <div className="container" data-testid="test-container-login">
      <WarningAlert />
      <h1>Iniciar sesión</h1>
      <Link id="link1" to={`/car/${window.sessionStorage.getItem('needLogin')}/reservation`} ></Link>
      <Link id="link2" to={"./"}></Link>
      <form onSubmit={handleSubmit}>
        <div className="containerForms">
          <label htmlFor="email">Correo electrónico</label>
          <input type="email" name="email" value={email} class={!validEmail ? "invalid" : "valid"} onChange={handleChange} />
          {/*!validEmail && <p>El email es inválido</p>*/}

          <label htmlFor="pasword">Contraseña</label>
          <input type="password" value={password} name="password" onChange={handleChange} class={!validPassword ? "invalid" : "valid"} />
          {/*!validPassword && <p>La contraseña es inválida</p>*/}
          {userIncorrect && <p>Por favor, vuelva a intentarlo sus credenciales son inválidas</p>}
        </div>
        <button className="buttonForms" type="submit">Iniciar sesión</button>
      </form>
      <p className="linkForms">
        ¿Aún no tienes cuenta?
        <Link to="/register" onClick={() => { deleteNeedLogin() }}> Registrate</Link>
      </p>
    </div>
  );
}
