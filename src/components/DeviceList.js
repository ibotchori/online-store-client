import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Row } from 'react-bootstrap'
import { Context } from '../index'
import DeviceItem from './DeviceItem'

const DeviceList = observer(() => {
    const { device } = useContext(Context) // get device from global state (DeviceStore)
    return (
        <Row className="d-flex">
            {device.devices.map(device =>
                <DeviceItem key={device.id} device={device} /> // send props (Current element) to DeviceItem component 
            )}

        </Row>
    )
})

export default DeviceList
