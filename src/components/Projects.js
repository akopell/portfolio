import React, { useState } from 'react';
import '../styles/Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';
import { projectData } from '../utils/projects';

const Projects = () => {
  const [showFrost, setShowFrost] = useState(false);
  const [showLevr, setShowLevr] = useState(false);
  const [show2110, setShow2110] = useState(false);
  const [showCyborg, setShowCyborg] = useState(false);
  const [showShopper, setShowShopper] = useState(false);
  const [showDede, setShowDede] = useState(false);
  const modalObj = {
    Frost: {
      get: showFrost,
      set(bool) {
        setShowFrost(bool);
      },
    },
    Levr: {
      get: showLevr,
      set(bool) {
        setShowLevr(bool);
      },
    },
    2110: {
      get: show2110,
      set(bool) {
        setShow2110(bool);
      },
    },
    Cyborg: {
      get: showCyborg,
      set(bool) {
        setShowCyborg(bool);
      },
    },
    Shopper: {
      get: showShopper,
      set(bool) {
        setShowShopper(bool);
      },
    },
    Dede: {
      get: showDede,
      set(bool) {
        setShowDede(bool);
      },
    },
  };

  const handleShow = (modal) => modalObj[modal].set(true);
  const handleClose = (modal) => modalObj[modal].set(false);

  return (
    <Container className='section' id='projects'>
      <Row>
        <h1>Projects</h1>
      </Row>
      <Row>
        {projectData.map((data, i) => (
          <Col
            key={i}
            md={4}
            sm={6}
            xs={12}
            className='overflow-hidden imageContainer p-2 rounded'
          >
            <Image
              rounded
              className='projectImage'
              src={data.image}
              onClick={() => handleShow(data.modal)}
            />

            <Modal
              show={modalObj[data.modal].get}
              onHide={() => handleClose(data.modal)}
            >
              <Modal.Header>
                <Image src={data.image} className='modalImage' />
              </Modal.Header>
              <Modal.Body className='flex'>
                <Modal.Title>{data.name}</Modal.Title>
                <p>{data.description}</p>
                <Row className='align-items-center'>
                  {data.link ? (
                    <Col>
                      <Button href={data.link}>View Site</Button>
                    </Col>
                  ) : (
                    ''
                  )}
                  <Col>
                    <CloseButton
                      aria-label='Close'
                      onClick={() => handleClose(data.modal)}
                      className='float-end '
                    />
                  </Col>
                </Row>
              </Modal.Body>
            </Modal>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Projects;
