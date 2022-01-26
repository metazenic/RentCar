const listCardCars = document.querySelector("#template-card-list-cars");
const xmlhttp = new  XMLHttpRequest();
const url = "cars.json";
xmlhttp.open("GET",url,true);
xmlhttp.send();

xmlhttp.onreadystatechange = function () {
  if(xmlhttp.readyState == 4 && xmlhttp.status == 200){
    const cars = JSON.parse(xmlhttp.responseText);
    console.log(cars);
    cars.map(listTheCars);
   
  }

}

function listTheCars(item) {
  const  templateCars = `
  <div class="card-list">
      <div class="card-list-img" style = "background-image: url(${item.img})">
      </div>
      <div class="card-list-contend">
        <p>${item.category}</p>
        <h3>${item.title}</h3>
        <i class="fas fa-map-marker-alt"></i>
        <span>${item.location[0]}</span>
        <a class = "link-location" href="${item.location[1]}"
          target="_blank">MOSTRAR EN EL MAPA</a>
        <p>${item.description}</p>
        <a href="" class="info-card">VER DETALLES</a>
      </div>
    </div>
    `;
   listCardCars.innerHTML += templateCars;

}



