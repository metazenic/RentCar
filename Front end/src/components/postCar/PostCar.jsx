import Style from "./Style.module.css";
import { Link } from "react-router-dom";
import GeneralInfo from "./GeneralInfo";
import Characteristics from "./Characteristics";
import Policies from "./Policies";
import ImgUpload from "./ImgUpload";
import Overlay from "react-overlay-component";
import React, { useState } from "react";
import SuccessProduct from "../successProduct/SuccessPageProduct";
import ErrorProduct from "../successProduct/ErrorPageProduct";
import { useEffect } from "react";
import { useRef } from "react";

export default function PostCar() {
  const [isOpen, setOverlay] = useState(false);
  const closeOverlay = () => setOverlay(false);
  const [validation, setValidation] = useState(false);
  const [model, setModel] = useState("");
  const [category, setCategory] = useState("");
  const [direction, setDirection] = useState("");
  const [city, setCity] = useState("");
  const [description, setDescription] = useState("");
  const [characteristic, setCharacteristic] = useState([]);
  const [hygiene, setHygiene] = useState("");
  const [insurance, setInsurance] = useState("");
  const [cancelation, setCancelation] = useState("");
  const [dataCategory, setDataCategory] = useState([]);
  const [dataCity, setDataCity] = useState([]);
  const [dataCharacteristics, setDataCharacteristics] = useState([]);
  const ref = useRef(null);
 
  const configs = {
    animate: true,
    showCloseIcon: false,
  };

  useEffect(()=>{
    if(sessionStorage.getItem("rol")!=="ADMIN") ref.current.click()
  })

  useEffect(() => {
    fetch("/categorias/lista")
      .then((res) => res.json())
      .then((data) => {
        setDataCategory(data);
      });

    fetch("/ciudades/lista")
      .then((res) => res.json())
      .then((data) => {
        setDataCity(data);
      });

    fetch("/caracteristicas")
      .then((res) => res.json())
      .then((data) => {
        setDataCharacteristics(data);
      });
  }, []);

  function handleModel(update) {
    setModel(update);
  }

  function handleCategory(update) {
    setCategory(update);
  }

  function handleDirection(update) {
    setDirection(update);
  }

  function handleCity(update) {
    setCity(update);
  }

  function handleDescription(update) {
    setDescription(update);
  }

  function handleCharacteristic(update) {
    setCharacteristic([...characteristic, update]);
  }

  function handleHygiene(update) {
    setHygiene(update);
  }

  function handleInsurance(update) {
    setInsurance(update);
  }

  function handleCancelation(update) {
    setCancelation(update);
  }

  function validationForm(event) {
    event.preventDefault();
    const img = document.querySelectorAll(".img");
    const arrayImg = [];
    img.forEach((imagen) => {
      arrayImg.push(imagen.value);
    });

    const validationModel = model !== "";
    const validationCategory = category !== "";
    const validationDirection = direction !== "";
    const validationCity = city !== "";
    const validationDescription = description !== "";
    const validationCharacteristics = characteristic.length > 0;
    const validationHygiene = hygiene !== "";
    const validationInsurance = insurance !== "";
    const validationCancelation = cancelation !== "";
    const validationImage = arrayImg.length > 4;

    const finalValidation =
      validationModel &&
      validationCategory &&
      validationDirection &&
      validationCity &&
      validationDescription &&
      validationCharacteristics &&
      validationHygiene &&
      validationInsurance &&
      validationCancelation &&
      validationImage;

    if (finalValidation) {
      const categoria = dataCategory.find(
        (elemento) => elemento.titulo === category
      );
      const idCategory = categoria.id;
      const ciudad = dataCity.find((elemento) => elemento.nombre === city);
      const idCity = ciudad.id;
      const arrayCharacteristics = [];
      for (let i = 0; i < dataCharacteristics.length; i++) {
        for (let j = 0; j < characteristic.length; j++) {
          if (dataCharacteristics[i].nombre === characteristic[j]) {
            arrayCharacteristics.push(dataCharacteristics[i]);
          }
        }
      }
      const arrayCharacteristicsObj = arrayCharacteristics.map((url) => {
        return {
          id: url.id,
        };
      });
      const arrayImgObj = arrayImg.map((url) => {
        return {
          url,
        };
      });

      const productData = {
        nombre: model,
        descripcion: description,
        categoria: {
          id: idCategory,
        },
        imagenes: arrayImgObj,
        caracteristicas: arrayCharacteristicsObj,
        ciudad: {
          id: idCity,
        },
      };
      fetch("/Producto/guardar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + sessionStorage.getItem("token"),
        },
        body: JSON.stringify(productData),
      })
        .then((res) => res.json())
        .then((res) => {
          if (res.status === 201) {
            setValidation(true);
          }
          
          setOverlay(true);
        })
        .catch((err) => {
          
          setOverlay(true);
          console.log(err);
        });
    }
  }


  return (
    <div className={Style.postCar} data-testid="test-container-postCar">
      <div className={Style.upBar}>
        <Link ref={ref} to="/">
          <i className="fas fa-chevron-left"></i>
        </Link>
        <h2>Administración</h2>
      </div>
      <div className={Style.formContainer}>
        <h2>Publicar carro</h2>
        <form className={Style.form}>
          <GeneralInfo
            model={handleModel}
            category={handleCategory}
            direction={handleDirection}
            city={handleCity}
            description={handleDescription}
          />
          <Characteristics
            className={Style.characteristics}
            characteristic={handleCharacteristic}
          />
          <Policies
            hygiene={handleHygiene}
            insurance={handleInsurance}
            cancelation={handleCancelation}
          />
          <div>
          <ImgUpload/>
          </div>
          <div className={Style.submitContainer}>
            <button
              className={Style.submitButton}
              onClick={(e) => {
                validationForm(e);
              }}
            >
              Crear Carro
            </button>
          </div>
          <Overlay
            configs={configs}
            isOpen={isOpen}
            closeOverlay={closeOverlay}
          >
            <SuccessProduct validation={validation} />
            <ErrorProduct validation={validation} />
          </Overlay>
        </form>
      </div>
    </div>
  );
}
