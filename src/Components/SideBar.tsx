import { Col, Row, Container, Navbar } from "react-bootstrap";

import Card from "react-bootstrap/Card";

import AppleMusic from "../assets/img/music.svg";
import { useEffect, useState } from "react";
import { TrackListResponse } from "../Types";
import { Link } from "react-router-dom";

const SideBar = function () {
  const [data, setData] = useState<TrackListResponse | null>(null);
  const [searchbar, setSearchbar] = useState<string>("");
  const getMusic = () => {
    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${searchbar}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella promis");
        }
      })
      .then((data) => {
        setData(data);
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
      });
  };
  useEffect(() => {
    if (searchbar !== "") {
      getMusic();
    }
  }, [searchbar]);
  return (
    <>
      <div className="h-100">
        <Container className="mt-4 ms-2 ">
          <Row className="d-flex flex-row g-3 ">
            <Col className="col-12">
              <Navbar.Brand className="" href="#home">
                <img src={AppleMusic} className="img-white" />
              </Navbar.Brand>
            </Col>

            <Col className="col-12">
              <div className="position-relative">
                <input
                  value={searchbar}
                  onChange={(e) => {
                    setSearchbar(e.target.value);
                  }}
                  type="text"
                  placeholder="Search"
                  className="form-control input-with-icon-left bg-black text-white"
                />
                <i className="bi bi-search search-icon-left"></i>
              </div>
              {data?.data.slice(0, 4).map((music) => (
                <Col key={music.id} className="mt-3">
                  <Card className="bg-dark">
                    <Card.Img variant="top" src={music.artist.picture_medium} />
                    <Card.Body>
                      <Card.Title className="text-white">
                        {music.artist.name}
                      </Card.Title>
                      <Card.Text className="text-white">
                        {music.album.title}
                      </Card.Text>
                      <Link
                        className="btn btn-outline-primary"
                        to={"/artist/" + music.artist.name}
                      >
                        Vai alla pagina artista
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Col>
            <Col className="col-12 ">
              <div className="hover p-2">
                <Link className="colorerosso text-decoration-none " to="/">
                  <i className="bi bi-house-door-fill"></i> Home
                </Link>
              </div>
            </Col>
            <Col className="col-12 hover">
              <p className="colorerosso ps-2 ">
                <i className="bi bi-grid"></i> Novità
              </p>
            </Col>
            <Col className="col-12 hover">
              <p className="colorerosso ps-2">
                {" "}
                <i className="bi bi-broadcast"></i> Radio
              </p>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SideBar;
