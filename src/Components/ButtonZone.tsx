import { Container, Row, Col } from "react-bootstrap";

const ButtonZone = function () {
  return (
    <>
      <div className="mt-5">
        <h4 className="text-white ms-4">Altro da esplorare</h4>
      </div>
      <Container>
        <Row>
          <Col className="mb-2">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Esplora per genere</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Decenni</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Attività e stati d'animo</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Worldwide</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Classifiche</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Audio Spaziale</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Video Musicali</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="mb-2">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Nuovi Artisti</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
          <Col className="">
            <Row
              style={{ width: 400 }}
              className="p-2 rounded-4 ms-2 rowEffect"
            >
              <Col className="col-10">
                <p className="colorerosso">Hit del passato</p>
              </Col>
              <Col className="col-2">
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default ButtonZone;
