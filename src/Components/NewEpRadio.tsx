import { CardText, Col, Container, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import my1card from "../assets/img/2f.png";
import my2card from "../assets/img/2a.png";
import my3card from "../assets/img/2b.png";
import my4card from "../assets/img/2c.png";
import my5card from "../assets/img/2e.png";

function NewEpRadio() {
  return (
    <>
      <div className="my-5">
        <h4 className="ms-4 text-white">Nuovi Episodi radio {">"}</h4>
        <Container>
          <Row>
            <Col>
              <Card>
                <Card.Img variant="top" src={my2card} className="" />
              </Card>
              <CardText className="text-white">Pròlogo con Abuelo</CardText>
            </Col>
            <Col className="sparizione">
              <Card>
                <Card.Img variant="top" src={my3card} />
              </Card>
              <CardText className="text-white">The Wanderer</CardText>
            </Col>
            <Col className="sparizione">
              <Card>
                <Card.Img variant="top" src={my4card} />
              </Card>
              <CardText className="text-white">
                Michael Bublè & Carly Pearce
              </CardText>
            </Col>
            <Col className="d-none d-lg-block">
              <Card>
                <Card.Img variant="top" src={my1card} />
              </Card>
              <CardText className="text-white">
                Stephan Moccio : The Zane Lowe Interview
              </CardText>
            </Col>
            <Col className="d-none d-lg-block">
              <Card>
                <Card.Img variant="top" src={my5card} />
              </Card>
              <CardText className="text-white">
                Chart Spotlight : Julia Michaels
              </CardText>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NewEpRadio;
