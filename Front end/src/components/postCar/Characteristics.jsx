import Style from "./Style.module.css";
import MultipleInputs from "./MultipleInputs";
import InputCharacteristics from "./InputCharacteristics";

export default function Characteristics(props) {
  return (
    <div  data-testid="test-container-characteristics">
      <div className={Style.containerCharacteristics}>
        <h3>Agregar características</h3>
        <p>Debes seleccionar al menos 3 características*</p>
        <div>
        <MultipleInputs
          component={InputCharacteristics}
          componentName="characteristic"
          characteristic={props.characteristic}
        />
        </div>
      </div>
    </div>
  );
}
