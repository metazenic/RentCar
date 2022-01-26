import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import Overlay from "react-overlay-component";
import "./styles/forms.css";
import MailConfirmation from "./MailConfirmation";

export default function Register() {
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => { if (validation) document.getElementById("link4").click() };
  const [validation, setValidation] = useState(false);
  const [name, setName] = useState("");
  const [validName, setValidName] = useState(true);
  const [lastname, setLastname] = useState("");
  const [validLastname, setValidLastname] = useState(true);
  const [email, setEmail] = useState("");
  const [validEmail, setValidEmail] = useState(true);
  const [password, setPassword] = useState("");
  const [validPassword, setValidPassword] = useState(true);
  const [repeatPassword, setRepeatPassword] = useState("");
  const [error, setError] = useState("");
  const userData = {
    "nombre": name,
    "apellido": lastname,
    "email": email,
    "password": password
  }

  const configs = {
    animate: true,
    showCloseIcon: false,
  };

  function handleSubmit(e) {
    e.preventDefault();
    const regexEmail = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$");
    setValidEmail(regexEmail.test(email));
    setValidPassword(password.length > 6);
    setValidName(name != "");
    setValidLastname(name != "");
    if (validEmail && validPassword && validName && validLastname && repeatPassword === password) {
      const url = 'user/register';
      console.log(userData)
      fetch(url, {
        method: 'POST',
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(userData)
      }).then(res => res.json()).then((res) => {
        console.log(res)
        if (Number(res.status) === 201) {
          sessionStorage.setItem("token", res.jwt)
          sessionStorage.setItem("email", userData.email)
          setValidation(true)
        }
        setOverlay(true);
      }).catch(err => {
        setError("Lamentablemente no ha podido registrarse. Por favor, intente más tarde.")
        console.log(err)
      });

    }
  }

  function handleChange(e) {
    switch (e.target.name) {
      case "name":
        setName(e.target.value);
        break;
      case "lastname":
        setLastname(e.target.value);
        console.log(lastname);
        break;
      case "email":
        setEmail(e.target.value);
        break;
      case "password":
        setPassword(e.target.value);
        break;
      case "repeatPassword":
        setRepeatPassword(e.target.value)
        break;
    }
  }
  return (
    <div className="container" data-testid="test-container-Register">
      <Link id="link4" to="./login"></Link>
      <h1>Crear cuenta</h1>
      <form onSubmit={handleSubmit}>

        <div className="containerForms">
          <div className="nameLastname">
            <div className="name">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" class={!validName ? "invalid" : "valid"} onChange={handleChange} />
            </div>

            <div className="lastname">
              <label htmlFor="lastName">Apellido</label>
              <input type="text" name="lastname" class={!validLastname ? "invalid" : "valid"} onChange={handleChange} />
            </div>
          </div>

          <label htmlFor="email">Correo electrónico</label>
          <input type="email" name="email" class={!validEmail ? "invalid" : "valid"} onChange={handleChange} />
          {!validEmail && <p>El email no es valido</p>}

          <label htmlFor="pasword">Contraseña</label>
          <input type="password" name="password" class={!validPassword ? "invalid" : "valid"} onChange={handleChange} />
          {!validPassword && <p>Contraseña debe tener 6 caracteres</p>}

          <label htmlFor="repeatPasword">Repita contraseña</label>
          <input type="password" name="repeatPassword" class={password === repeatPassword ? "valid" : "invalid"} onChange={handleChange} />
          {!validPassword && <p>Las contraseñas no coinciden</p>}
        </div>

        <button className="buttonForms" type="submit">Crear cuenta</button>
      </form>
      <p className="linkForms">
        ¿Ya tienes cuenta?
        <Link to="/login"> Crear cuenta</Link>
      </p>
      <Overlay configs={configs} isOpen={isOpen} closeOverlay={closeOverlay}>
        <MailConfirmation/>
      </Overlay>
    </div>
  );
}