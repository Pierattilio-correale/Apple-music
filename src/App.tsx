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
import SideBar from "./Components/SideBar";
import { Col, Row } from "react-bootstrap";
import MyTopNavbar from "./Components/MyTopNavbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Artist from "./Components/Artist";

function App() {
  return (
    <BrowserRouter>
      <Row>
        <Col
          className="d-none d-lg-block col-lg-3 p-0"
          style={{ backgroundColor: "#252526" }}
        >
          <SideBar />
        </Col>
        <Col className="col-12 col-lg-9 mx-0 p-0">
          <MyTopNavbar />
          <MyNavbarPhone />

          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Home />
                  <MyBigCards />
                  <NewEpRadio />
                  <NewsFetch />
                  <ButtonZone />
                </>
              }
            />
            <Route path="/artist/:artistid" element={<Artist />} />
          </Routes>

          <MyFooter />
        </Col>
      </Row>
    </BrowserRouter>
  );
}

export default App;
