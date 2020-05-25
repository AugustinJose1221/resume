import React, { Component } from 'react'
import './css/style.css';
import { Container, Row, Col } from 'react-grid-system';
const Resume = () => {
  return (
    <div>
      <section className="Header">
        <Container>
          <Row>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
            </Col>
            <Col sm={4}>
            <p align="right">Home</p>
            </Col>
          </Row>
        </Container>
    </section>
    <section className="Profile">
      <Container>
        <Row>
          <Col sm={4}>
          </Col>
          <Col sm={4}>
          <img src={ require('./img/Augustin.JPG') } />
          <h1>Augustin Jose</h1>
          </Col>
          <Col sm={4}>
          </Col>
        </Row>
      </Container>
      </section>
  </div>
  );
}

export default Resume;
