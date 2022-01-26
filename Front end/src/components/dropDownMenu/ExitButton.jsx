import Style from "./styles/buttons.module.css"

export default function ExitButton(props){
    function handleExit(){
        props.onExit()
    }
    return(
      <div data-testid="test-container-exit">
        <button className={Style.exit_button} onClick={handleExit} data-testid="test-onExit">X</button>
        </div>
    );
}