import Login from "./Login";
import { useState, useEffect } from "react";

export default function LoginFullPage(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < 1) {
      props.changePage("Home");
      setCounter(counter + 1);
    }
  });
  return (
    <div data-testid="test-container-LoginFullPage">
      <section>
        <Login setSessionStarted={props.setSessionStarted} />
      </section>
    </div>
  );
}
