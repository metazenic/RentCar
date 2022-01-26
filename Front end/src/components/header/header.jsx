import Logo from "./logo";
import Sesion from "./sesion";
import Keypad from "./Keypad";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import HamburgerMenu from "./hamburgerMenu";
import Style from "./style.module.css";
import { useLocation } from "react-router";
import Searcher from "../forms/Searcher";
import { useEffect, useState } from "react";

function deleteNeedLogin() {
  window.sessionStorage.removeItem("needLogin");
}

export default function Header({ userName, sessionStart }) {
  const { pathname } = useLocation();
  const [sessionStarted1, setSessionStarted] = useState(sessionStorage.getItem("isLoggedIn"));
  
 useEffect(()=>{
   setSessionStarted(sessionStorage.getItem("isLoggedIn"))
 })
 
  
  return (
    <header className={Style.container} data-testid="test-container-header" >
      <div className={Style.top}>
        <Logo deleteNeedLogin={deleteNeedLogin} />
        <HamburgerMenu
          name={userName}
          sessionStarted={sessionStarted1}
          />
        {sessionStarted1 === "true" ? (
          <Sesion name={userName}/>
        ) : pathname === "/login" ? (
          <RegisterButton />
        ) : pathname === "/register" ? (
          <LoginButton />
        ) : (
          <Keypad />
        )}
      </div>
      {/* pathname == "/" && <Searcher /> */}
    </header>
  );
}
