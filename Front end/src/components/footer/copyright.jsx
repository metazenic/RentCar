import Style from "./style.module.css"

export default function copyright() {
  return (
    <div className={Style.copyright} data-testid="test-container-copyright">
      <p><span aria-label="simbolo de copyright">©</span>2021 Rent Car</p>
    </div>
  );
}
