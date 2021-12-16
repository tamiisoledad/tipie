import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    return (
        <div className="form">
            <Form className="formlogin" >
                <Form.Group className="mb-3 text-light" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Introduzca su email" name="email"/>
                </Form.Group>
                <Form.Group className="mb-3 text-light" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Introduzca su contraseña" name="password"  />
                </Form.Group>
                <Form.Group className="mb-3 text-light" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Recordarme" name="remember" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Iniciar sesión
                </Button>
            </Form>

        </div>
    );
}

export default Login;