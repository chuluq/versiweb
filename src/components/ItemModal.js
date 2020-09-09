import React, { Fragment, useState } from 'react';
import { Button, Modal, Form } from 'react-bootstrap';

const ItemModal = () => {
  const [show, setShow] = useState(false);
  const [section, setSection] = useState({
    section: '',
    classRoom: '',
    classZoom: '',
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleChange = (e) =>
    setSection({
      ...section,
      [e.target.name]: e.target.value,
    });

  return (
    <Fragment>
      <Button
        variant='primary'
        style={{ marginBottom: '2rem' }}
        onClick={handleShow}
      >
        Add Class
      </Button>
      <Modal show={show} onClick={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Class Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group>
              <Form.Label>Class Name</Form.Label>
              <Form.Control
                type='text'
                name='section'
                value={section}
                placeholder='ex: Physics'
                onChange={handleChange}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
          <Button variant='primary' onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Fragment>
  );
};

export default ItemModal;
