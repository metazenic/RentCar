import Style from "./Style.module.css";
import useFetch from "../../hooks/useFetch";

export default function GeneralInfo(props) {
  const { info: categories, isLoaded: categoriesIsLoaded } =
    useFetch("/categorias/lista");
  const { info: cities, isLoaded: citiesIsLoaded } =
    useFetch("/ciudades/lista");

  function handleModel(event) {
    props.model(event.target.value);
  }

  function handleCategory(event) {
    props.category(event.target.value);
  }

  function handleDirection(event) {
    props.direction(event.target.value);
  }

  function handleCity(event) {
    props.city(event.target.value);
  }

  function handleDescription(event) {
    props.description(event.target.value);
  }

  return (
    <div className={Style.generalInfo} data-testid="test-container-generalInfo">
      <div className={Style.upBox}>
        <div className={Style.questionContainer}>
          <label htmlFor="productName">Modelo de vehículo</label>
          <input
            type="text"
            id="productName"
            name="productName"
            placeholder="Ej: Volkswagen Suran"
            required
            className={Style.questionBox}
            onChange={handleModel}
          />
        </div>
        <div className={Style.questionContainer}>
          <label htmlFor="category">Categoría</label>
          <select
            id="category"
            name="category"
            required
            className={Style.questionBox}
            onChange={handleCategory}
          >
            <option hidden unselectable>
              Seleccione una categoría
            </option>
            {categoriesIsLoaded ? (
              categories.map((category, id) => (
                <option value={category.titulo} key={id}>
                  {category.titulo}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
        <div className={Style.questionContainer}>
          <label htmlFor="adress">Dirección de retiro</label>
          <input
            type="text"
            id="adress"
            name="adress"
            placeholder="Ej: Junin 1760"
            required
            className={Style.questionBox}
            onChange={handleDirection}
          />
        </div>
        <div className={Style.questionContainer}>
          <label htmlFor="city">Ciudad de retiro</label>
          <select
            id="city"
            name="city"
            required
            onChange={handleCity}
            className={Style.questionBox}
          >
            <option hidden unselectable>
              Seleccione una ciudad
            </option>
            {citiesIsLoaded ? (
              cities.map((city) => (
                <option value={city.nombre} key={city.id}>
                  {city.nombre}
                </option>
              ))
            ) : (
              <></>
            )}
          </select>
        </div>
      </div>
      <div className={Style.questionContainer}>
        <label htmlFor="description">Descripción</label>
        <textarea
          id="description"
          name="description"
          cols="30"
          rows="10"
          placeholder="Escriba acá"
          required
          className={Style.questionBox}
          onChange={handleDescription}
        ></textarea>
      </div>
    </div>
  );
}
