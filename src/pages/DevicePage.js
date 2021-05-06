import React from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import bigStarImage from '../assets/bigStar.png'

export default function DevicePage() {
    const device = { id: 1, name: "Iphone 12 pro", price: 1200, rating: 5, img: 'https://via.placeholder.com/400X300' }
    const description = [
        { id: 1, title: 'Operation memory', description: '5 gb' },
        { id: 2, title: 'Camera', description: '12 mp' },
        { id: 4, title: 'Front camera', description: '5 mp' },
        { id: 3, title: 'CPU', description: 'Pentium 3' },
        { id: 5, title: 'Battery', description: '4000' },
    ]

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={device.img} />

                </Col>
                <Col md={4}>
                    <Row className="d-flex flex-column align-items-center">
                        <h2>{device.name}</h2>
                        <div
                            className="d-flex justify-content-center align-items-center"
                            style={{ background: `url(${bigStarImage}) no-repeat center center`, width: 240, height: 240, backgroundSize: 'cover', fontSize: 64 }}
                        >
                            {device.rating}
                        </div>
                    </Row>

                </Col>
                <Col md={4}>
                    <Card
                        className="d-flex flex-column justify-content-around align-items-center"
                        style={{ width: 300, height: 300, fontSize: 30, border: '8px solid lightgray' }}

                    >
                        <h3>from: {device.price} GEL</h3>
                        <Button variant={"outline-dark"}>Add to cart</Button>
                    </Card>

                </Col>
            </Row>
            <Row className="d-flex flex-column m-3">
                <h1>Description</h1>
                {description.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}
