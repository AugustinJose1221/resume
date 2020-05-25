import React, { Component } from 'react'
//import './css/style.css';
import { Container, Row, Col } from 'react-grid-system';
const Resume = () => {
  return (
    <Container>
    <Row>
      <Col sm={4}>
        One of three columns
      </Col>
      <Col sm={4}>
        One of three columns
      </Col>
      <Col sm={4}>
        One of three columns
      </Col>
    </Row>
</Container>
  );
}

export default Resume;
