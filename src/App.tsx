import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import MyNavbarPhone from "./Components/MyNavbarPhone";
import Home from "./Components/Home";
import MyBigCards from "./Components/MyBigCards";
import NewEpRadio from "./Components/NewEpRadio";
import NewsFetch from "./Components/NewsFetch";
import ButtonZone from "./Components/ButtonZone";
import MyFooter from "./Components/MyFooter";

function App() {
  return (
    <>
      <MyNavbarPhone />
      <Home />
      <MyBigCards />
      <NewEpRadio />
      <NewsFetch />
      <ButtonZone />
      <MyFooter />
    </>
  );
}

export default App;
