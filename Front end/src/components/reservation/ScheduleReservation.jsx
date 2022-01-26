import Style from './styles/scheduleReservation.module.css';
import { useEffect, useState } from 'react';

function handleOptions() {
    const hours = []
    hours.push("");
    for (let i = 10; i < 24; i++) {
        if (i > 12) {
            hours.push(i< 22 ? "0" + (i - 12) + ":00 PM" : (i - 12) + ":00 PM");
        } else {
            hours.push(i < 10 ? "0" + i + ":00 AM" : i + ":00 AM");
        }
    }
    return hours;
}

   
export default function Schedule(props) {
    const [options, setOptions] = useState([]);
    const [select, setSelect] = useState("")

    useEffect(() =>{
        setOptions(handleOptions());
        console.log(options);
    },[])

    function handleSelect(event) {
        props.time(event.target.value) 
    }

    return (
        <div className={Style.mainCard}>
            <div className={Style.icon_container}>
                <i class="far fa-check-circle"></i>
                <h4 className={Style.title}>Tu carro va a estar listo para ser entregado entre las 10:00 AM y las 11:00 PM</h4>
            </div>
            <p className={Style.paragraphReservation}>Indicá tu horario estimado de llegada</p>
            <select className={Style.selectReservation} onChange={handleSelect}>
                {options.map(element => {
                    return <option>{element}</option>
                })}
            </select>

        </div>
    )
}