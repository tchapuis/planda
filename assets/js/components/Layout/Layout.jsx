import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Layout.scss';

function Layout({children}) {
    return (
      <Container className='main-layout'>
        <Row>
          <Col>
            {children}
          </Col>
        </Row>
      </Container>
    );
  }
export { Layout };