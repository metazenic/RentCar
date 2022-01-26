import Category from "./category";
import Style from "./style.module.css"

export default function ListCategory() {
  return (
    <div className={Style.container}>
      <h2>Buscar por tipo de carro</h2>
      <div className={Style.categories}>
        <Category
          imageURL="https://images.unsplash.com/photo-1613390833009-17f210e8c969?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          type="Compacto"
          units="90"
        />
        <Category
          imageURL="https://gossipvehiculo.com/wp-content/uploads/2020/10/Nissan-Altima-2021.jpg"
          type="Familiar"
          units="50"
        />
        <Category
          imageURL="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80"
          type="Todo Terreno"
          units="40"
        />
        <Category
          imageURL="https://images.unsplash.com/photo-1555215695-3004980ad54e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=800"
          type="Lujo"
          units="20"
        />
      </div>
    </div>
  );
}
