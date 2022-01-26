import Style from "./Style.module.css";
import Policy from "./Policy";

export default function Policies(props) {
  return (
    <div data-testid="test-container-policies">
      <h3>Políticas del producto</h3>
      <div className={Style.policies}>
        <Policy title="Normas de higiene" policy={props.hygiene} />
        <Policy title="Seguro" policy={props.insurance} />
        <Policy title="Política de cancelación" policy={props.cancelation} />
      </div>
    </div>
  );
}
