import React from 'react';
import { CardDeck, Card, ListGroup } from 'react-bootstrap';

const KelasItem = ({ kelas }) => {
  const { id, namaKelas, ruangKelas, zoomKelas } = kelas;

  return (
    <CardDeck>
      <Card>
        <Card.Body>
          <Card.Title>{namaKelas}</Card.Title>
          <Card.Text>Ruang Kelas</Card.Text>

          <Card.Link href='#'>Google Classroom</Card.Link>
          <Card.Link href='#'>Zoom</Card.Link>
        </Card.Body>
      </Card>
    </CardDeck>
  );
};

export default KelasItem;
