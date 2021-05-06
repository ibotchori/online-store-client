import { observer } from 'mobx-react-lite'
import React, { useContext } from 'react'
import { Button, Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink, useHistory } from 'react-router-dom' // useHistory hook we use to navigate admin panel page
import { Context } from '../index'
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from '../utils/consts'

const NavBar = observer(() => { // that component render on line mode, we nee observer to keep track of state changes
    const { user } = useContext(Context) // get user from global state (UserStore)
    const history = useHistory()
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <NavLink style={{ color: 'white' }} to={SHOP_ROUTE}>Buy Device</NavLink>
                {user.isAuth ?
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button
                            variant={"outline-light"}
                            onClick={() => history.push(ADMIN_ROUTE)}
                        >Admin Panel</Button>
                        <Button
                            variant={"outline-light"}
                            className="ml-2"
                            onClick={() => history.push(LOGIN_ROUTE)}
                        >Log out</Button>
                    </Nav>
                    :
                    <Nav className="ml-auto" style={{ color: 'white' }}>
                        <Button variant={"outline-light"} onClick={() => user.setIsAuth(true)}>Authorization</Button> {/* make isAuth true on click */}
                    </Nav>
                }
            </Container>
        </Navbar>
    )
})

export default NavBar
