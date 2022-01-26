import Register from "./Register";
import Header from "../header/header";
import { useState, useEffect } from "react";

export default function RegisterFullPage(props) {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    if (counter < 1) {
      props.changePage("Home");
      setCounter(counter + 1);
    }
  });
  return (
    <div data-testid="test-container-registerFullPage">
      <section>
        <Register />
      </section>
    </div>
  );
}
