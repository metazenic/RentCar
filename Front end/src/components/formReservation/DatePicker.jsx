import DatePicker from 'react-datepicker';
import "./Style/calendar.css";
import React, { useState, useEffect } from "react";
import { useParams } from 'react-router';

export default function CalendarPicker(props) {
    const [dateRange, setDateRange] = useState([sessionStorage.getItem("fechaInicial")?new Date(sessionStorage.getItem("fechaInicial")):null,sessionStorage.getItem("fechaFinal")? new Date(sessionStorage.getItem("fechaFinal")): null]);
    const [startDate, endDate] = dateRange;
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)
    const [diasBloqueados, setDiasBloqueados] = useState([])
    const handleResize = () => setWindowWidth(window.innerWidth);
    const [proximoDiaBloqueado, setProximoDiaBloqueado]= useState(Infinity)
    const {id} = useParams()

    useEffect(() => {
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(()=>{
        fetch("/Producto/nodisponible/"+id) //Hay que hacerlo dinamico
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            data = data.map(e=>e=new Date(e))
            setDiasBloqueados(data.sort((a,b)=>a-b))
           
        })
        .catch(err=>console.log(err))
    },[])

    const today = new Date();

    const handleClick=()=>{
        setDateRange([null,null])
        sessionStorage.removeItem("fechaInicial")
        sessionStorage.removeItem("fechaFinal")
        if(props.reserva) props.reserva([null,null])
    }

    const estaDisponible = (date) => {
        
        return date >= today && date<proximoDiaBloqueado && (startDate? date>=startDate : true) && (endDate? date<=endDate : true)
    };
    return (
        <div data-testid="test-container-calendarPicker">
        <button onClick={handleClick}>Limpiar</button>
        <DatePicker
            selected={null}
            selectsRange={true}
            selectsStart={true}
            selectsEnd={true}
            formatWeekDay={(nameOfDay) => nameOfDay.substr(0, 1)}
            startDate={startDate}
            endDate={endDate}
            onChange={(update) => {
                setDateRange(update);
                let proximoDiaBloqueado1 = diasBloqueados.find(e=>e>update[0])
                console.log(dateRange)
                if(proximoDiaBloqueado1) setProximoDiaBloqueado(proximoDiaBloqueado1)
                if(props.reserva) props.reserva(update)
            }}
            monthsShown={windowWidth > 426 ? 2 : 1}
            inline
            filterDate={estaDisponible}
            dateFormatCalendar={"MMMMMMMMMMM  yyyy"}
            excludeDates={diasBloqueados}
            disabledKeyboardNavigation
        />
        </div>
    );
}