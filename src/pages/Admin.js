import React, { useState } from 'react'
import { Button, Container } from 'react-bootstrap'
import CreateBrand from '../components/modals/CreateBrand'
import CreateDevice from '../components/modals/CreateDevice'
import CreateType from '../components/modals/CreateType'

function Admin() {
    /* state for modal */
    const [brandVisible, setBrandVisible] = useState(false)
    const [typeVisible, setTypeVisible] = useState(false)
    const [deviceVisible, setDeviceVisible] = useState(false)

    return (
        <Container className="d-flex flex-column">
            <Button
                variant={"outline-dark"}
                className="mt-4 pt-2"
                onClick={() => setTypeVisible(true)} // open modal on click
            >
                Add type
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 pt-2"
                onClick={() => setBrandVisible(true)} // open modal on click
            >
                Add brand
            </Button>
            <Button
                variant={"outline-dark"}
                className="mt-4 pt-2"
                onClick={() => setDeviceVisible(true)} // open modal on click
            >
                Add device
            </Button>
            <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} /> {/* Send state to components */}
            <CreateDevice show={deviceVisible} onHide={() => setDeviceVisible(false)} /> {/* Send state to components */}
            <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} /> {/* Send state to components */}
        </Container >
    )
}

export default Admin
