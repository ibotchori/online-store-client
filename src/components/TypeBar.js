import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { ListGroup } from 'react-bootstrap'
import { Context } from '../index'


// // that component render on line mode, we need observer function to keep track of state changes
const TypeBar = observer(() => {
    const { device } = useContext(Context) // get device from global state (DeviceStore)
    return (
        <ListGroup>
            {device.types.map(type => // map to types Array an get elements from it
                <ListGroup.Item
                    style={{ cursor: 'pointer' }}
                    active={type.id === device.selectedType.id} // set active class to selected type
                    onClick={() => device.setSelectedType(type)} // save selected type on click
                    key={type.id}
                >
                    {type.name}
                </ListGroup.Item>
            )}

        </ListGroup>
    )
})

export default TypeBar
