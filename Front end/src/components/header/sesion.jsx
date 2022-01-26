import Dropdown from "../dropDownMenu/Dropdown";
import Style from "./style.module.css"

export default function User(props) {
  
  return (
    <div className={props.dropDown ? Style.userDropDown : Style.user}>
      <Dropdown props={props}/>
      {/* <div className={props.dropDown ? Style.dropDownGreetingUser : Style.greetingsUser}>
        <p className={props.dropDown ? Style.dropDownNameUser : ""}>Hola,</p>
        <p className={Style.nameUser}>{props.name}</p>
      </div>
      <button className={props.dropDown ? Style.closeUser : ""} onClick={handleChange} aria-label="boton cerrar sesion">X</button> */}
    </div>
  );
}
