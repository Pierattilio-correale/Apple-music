import { useParams } from "react-router-dom";
import { TrackListResponse } from "../Types";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";

import { Container, Col, Row, Spinner, Alert } from "react-bootstrap";

type ArtistParams = {
  artistid: string;
};

const Artist = function () {
  const params = useParams<ArtistParams>();
  const [data, setData] = useState<TrackListResponse | null>(null);
  const [isLoading, setIsloading] = useState(false);
  const [isError, setIserror] = useState(false);

  const getMusic = () => {
    const url = `https://striveschool-api.herokuapp.com/api/deezer/search?q=${params.artistid}`;
    fetch(url)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella promis");
        }
      })
      .then((data) => {
        console.log(data);
        setData(data);
        setIsloading(false);
      })
      .catch((err) => {
        console.log("Errore nella fetch", err);
        setIsloading(false);
        setIserror(true);
      });
  };

  useEffect(() => {
    if (params.artistid) {
      getMusic();
    }
  }, [params.artistid]);

  return (
    <>
      {isLoading && <Spinner variant="danger" animation="border"></Spinner>}
      {isError && (
        <Alert variant="danger">Errore nel cercare la tua canzone</Alert>
      )}
      <h3 className="text-white text-center">{params.artistid}</h3>
      <div className="d-flex flex-wrap gap-3 mt-4 justify-content-center">
        {data?.data?.[0]?.artist.picture_big && (
          <div className="text-white d-flex justify-content-center">
            <img
              src={data?.data?.[0]?.artist.picture_big}
              className="w-100"
              alt="Artist"
            />
          </div>
        )}
        <Container>
          <Row className="g-4">
            {data?.data.map((music) => (
              <Col xs={12} md={6} lg={3} key={music.id}>
                <Card className="d-flex flex-column h-100">
                  <Card.Img variant="top" src={music.album.cover_medium} />
                  <Card.Body className="bg-black text-white">
                    <Card.Title>{music.title}</Card.Title>
                    <Card.Text>{music.album.title}</Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Artist;
