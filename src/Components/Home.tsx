import { Col, Container, Row } from "react-bootstrap";

const Home = function () {
  return (
    <>
      <div className="text-white">
        <h2 className="mt-5 ms-4 myFontsize   ">Novità</h2>
        <div className="">
          <p className="border-bottom w-75 ms-4 border-secondary"></p>
        </div>
      </div>
      <Container>
        <Row className="ms-2 g-4 " style={{ color: "#A5A5A5" }}>
          <Col className="col-6 ">
            <p className="fs-6">NUOVA STAZIONE RADIO</p>
            <p className="text-white fs-5">Rilassati al resto pensiamo noi.</p>
            <p className="text-white fs-5">Ascolta Apple Music Chill</p>
          </Col>
          <Col className="col-6">
            <p>NUOVA STAZIONE RADIO</p>
            <p className="text-white fs-5">Ecco la nuova casa latina</p>
          </Col>
        </Row>
      </Container>
    </>
  );
};
export default Home;
