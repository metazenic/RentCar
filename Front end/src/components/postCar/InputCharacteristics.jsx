import Style from "./Style.module.css";
import useFetch from "../../hooks/useFetch";

export default function InputCharacteristics({ id, required, characteristic }) {
  const { info: characteristics, isLoaded: characteristicsIsLoaded } =
    useFetch("/caracteristicas");

  function handleCharacteristic(event) {
    characteristic(event.target.value);
  }

  return (
    <div className={Style.characteristic} data-testid="test-container-inputCharacteristics">
      <label htmlFor={`characteristic${id}`}></label>
      <input
        list="characteristics"
        name="characteristic"
        id={`characteristic${id}`}
        placeholder="Ej: automático"
        required={required}
        className={Style.questionBox}
        onChange={handleCharacteristic}
      />
      <datalist id="characteristics">
        {characteristicsIsLoaded ? (
          characteristics.map((characteristic) => (
            <option
              value={characteristic.nombre}
              key={characteristic.id}
            ></option>
          ))
        ) : (
          <></>
        )}
      </datalist>
    </div>
  );
}
