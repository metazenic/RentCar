import Copyright from "./copyright";
import SocialMedia from "./socialMedia"
import Style from "./style.module.css"

export default function Footer() {
  return (
    <footer className={Style.container} data-testid="test-container-footer">
      <Copyright />
      <SocialMedia />
    </footer>
  );
}
