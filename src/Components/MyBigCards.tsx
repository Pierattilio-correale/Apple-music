import { Col, Container, Row } from "react-bootstrap";

import Card from "react-bootstrap/Card";
import First from "../assets/img/1a.png";
import Second from "../assets/img/1b.png";

function MyBigCards() {
  return (
    <>
      <Container className="mb-2">
        <Row className="g-4">
          <Col className="col-6">
            <Card>
              <Card.Img variant="top" src={First} className="dynamic" />
            </Card>
          </Col>
          <Col className=" col-6">
            <Card>
              <Card.Img className="dynamic" variant="top" src={Second} />
            </Card>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default MyBigCards;
