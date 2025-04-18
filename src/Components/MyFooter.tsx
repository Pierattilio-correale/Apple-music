import { Col, Container, Row } from "react-bootstrap";
import MusicPlayer from "./MusicPlayer";

const MyFooter = function () {
  return (
    <>
      <div className="Footer mt-3">
        <div className="d-flex ms-3">
          {" "}
          <p className="text-white mx-2">Italia</p>{" "}
          <p className="mx-2" style={{ color: "#A5A5A5" }}>
            {"|"}
          </p>
          <p className="mx-2" style={{ color: "#A5A5A5" }}>
            (UK)
          </p>
        </div>
        <div className="d-flex">
          <p style={{ color: "#A5A5A5" }} className=" ms-3">
            Copyright © 2024
          </p>{" "}
          <p className="mx-2 text-white">Apple Inc.</p>
          <p className="mx-2" style={{ color: "#A5A5A5" }}>
            Tutti i diritti riservati
          </p>
        </div>
        <div className="d-flex ms-3">
          <Container>
            <Row>
              <Col className="col-4 d-flex">
                <p className="text-white mx-1">
                  Condizioni dei Servizi Internet
                </p>{" "}
                <p className="mx-1" style={{ color: "#A5A5A5" }}>
                  {"|"}
                </p>
              </Col>
              <Col className="col-4 d-flex">
                <p className="mx-1 text-white">Aplle Music E Privacy</p>
                <p className="mx-1" style={{ color: "#A5A5A5" }}>
                  {"|"}
                </p>
              </Col>
              <Col className="col-4 d-flex">
                <p className="mx-1 text-white">Avviso Sui Cookie</p>
                <p className="mx-1" style={{ color: "#A5A5A5" }}>
                  {"|"}
                </p>
              </Col>
              <Col className="col-4 d-flex">
                <p className="mx-1 text-white">Supporto</p>
                <p className="mx-1" style={{ color: "#A5A5A5" }}>
                  {"|"}
                </p>
              </Col>
              <Col className="col-4 d-flex">
                <p className="mx-1 text-white">Feedback</p>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
      <MusicPlayer />
    </>
  );
};

export default MyFooter;
