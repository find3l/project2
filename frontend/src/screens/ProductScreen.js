import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Row, Col, Image, ListGroup, Button } from "react-bootstrap";
import axios from "axios";

const ProductScreen = ({ match }) => {
  const [product, setProducts] = useState({});

  useEffect(() => {
    const fetchProducts = async () => {
      const { data } = await axios.get(`/api/products/${match.params.id}`);

      setProducts(data);
    };

    fetchProducts();
  }, [match]);

  console.log(product);
  return (
    <>
      <Link className="btn btn-light my-3" to="/">
        Go Back
      </Link>
      <Row>
        <Col md={6}>
          <Image src={product.image} alt={product.name} fluid />
        </Col>
        <Col md={6}>
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroup.Item>Description: {product.description}</ListGroup.Item>
          </ListGroup>
          <ListGroup.Item>
            <Row>
              <Col>Price:</Col>
              <Col>
                <strong>${product.price}</strong>
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Row>
              <Col>Status:</Col>
              <Col>
                ${product.countInStock > 0 ? "In Stock" : "Out Of Stock"}
              </Col>
            </Row>
          </ListGroup.Item>
          <ListGroup.Item>
            <Button
              className="btn-block"
              type="button"
              disabled={product.countInStock === 0}
            >
              Add To Cart
            </Button>
          </ListGroup.Item>
        </Col>
      </Row>
    </>
  );
};

export default ProductScreen;
