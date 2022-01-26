import Style from "./Style.module.css";

export default function Policy({ title, policy }) {
  function handlePolicy(event) {
    policy(event.target.value);
  }

  return (
    <div className={Style.policy} data-testid="test-container-policy">
      <h4>{title}</h4>
      <textarea
        id={`${title} policy`}
        name={`${title} policy`}
        cols="30"
        rows="10"
        placeholder="Escriba acá"
        className={Style.questionBox}
        onChange={handlePolicy}
      ></textarea>
    </div>
  );
}
