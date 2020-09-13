import React, { Fragment, useState, useContext } from 'react';
import KelasItem from '../kelas/KelasItem';
import KelasContext from '../../context/kelas/kelasContext';

import { Button, Modal, Form } from 'react-bootstrap';

const Kelas = () => {
  const kelasContext = useContext(KelasContext);
  const { kelass, addKelas } = kelasContext;

  const [show, setShow] = useState(false);
  const [kelas, setKelas] = useState({
    namaKelas: '',
    ruangKelas: '',
    zoomKelas: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const { namaKelas, ruangKelas, zoomKelas } = kelas;

  const handleChange = (e) =>
    setKelas({
      ...kelas,
      [e.target.name]: e.target.value,
    });

  const handleSubmit = (e) => {
    e.preventDefault();
    addKelas(kelas);
  };

  return (
    <Fragment>
      {/* <Button
        variant='primary'
        style={{ marginBottom: '2rem' }}
        onClick={handleShow}
      >
        Buat Kelas
      </Button>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop='static'
        keyboard={false}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>Detail Kelas</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Nama Kelas</Form.Label>
              <Form.Control
                type='text'
                name='namaKelas'
                value={namaKelas}
                placeholder='contoh: Fisika'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Ruang Kelas</Form.Label>
              <Form.Control
                type='text'
                name='ruangKelas'
                value={ruangKelas}
                placeholder='link Google Classroom'
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Interaksi Kelas</Form.Label>
              <Form.Control
                type='text'
                name='zoomKelas'
                value={zoomKelas}
                placeholder='link Zoom'
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='outline-secondary' onClick={handleClose}>
            Tutup
          </Button>
          <Button
            variant='outline-primary'
            type='submit'
            onClick={handleSubmit}
          >
            Buat Kelas
          </Button>
        </Modal.Footer>
      </Modal> */}
      {kelass.map((kelas) => (
        <KelasItem key={kelas.id} kelas={kelas} />
      ))}
    </Fragment>
  );
};

export default Kelas;
