import { Col, Container, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import First from "../assets/img/1a.png";
import Second from "../assets/img/1b.png";

function MyBigCards() {
  return (
    <>
      <Container className="mb-2">
        <Row>
          <Col>
            <Card>
              <Card.Img
                variant="top"
                src={First}
                className=""
                style={{ width: 350 }}
              />
            </Card>
          </Col>
          <Col className="sparizione">
            <Card>
              <Card.Img variant="top" src={Second} style={{ width: 350 }} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyBigCards;
