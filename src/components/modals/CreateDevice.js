import React, { useContext, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";

function CreateDevice({ show, onHide }) { // get props from Admin.js

    const { device } = useContext(Context) // get global state (DeviceStore)
    const [info, setInfo] = useState([]) // state for device description

    const addInfo = () => { // function to add info
        setInfo([...info, { title: '', description: '', number: Date.now() }]) // add new array to old array. (number property for uniq id (for key))
    }

    const removeInfo = (number) => { // function to delete info
        setInfo(info.filter(i => i.number !== number))
    }


    return (
        <Modal
            show={show} // use props
            onHide={onHide} // use props
            size="lg" centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add device
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Dropdown className="mt-3 mb-2">
                        <Dropdown.Toggle>Choose type</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.types.map(type => // map to types Array an get elements from it
                                <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3 mb-2">
                        <Dropdown.Toggle>Choose brand</Dropdown.Toggle>
                        <Dropdown.Menu>
                            {device.brands.map(brand => // map to brands Array an get elements from it
                                <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        className="mt-3"
                        placeholder="Insert device name"
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Insert device price"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                    />
                    <hr />
                    <Button
                        variant={'outline-dark'}
                        onClick={addInfo}
                    >
                        Add new option
                    </Button>
                    {info.map(i =>
                        <Row className="mt-4" key={i.number}>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Enter option "
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    placeholder="Enter description"
                                />
                            </Col>
                            <Col md={4}>
                                <Button
                                    onClick={() => removeInfo(i.number)} // remove info on click
                                    variant={'outline-danger'}
                                >
                                    Delete
                                </Button>
                            </Col>



                        </Row>
                    )}
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success">Add</Button>
            </Modal.Footer>
        </Modal >
    );
}

export default CreateDevice;
