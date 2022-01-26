import MultipleInputs from "./MultipleInputs";
import InputImg from "./InputImg";
import Style from "./Style.module.css";

export default function ImgUpload() {
  return (
    <div className={Style.containerImg} data-testid="test-container-imgUpload">
      <h3>Cargar imágenes</h3>
      <p>Debes cargar al menos 5 imágenes*</p>
      <MultipleInputs component={InputImg} componentName="img" />
    </div>
  );
}
