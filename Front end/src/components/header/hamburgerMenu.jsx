import Style from "./style.module.css";
import DropDownMenu from "../dropDownMenu/Menu"
import { useState } from 'react'

export default function HamburgerMenu(props) {
  const [closedMenu, setClosedMenu] = useState(true)
  function handleClick(){
    setClosedMenu(false);
  }
  function handleClose(){
    setClosedMenu(true);
  }
  return (
    <div data-testid="test-container-HamburgerMenu">
    <div className={closedMenu?Style.drop_down_closed:Style.drop_down}>
      <DropDownMenu  handleClose={handleClose} name={props.name} sessionStarted ={props.sessionStarted}/>
      </div>
      <button className={Style.hamburgerMenu} onClick={handleClick}>
        <i className="fas fa-bars"></i>
      </button>
    </div>
  );
}