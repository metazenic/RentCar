import Style from "./styles/dropDownMenu.module.css";
import ExitButton from "./ExitButton";
import SocialMedia from "../footer/socialMedia";
import Session from "../header/sesion";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useLocation } from "react-router";

export default function DropDownMenu({ handleClose, sessionStarted, name }) {
  const [id, setId] = useState("");
  const location = useLocation().pathname;

  useEffect(() => {
    const mail = sessionStorage.getItem("email");
    fetch(`/user/${mail}`)
      .then((res) => res.json())
      .then((data) => {
        setId(data);
      });
  }, []);

  function handleExit() {
    handleClose();
  }
  function handleCloseSession() {
    sessionStorage.setItem("isLoggedIn", false);
    document.getElementById("link3").click();
  }
  return (
    <div data-testid="test-container-dropDownMenu">
      <Link to="./" id="link3"></Link>
      <div className={Style.main}>
        <div className={Style.header_menu}>
          <ExitButton onExit={handleExit} />
          {sessionStarted === "true" ? (
            <Session name={name} dropDown={true} />
          ) : (
            <h2 className={Style.text_header}>MENÚ</h2>
          )}
        </div>
        <div className={Style.body_menu}>
          {sessionStarted === "true" ? (
            <>
              <Link
                to={`${id}/myreservation`}
                className={Style.anchor}
                onClick={handleExit}
              >
                Mis reservas
              </Link>
              <hr className={Style.break_line} />
              <Link
                to={`${id}/myfavorits`}
                className={Style.anchor}
                onClick={handleExit}
              >
                Mis favoritos
              </Link>
              <hr className={Style.break_line} />
              <Link to={"admin"} className={Style.anchor} onClick={handleExit}>
                Publicar carro
              </Link>
            </>
          ) : (
            <>
              {location === "/Register" ? (
                <></>
              ) : (
                <Link
                  to={"Register"}
                  className={Style.anchor}
                  onClick={handleExit}
                >
                  Crear cuenta
                </Link>
              )}
              {!(location === "/Login" || location === "/Register") && (
                <hr className={Style.break_line} />
              )}
              {!(location === "/Login") && (
                <Link
                  to={"Login"}
                  className={Style.anchor}
                  onClick={handleExit}
                >
                  Iniciar sesión
                </Link>
              )}
            </>
          )}
          {sessionStarted === "true" && (
            <button className={Style.closeSession} onClick={handleCloseSession}>
              ¿Deseas{" "}
              <span className={Style.spanClose} data-testid="test-CloseSession">
                cerrar sesion
              </span>
              ?
            </button>
          )}

          {sessionStarted === "true" && <hr className={Style.under_break} />}
          <div className={Style.socialMedia}>
            <SocialMedia menu={true} />
          </div>
        </div>
      </div>
    </div>
  );
}
