import Style from "./Style.module.css";
import { useState, useEffect } from "react";

export default function MultipleInputs(props) {
  const [counter, setCounter] = useState(1);
  const [iterable, setIterable] = useState([]);

  useEffect(() => {
    setIterable([...iterable, counter]);
  }, [counter]);

  const addComponent = (e) => {
    e.preventDefault();
    setCounter(counter + 1);
  };

  const deleteComponent = (e, id) => {
    e.preventDefault();
    document.getElementById(`#${props.componentName}Container${id}`).remove();
  };

  return (
    <div data-testid="test-container-multipleInputs">
      {iterable.map((id) => (
        <div
          className={Style.component}
          id={`#${props.componentName}Container${id}`}
        >
          <props.component
            key={id}
            id={id}
            required={id === 1}
            characteristic={props.characteristic}
          />
          {id === iterable.at(-1) ? (
            <button
              onClick={(e) => {
                addComponent(e);
              }}
            >
              <i className={`fas fa-plus ${Style.add}`}></i>
            </button>
          ) : (
            <button
              onClick={(e) => {
                deleteComponent(e, id);
              }}
            >
              <i className={`fas fa-times ${Style.delete}`}></i>
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
