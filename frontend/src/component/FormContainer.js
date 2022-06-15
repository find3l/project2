import React from "react";
import { Row, Col, Card } from "react-bootstrap";

const FormContainer = ({ children }) => {
  return (
    <Card>
      <Row className="justify-content-md-center">
        <Col xs={12} md={6}>
          {children}
        </Col>
      </Row>
    </Card>
  );
};

export default FormContainer;
