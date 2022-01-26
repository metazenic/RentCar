import Warning from "./styles/warning.module.css";

export default function WarningAlert() {
    if (window.sessionStorage.getItem("needLogin")){
      return (
      <div className={Warning.alert} data-testid="test-container-warningAlert">
        <img className={Warning.icon} src="https://grupo-2.s3.amazonaws.com/Logo/Warning.png" alt="Warning icon"/>
        <p className={Warning.text}>Para realizar una reserva necesitas estar logueado</p>
      </div>)
      }else{
        return <></>
      }
  }