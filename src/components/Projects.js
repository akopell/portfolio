import React, { useState } from 'react';
import '../styles/Projects.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import CloseButton from 'react-bootstrap/CloseButton';

const projectData = [
  {
    name: 'Frost Cool Media',
    modal: 'Frost',
    description:
      'The Frost Cool Media mobile application guides users through a largely automated process of generating a Personal Brand Video, which can then be shared on social media to illustrate career strengths and personal interests.',
    image: '/images/frost.PNG',
  },
  {
    name: 'LEVR TV',
    modal: 'Levr',
    description:
      "LEVR TV is a new Oculus 2 VR application that allows users to join a lounge area or virtual arena where they can view live sporting events up close in VR. LEVR TV's website is a place for users to view information and purchase tickets for upcoming virtual events.",
    image: '/images/levr.png',
    link: 'https://levr.tv/',
  },
  {
    name: '2110 Solutions',
    modal: '2110',
    description:
      '2110 Solutions is the go-to resource for boradcast production teams and companies. Its website presents information and news on new production technologies. It also provides a location for United States-based users to purchase goods from top production tech companies like Bridgetech and CueScript.',
    image: '/images/2110.png',
    link: 'https://www.2110solutions.com/',
  },
  {
    name: 'Dededubdub',
    modal: 'Dede',
    description:
      "Dededubdub is a popular VR karaoke hosting service within Microsoft's application Altspace VR. It uses a web application allowing administrators to view user statistics and update and maintain the karaoke song lists.",
    image: '/images/dededubdub.png',
  },
  {
    name: 'Becoming Cyborg',
    modal: 'Cyborg',
    description:
      'Becoming Cyborg is a browser-based role playing game that follows half-human, half-robot character Rob as he tries to save his father and what remains of humanity from robots. See if you have what it takes to help Rob complete quests for the humans, upgrade his mechanical limbs, and battle the Robot King.',
    image: '/images/cyborg.png',
    link: 'https://becoming-cyborg.herokuapp.com/',
  },
  {
    name: 'Grace Shopper',
    modal: 'Shopper',
    description:
      'The Grace Shopper website is an ecommerce clone that sells nerdy toys and collectables. It is built with a fully functioning shopping cart for both logged in and guest users.',
    image: '/images/ness.png',
    link: 'https://ness-ninjas-grace-shopper.herokuapp.com/products',
  },
];

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
    <Container id='projects'>
      <Row>
        <h1>Projects</h1>
      </Row>
      <Row>
        {projectData.map((data, i) => (
          <Col
            md={4}
            sm={6}
            xs={12}
            className='overflow-hidden imageContainer p-1 rounded'
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
