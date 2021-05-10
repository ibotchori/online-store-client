import React, { useState } from 'react'
import { Button, Form, Modal } from "react-bootstrap";
import { createBrand } from '../../http/deviceAPI';

function CreateBrand({ show, onHide }) { // get props from Admin.js
    const [value, setValue] = useState('') // state for input value

    const addBrand = () => { // function for add brand
        createBrand({name: value}).then(data => { // send request to server to create type
            setValue('') // clean input value afte successfuly response
            onHide() // hide modal after succssfuly response
        })
        
    }
    return (
        <Modal
            show={show} // use props
            onHide={onHide} // use props
            size="lg" centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add new brand
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Control 
                        placeholder={"Insert brand name"} 
                        value={value}
                        onChange={e => setValue(e.target.value)} // change value state with input value
                    />
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="outline-danger" onClick={onHide}>Close</Button>
                <Button variant="outline-success" onClick={addBrand}>Add</Button> {/* run addBrand function on click */}
            </Modal.Footer>
        </Modal>
    )
}

export default CreateBrand
