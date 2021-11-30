import React from 'react';
import '../styles/About.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';

const About = () => {
  return (
    <Container id='about'>
      <Row>
        <h1>About</h1>
      </Row>
      <Row>
        <Col className='imageWrapper' lg={4} sm={12}>
          <img
            className='portrait'
            alt='Adam portrait'
            src='/images/Adam.PNG'
          />
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
          <Image alt='html5' src='/images/html5.png' />
          <Image alt='css3' src='/images/css3.png' />
          <Image alt='javascript' src='/images/javascript.png' />
          <Image alt='node' src='/images/node.png' />
          <Image alt='react' src='/images/react.png' />
          <Image alt='redux' src='/images/redux.png' />
          <Image alt='git' src='/images/git.png' />
          <Image alt='github' src='/images/github.png' />
          <Image alt='sequelize' src='/images/sequelize.png' />
          <Image alt='postgresql' src='/images/postgresql.png' />
        </Row>
      </Container>
      <Row>
        <h4>What I Am Learning</h4>
      </Row>
      <Container className='learnContainer'>
        <Row className='learnBanner'>
          <Image alt='aws' src='/images/aws.png' />
          <Image alt='expo' src='/images/expo.png' />
          <Image alt='unity' src='/images/unity.png' />
          <Image alt='wordpress' src='/images/wordpress.png' />
          <Image alt='webpack' src='/images/webpack.png' />
          <Image alt='travisci' src='/images/travisci.png' />
        </Row>
      </Container>
    </Container>
  );
};

export default About;
