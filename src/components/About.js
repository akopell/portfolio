import React from 'react';
import '../styles/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const About = () => {
  return (
    <Container id='about'>
      <Row>
        <h1>About</h1>
      </Row>
      <Row>
        <Col className='imageWrapper' lg={4} sm={12}>
          <img className='portrait' alt='Adam portrait' src='/Adam.PNG' />
        </Col>
        <Col lg={8} sm={12}>
          I am a Fullstack Software Engineer based in Los Angeles, CA with the
          goal of creating engaging applications and websites using intuitive
          UI/UX design. My problem-solving mind derives enjoyment from solo
          projects, but my extroverted personality thrives when I colaborate
          with others.
        </Col>
      </Row>
      <Row>
        <h4>What I Know</h4>
      </Row>
      <Container className='knowContainer'>
        <Row className='knowBanner'>
          <Col>HHHHHHH</Col>
          <Col>JJJJJJ</Col>
          <Col>IIIIII</Col>
        </Row>
      </Container>
      <Row>
        <h4>What I Am Learning</h4>
      </Row>
      <Container className='learnContainer'>
        <Row className='learnBanner'>
          <Col>HHHHHHH</Col>
          <Col>JJJJJJ</Col>
          <Col>IIIIII</Col>
        </Row>
      </Container>
    </Container>
  );
};

export default About;
