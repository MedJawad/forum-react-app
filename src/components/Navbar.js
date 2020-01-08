import React from 'react';
import {
    Navbar , 
    Nav ,
    Form,
    FormControl,
    Button    } from 'react-bootstrap';


class NavBar extends React.Component{


    render(){


        return (
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="#home">ForUs</Navbar.Brand>
                <Form className="col-sm-8 m-auto">
                    <FormControl type="text" placeholder="Search In ForUs" className="mr-sm-2 text-center" />
                </Form>
                <Form inline className="ml-auto">
                <Button variant="outline-light"  className="mr-sm-2">Sign In</Button>
                <Button variant="light">Sign Up</Button>
                </Form>
            </Navbar>
        );
    }
}

export default NavBar;