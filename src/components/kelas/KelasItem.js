import React from 'react';
import { CardDeck, Card } from 'react-bootstrap';

const KelasItem = ({ kelas }) => {
  const { id, namaKelas, ruangKelas, zoomKelas } = kelas;

  let linkRuangKelas = JSON.stringify(ruangKelas);
  // this is to remove " "
  linkRuangKelas = linkRuangKelas.slice(1, -1);

  let linkZoom = JSON.stringify(zoomKelas);
  linkZoom = linkZoom.slice(1, -1);

  return (
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>{namaKelas}</Card.Title>
          <Card.Text>Ruang Kelas</Card.Text>

          <Card.Link href={linkRuangKelas} target='_blank'>
            Google Classroom
          </Card.Link>
          <Card.Link href={linkZoom} target='_blank'>
            Zoom
          </Card.Link>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default KelasItem;
