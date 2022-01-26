import { useState, useEffect } from "react";
import Style from "../grid/Style.module.css";
import Card from "../card/Card";
import { Link } from "react-router-dom";

export default function MyFavorits() {
  const [gridData, setGridData] = useState([]);
  const [favorites, setFavorites] = useState([])
  const email = sessionStorage.getItem("email")
  const [pedido, setPedido] = useState(false)

  useEffect(() => {
    fetch(`/user/favoritos/?email=${email}`)
      .then(res => res.json())
      .then(data => {

        setGridData(data);
        let arr = data.map(e => e = e.productoDto.id)
        setFavorites(arr)
        setPedido(true)
      }).catch(err => console.log(err))
  }, [])



  return (
    <div className={Style.containerFavorits} data-testid="test-container-myFavorits">
        <div className={Style.infoGridTitles}>
          <Link to="/">
            <i className="fas fa-chevron-left"></i>
          </Link>
          <h2> Mis Favoritos</h2>
        </div>
      <div 
        data-testid="test-container-grid">
        <div className={Style.templateCardList}>
          {pedido ? gridData.length === 0 ?
            <div className={Style.containerMessage}>
              <div className={Style.activation}>
                <i className="far fa-heart"></i>
                <h3>Aún no has agregado ningún auto a tu lista de favoritos</h3>
                <br />
                <p>Para empezar, solo debes elegir un vehículo que te guste y tocar el corazón que se encuentra en la tarjeta.
                  Luego, podrás verlo en esta sección
                </p>
                <button><Link to="/">Empezar a buscar</Link></button>
              </div>
            </div>
            : gridData.map((card) => {
              return <Card item={card.productoDto} key={card.id} favorites={favorites} />;
            }) : ""}
        </div>
      </div>
    </div>
  );
}

