import { observer } from "mobx-react-lite";
import React, { useContext, useEffect, useState } from "react";
import { Button, Col, Dropdown, Form, Modal, Row } from "react-bootstrap";
import { Context } from "../..";
import { createDevice, fetchBrands, fetchTypes } from "../../http/deviceAPI";


/* this component render on line mode, we need observer function to keep track of state changes */
const CreateDevice = observer(({ show, onHide }) => { // get props from Admin.js

    const { device } = useContext(Context) // get global state (DeviceStore)
    const [info, setInfo] = useState([]) // state for device description
    

    /* States for adding device */
    const [name, setName] = useState('') //state for device name
    const [price, setPrice] = useState(0) //state for device price    
    const [file, setFile] = useState(null) // state for selected file (image)
    

    useEffect(() => {
        fetchTypes().then(data => device.setTypes(data))
        fetchBrands().then(data => device.setBrands(data))
    }, [])



    const addInfo = () => { // function to add info
        setInfo([...info, { title: '', description: '', number: Date.now() }]) // add new array to old array. (number property for uniq id (for key))
    }

    const removeInfo = (number) => { // function to delete info
        setInfo(info.filter(i => i.number !== number))
    }

    const changeInfo = (key, value, number,) => { // function for title & description (Add new option Button)
        setInfo(info.map(i => i.number === number ? {...i, [key]: value} : i))
    }


    const selectFile = e => { // function for selecte file (image)
        setFile(e.target.files[0]) // save selected image to state
    }


    const addDevice = () => { // function to adding device
        const formData = new FormData() // create object with Form Data 

        /* create From Data object with key and value  */
        formData.append('name', name) // 'name' = key, name = value
        formData.append('price', `${price}`)
        formData.append('img', file)
        formData.append('brandId', device.selectedBrand.id)
        formData.append('typeId', device.selectedType.id)
        formData.append('info', JSON.stringify(info)) // traslate (info) array to JSON

        /* send request with Form Data object to server */
        createDevice(formData).then(data => onHide()) // if request is successful, hide modal window
        
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
                        <Dropdown.Toggle>{device.selectedType.name || "Choose type"}</Dropdown.Toggle> {/* If type selected set type to button's name, if not set "choose type" */}
                        <Dropdown.Menu>
                            {device.types.map(type => // map to types Array an get elements from it
                                <Dropdown.Item 
                                    onClick={() => device.setSelectedType(type)} // save selected type to global state (DeviceStore)
                                    key={type.id}>
                                    {type.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown className="mt-3 mb-2">
                        <Dropdown.Toggle>{device.selectedBrand.name || "Choose brand"}</Dropdown.Toggle> {/* If brand selected set brand to button's name, if not set "choose brand"*/}
                        <Dropdown.Menu>
                            {device.brands.map(brand => // map to brands Array an get elements from it
                                <Dropdown.Item 
                                    onClick={() => device.setSelectedBrand(brand)} // save selected brand to global state (DeviceStore)
                                    key={brand.id}>
                                    {brand.name}
                                </Dropdown.Item>
                            )}
                        </Dropdown.Menu>
                    </Dropdown>
                    <Form.Control
                        value={name}
                        onChange={e => setName(e.target.value)} // save inserted name to state
                        className="mt-3"
                        placeholder="Enter device name"
                    />
                    <Form.Control
                        value={price}
                        onChange={e => setPrice(Number(e.target.value))} // save inserted proce to state
                        className="mt-3"
                        placeholder="Enter device price"
                        type="number"
                    />
                    <Form.Control
                        className="mt-3"
                        type="file"
                        onChange={selectFile}
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
                                    value={i.title}  // get value from input
                                    onChange={(e) => changeInfo('title', e.target.value, i.number)}
                                    placeholder="Enter option title "                          
                                />
                            </Col>
                            <Col md={4}>
                                <Form.Control
                                    value={i.description} // get value from input
                                    onChange={(e) => changeInfo('description', e.target.value, i.number)}
                                    placeholder="Enter option description"
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
                <Button variant="outline-success" onClick={addDevice}>Add</Button>
            </Modal.Footer>
        </Modal >
    );
})

export default CreateDevice;
