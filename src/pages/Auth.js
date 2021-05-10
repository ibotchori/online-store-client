import { observer } from 'mobx-react-lite'
import React, { useContext, useState } from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useHistory, useLocation } from 'react-router-dom' // useLocation hook help us catch route on request (current page URL) to use this one componet on both Authorization & Registration page
import { Context } from '..'
import { login, registration } from '../http/userAPI'
import { LOGIN_ROUTE, REGISTRATION_ROUTE, SHOP_ROUTE } from '../utils/consts'

const Auth = observer(() => { // that component render on line mode, we neen observer to keep track of state changes
    const location = useLocation() // create variable to get pathname (page URL)
    const isLogin = location.pathname === LOGIN_ROUTE // isLogin will be true, if page URL = /login
    const { user } = useContext(Context) // get user from global state (DeviceStore)
    const history = useHistory()


    const [email, setEmail] = useState('') // state for email input
    const [password, setPassword] = useState('') // state for password input

    const click = async () => {
      try {
        let data;
        if (isLogin) { // if is login is true 
            data = await login(email, password) // call request for user login (send email and password from input)
        } else {
            data = await registration(email, password); // call request for user registration (send email and password from input)
        }
        /* after request (user registration or user login) */
        user.setUser(user) // save user information to global state
        user.setIsAuth(true)
        history.push(SHOP_ROUTE) // navigate to shop page
          
      } catch (error) {
          alert(error.response.data.message) // in case error, send error mesage to user
      }

    }

    return (
        <Container 
        className="d-flex justify-content-center align-items-center"
        style={{height: window.innerHeight - 54}}
        >
            <Card style={{width: 600}} className='p-5'>
                <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your Email"
                        value={email}
                        onChange={e => setEmail(e.target.value)} // change email state with input value
                    />
                    <Form.Control
                        className="mt-3"
                        placeholder="Enter your Password"
                        value={password}
                        onChange={e => setPassword(e.target.value)} // change password state with input value
                        type="password"
                    />
                    <Row className="d-flex justify-content-between mt-3 pl-3 pr-3">
                        {isLogin ?
                            <div>
                                Have no Account? <NavLink to={REGISTRATION_ROUTE}>Register!</NavLink>
                            </div>
                            :
                            <div>
                                Have Account? <NavLink to={LOGIN_ROUTE}>Log in!</NavLink>
                            </div>
                        }
                        <Button variant={"outline-success"} onClick={click}>
                            {isLogin ?  "Log in" : "Register"}
                        </Button>
                    </Row>
                </Form>
            </Card>
        </Container>
    )
})

export default Auth
