import React, { useEffect, useState } from "react";
import GridCard from "../grid/GridCards";
import GridCategory from "../grid/GridCategory";
import Searcher from "../forms/Searcher";
import Style from "./Style.module.css";
import useFetch from "../../hooks/useFetch";
import Spinner from "../spinner/Spinner";


export default function Home(props) { 
  const controller = new AbortController();
  setTimeout(() => controller.abort(), 9000);
  const { isLoaded } = useFetch("/*");
  const [ isFetching, setFetching ] = useState(true)
  const [selectedLocationValue, setSelectedLocationValue] = useState();
  const [categoryValue, setCategoryValue] = useState();
  const [gridData, setGridData] = useState ([]);
  const [counter, setCounter] = useState(0);
  const [initData, setInitData] = useState ([]);
  const [reset, setReset] = useState([]);

  
  useEffect(() => {
    if (counter < 1) {
      props.changePage("Home")
      setCounter(counter + 1);
    }
  })

   useEffect(() => {
    fetch('/Producto/lista')
     .then(res => res.json())
     .then(data => {
      setGridData(data);
      setInitData(data);
      setReset(data);
      setFetching(false) 

      }) 
  }, [])

  
 
  useEffect(() => {
    let filterData
    
       if (selectedLocationValue) {
        filterData = initData.filter(car => {
        return car.ciudad.nombre === selectedLocationValue;
        })
      }
      if (categoryValue) {
        filterData = filterData ? filterData : initData;
        filterData = filterData.filter(car => {
          setFetching(false) 
        return car.categoria.titulo === categoryValue;
        })
      }
      
      if (filterData) {
        setGridData(filterData)
      }
    
  }, [selectedLocationValue, categoryValue ]); 

  const fetchDataByDate = (dateInit, dateEnd, location) => {
    if(!dateInit && !dateEnd) return
     fetch('/Producto/buscar', {
       method: 'POST',
       body: JSON.stringify({
        fechaInicial: dateInit, 
        fechaFinal: dateEnd,
        ciudad: location,
       }),
        headers: {
          'Content-Type': 'application/json'
        }
      })
     .then(res => res.json())
     .then(data => {
     setGridData(data)
     setInitData(data);
     setFetching(false) 
     
    }) 
  };

  const handleSubmit = (location, dateInit, dateEnd) =>{
    setSelectedLocationValue(location);
   setFetching(true) 
   
    fetchDataByDate(dateInit, dateEnd, location );


  }
  const handleClickCategory = (category) =>{
    setCategoryValue(category);
   }

   const resetFilter = () =>{
     setGridData(reset);
     setSelectedLocationValue("");
     setCategoryValue("");
     
   }
  
return (
  <div data-testid="test-container-Home">
     <Searcher   handleSubmit={handleSubmit} />
       {isLoaded ? (
      <div className={Style.cards}>
         <GridCategory  handleClickCategory={handleClickCategory}/>
         <GridCard  gridData={gridData} locationValue={selectedLocationValue} isFetching={isFetching}  resetFilter={resetFilter}/>
      </div>
 
        ) : (
        <Spinner />
      )}  
  </div>
  );
}