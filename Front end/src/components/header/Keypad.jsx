import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton"
import Style from "./style.module.css"

export default function Keypad() {
    return (
        <div className={Style.keypad} data-testid="test-container-Keypad">
            <RegisterButton />
            <LoginButton />
        </div>
    )
}