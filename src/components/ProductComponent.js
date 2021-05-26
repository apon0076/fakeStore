import React from 'react';
import { useSelector } from 'react-redux';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ProductComponent = () => {
    const products = useSelector((state) => state.allProducts.products);
    const renderList = products.map((product) => {
        const { id, title, image, price, category } = product;
        return (
            <Container className="mt-5" key={id}>
                <Row>
                    <Col lg={3}>
                        <Link to={`/product/${id}`}>
                            <Card >
                                <Card.Img variant="top" src={image} alt={title} />
                                <Card.Body>
                                    <Card.Title>{title}</Card.Title>
                                    <p>${price}</p>
                                    <p>{category}</p>
                                    <Button variant="primary">Add to Cart</Button>
                                </Card.Body>
                            </Card>
                        </Link>
                    </Col>
                </Row>
            </Container>
        );
    });
    return <>{renderList}</>;
};

export default ProductComponent;
