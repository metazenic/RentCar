import Style from "./Style.module.css";

export default function spinner() {
  return <div className={Style.spinner} data-testid="test-container-spinner"></div>;
}
