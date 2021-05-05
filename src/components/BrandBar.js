import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Card, Row } from 'react-bootstrap'
import { Context } from '../index'

const BrandBar = observer(() => {
    const { device } = useContext(Context) // get device from global state (DeviceStore)
    return (
        <Row className="d-flex">
            {device.brands.map(brand => // map to brands Array an get elements from it
                <Card
                    style={{ cursor: 'pointer' }}
                    key={brand.id}
                    className="p-3"
                    onClick={() => device.setSelectedBrand(brand)} // save selected brand on click
                    border={brand.id === device.selectedBrand.id ? 'danger' : 'light'} // set border to selected brand
                >
                    {brand.name}
                </Card>
            )}

        </Row>
    )
})

export default BrandBar
