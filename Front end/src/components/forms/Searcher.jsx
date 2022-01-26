import React, { useState, useEffect } from "react";
import useFetch from "../../hooks/useFetch";
import DatePicker from "react-datepicker";
import './styles/searcher.css';
import "./styles/closeIcon.css";

export default function Searcher({ handleSubmit }) {
  const [locationValue, setLocationValue] = useState();
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const handleResize = () => setWindowWidth(window.innerWidth);
  const {info: cities, isLoaded: citiesIsLoaded} = useFetch('/ciudades/lista')
  const [dateValueStart, setDateValueStart] = useState();
  const [dateValueEnd, setDateValueEnd] = useState();

  useEffect(() => {
    let dateStart = new Date(dateRange[0])
    let dayStart = `${(dateStart.getDate())}`.padStart(2, '0');
    let monthStart = dateStart.getMonth() + 1;
    let yearStart = dateStart.getFullYear();

    if (monthStart < 10) {
      setDateValueStart(`${yearStart}-0${monthStart}-${dayStart}`);
    } else {
      setDateValueStart(`${yearStart}-${monthStart}-${dayStart}`);
    }

    let dateEnd = new Date(dateRange[1])
    let dayEnd = `${(dateEnd.getDate())}`.padStart(2, '0');
    let monthEnd = dateEnd.getMonth() + 1;
    let yearEnd = dateEnd.getFullYear();

    if (monthEnd < 10) {
      setDateValueEnd(`${yearEnd}-0${monthEnd}-${dayEnd}`);
    } else {
      setDateValueEnd(`${yearEnd}-${monthEnd}-${dayEnd}`);
    }
  })

  const estaDisponible = (date) => {
    let today = new Date();
    return date >= today &&  (startDate? date>=startDate : true) && (endDate? date<=endDate : true)
};


  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const onHandleSubmit = (e) => {
    e.preventDefault();
    handleSubmit(locationValue, dateValueStart, dateValueEnd)
  }

  return (
    <div className="searcher" data-testid="test-container-searcher">
      <h1 className="title">Busca los mejores autos al mejor precio</h1>
      <div>
        <form className="inputs-searcher" action="#" onSubmit={onHandleSubmit}>
          <div className="select_ciudad">
          <i className="fas fa-map-marker-alt"></i>
          <select className="cities" name="cities" value={locationValue} onChange={e => setLocationValue(e.target.value)}>
            <option hidden selected>Ingresa la ciudad de retiro</option>
            {citiesIsLoaded ?
            cities.map(city => (
              <option key={city.id} value={city.nombre}>{`${city.nombre}, ${city.pais}`}</option>
            )) : <></>}
          </select>
          </div>
          <div className="input-date">
          <i className="fas fa-calendar"></i>
            <DatePicker
              className="calendar"
              placeholderText="Fecha retiro - Fecha devolución"
              selectsRange={true}
              dateFormat="dd 'de' MMM."
              startDate={startDate}
              filterDate={estaDisponible}
              formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
              endDate={endDate}
              onChange={(update) => {
                setDateRange(update);
              }}
              onSubmit={onHandleSubmit}
              isClearable={true}
              monthsShown={windowWidth > 426 ? 2 : 1}
              disabledKeyboardNavigation>
            </DatePicker>
          </div>
          <input className="button" type="submit" value="Buscar" />
        </form>
      </div>
    </div>
  )
}