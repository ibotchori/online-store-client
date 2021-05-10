import React, { useEffect, useState } from 'react'
import { Button, Card, Col, Container, Image, Row } from 'react-bootstrap'
import { useParams } from 'react-router' // get params from URL
import bigStarImage from '../assets/bigStar.png'
import { fetchOneDevice } from '../http/deviceAPI'

export default function DevicePage() {
    const [device, setDevice] = useState({info: []}) // state for device info
    const {id} = useParams() // get id from URL

    useEffect(() => { // receive data on open shop component
      fetchOneDevice(id).then(data => setDevice(data))
    }, [])

    return (
        <Container className="mt-3">
            <Row>
                <Col md={4}>
                    <Image width={300} height={300} src={process.env.REACT_APP_API_URL + device.img} /> {/* receive image from server */}

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
                {device.info.map((info, index) =>
                    <Row key={info.id} style={{ background: index % 2 === 0 ? 'lightgray' : 'transparent', padding: 10 }}>
                        {info.title}: {info.description}
                    </Row>
                )}
            </Row>
        </Container>
    )
}
