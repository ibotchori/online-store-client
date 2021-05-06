import React from "react";
import { Button, Form, Modal } from "react-bootstrap";

function CreateType({ show, onHide }) { // get props from Admin.js
    return (
        <Modal
            show={show} // use props
            onHide={onHide} // use props
            size="lg" centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new type
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control placeholder={"Insert type name"} />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success">Add</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CreateType;
