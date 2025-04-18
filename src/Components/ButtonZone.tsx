import { Container, Row, Col } from "react-bootstrap";

const ButtonZone = () => {
  const cards: string[] = [
    "Esplora per genere",
    "Decenni",
    "Attività e stati d'animo",
    "Worldwide",
    "Classifiche",
    "Audio Spaziale",
    "Video Musicali",
    "Nuovi Artisti",
    "Hit del passato",
  ];

  return (
    <>
      <div className="mt-5">
        <h4 className="text-white ms-4">Altro da esplorare</h4>
      </div>
      <Container>
        <Row className="gx-4 gy-4">
          {cards.map((label: string, index: number) => (
            <Col
              key={index}
              className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
            >
              <div className="custom-card rowEffect d-flex justify-content-between align-items-center">
                <p className="colorerosso mb-0">{label}</p>
                <a href="#" className="colorerosso text-decoration-none">
                  {">"}
                </a>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default ButtonZone;
