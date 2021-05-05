import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom' // useLocation hook help us catch route on request (current page URL) to use this one componet on both Authorization & Registration page
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts'

function Auth() {
    const location = useLocation() // create variable to get pathname (page URL)
    const isLogin = location.pathname === LOGIN_ROUTE // isLogin will be true, if page URL = /login
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
                    />
                       <Form.Control 
                    className="mt-3"
                    placeholder="Enter your Password"
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
                    <Button variant={"outline-success"}>
                        {isLogin ?  "Log in" : "Register"}
                    </Button>
                    </Row>
                    
                    
                </Form>
            </Card>
        </Container>
    )
}

export default Auth
