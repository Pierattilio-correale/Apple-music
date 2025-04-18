import { useEffect, useState } from "react";
import { CardText, Col, Container, Row, Card } from "react-bootstrap";
import { TrackListResponse } from "../Types";

function NewsFetch() {
  const [data, setData] = useState<TrackListResponse | null>(null);
  const getMusic = () => {
    const url =
      "https://striveschool-api.herokuapp.com/api/deezer/search?q=queen";
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
    getMusic();
  }, []);
  return (
    <>
      <div className="my-5">
        <h4 className="ms-4 text-white">Nuove Uscite {">"}</h4>
        <Container>
          <Row className="g-4">
            {data?.data.slice(0, 6).map((music) => {
              return (
                <Col key={music.id} className="col-4 d-lg-none">
                  <Card>
                    <Card.Img variant="top" src={music.album.cover_medium} />
                  </Card>
                  <CardText className="text-white">
                    {music.artist.name}
                  </CardText>
                  <Card.Text className="text-white">
                    {music.album.title}
                  </Card.Text>
                </Col>
              );
            })}
          </Row>
        </Container>
      </div>
    </>
  );
}

export default NewsFetch;
