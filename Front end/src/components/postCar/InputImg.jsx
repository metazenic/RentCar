import { useState } from "react";
import Style from "./Style.module.css";

export default function InputImg({ id, required }) {
  const [imgName, setImgName] = useState("");

  return (
    <div className={Style.imageInput}>
     
      <input
        placeholder="Seleccione una imagen"
        type="text"
        id={`img${id}`}
        name={`img${id}`}
        required={required}
        key={id}
        className={"img " + Style.questionBox}
        onChange={() =>
          setImgName(
            document.querySelector(`#img${id}`).value.split("\\").pop()
          )
        }
      />
    </div>
  );
}
