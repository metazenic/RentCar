import RegisterFullPage from "./components/forms/RegisterFullPage";
import LoginFullPage from "./components/forms/LoginFullPage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./components/home/Home";
import { useState } from 'react'
import ProductPage from "./components/productPage/ProductPage";
import SuccessPage from "./components/successPage/SuccessPage";
import Reservation from "./components/reservation/Reservation";
import MyFavorits from "./components/favorits/MyFavorits";
import PostCar from "./components/postCar/PostCar";
import Activation from "./activation/Activation";
import MyReservation from "./components/reservation/MyReservation.jsx";
// import DropDownMenu from "./components/dropDownMenu/Menu"

function App() {
  const [sessionStarted, setSessionStarted] = useState(sessionStorage.getItem("isLoggedIn"));
  const [page, setPage] = useState("Home");
  const[name, setName] = useState(sessionStorage.getItem("nombre")+"  "+sessionStorage.getItem("apellido"))

  function handlePageChange(pageReceived) {
    setPage(pageReceived);
  }

  function handleSeessionStarted(isLoggedIn) {
    setSessionStarted(isLoggedIn);
  }

  return (
    <div className="App" data-testid="test-container-app">
      <BrowserRouter>
      <Header sessionStart={sessionStarted} userName={name} />
        {/* <DropDownMenu /> */}
        <main>
          <Switch>
            <Route path="/admin" render={ () => <PostCar />}/> {/* falta corroborar path */}
            <Route path="/register" render={(props) => <RegisterFullPage changePage={handlePageChange} setSessionStarted={handleSeessionStarted} />} />
            <Route path="/login" render={(props) => <LoginFullPage changePage={handlePageChange} setSessionStarted={handleSeessionStarted} />} />
            <Route path="/car/:id/reservation" render={(props) => <Reservation changePage={handlePageChange} setSessionStarted={handleSeessionStarted}/>} />
            <Route path="/car/:id" render={(props) => <ProductPage changePage={handlePageChange} setSessionStarted={handleSeessionStarted}/>} />
            <Route path="/success" render={(props) => <SuccessPage changePage={handlePageChange} setSessionStarted={handleSeessionStarted} />} />
            <Route path="/activation" render={(props) => <Activation changePage={handlePageChange} setSessionStarted={handleSeessionStarted}/>} />
            <Route path="/:userid/myfavorits" render={(props) => <MyFavorits changePage={handlePageChange} setSessionStarted={handleSeessionStarted}/>} />
            <Route path="/:userid/myreservation" render={(props) => <MyReservation changePage={handlePageChange} setSessionStarted={handleSeessionStarted}/>} />
            <Route exact path="/*" render={(props) => <Home changePage={handlePageChange} setSessionStarted={handleSeessionStarted} />} />
          </Switch>
        </main>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;