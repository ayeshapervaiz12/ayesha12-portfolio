import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
import './contact.css'
const Contactus = () => {

    const [person, setPerson] = useState({
        name: "",
        Email: "",
        Message: "",
        // password: "",
    });

    const changeName = (e) => {
        setPerson({
            ...person,
            name: e.target.value,
        });
    };
    const changeEmail = (e) => {
        setPerson({
            ...person,
            Email: e.target.value,
        });


    };
    const changeMessage = (e) => {
        setPerson({
            ...person,
            Message: e.target.value,
        });


    };
    // const changepassword = (e) => {
    //     setPerson({
    //         ...person,
    //         password: e.target.value,
    //     });
    // };
    const submitHandler = (e) => {
        e.preventDefault();
        const register = {
            name: person.name,
            Email: person.Email,
            Message: person.Message,
            // password: person.password
        };
        axios.post('http://localhost:5000', register).then((response) => {
            console.log(response.data);
        }).catch((err) => {
            console.log(`404 - data could'nt send though following reason ${err}`)
        })
    };


    return (
        <div>
            <div className="contact-page">
                <h2>Get in touch</h2>
                <div className="contact-info">
                    <div className="item">
                        <i class="fa-solid fa-house"></i>
                        <h6>LAHORE,PAKISTAN</h6>
                    </div>
                    <div className="item">
                        <i class="fa-solid fa-phone"></i>
                        <h6> 03176445264</h6>
                    </div>
                    <div className="item">
                        <i class="fa-sharp fa-solid fa-envelope"></i>
                        <h6>ayeshapervaiz580@gmail.com</h6>
                    </div>

                    <div className="item">
                        <i class="fa-solid fa-clock"></i>
                        < h6 >Mon - Fri 8:00 AM to 6:00 PM</h6>
                    </div>
                </div>
                <Form className="contact-form">
                    <Form.Group className="mb-3" controlId="name">
                        <Form.Label>Name</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter Name"
                            name="name"
                            value={person.name}
                            onChange={changeName}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="Enter email"
                            name="Email"
                            value={person.Email}
                            onChange={changeEmail}
                        />


                    </Form.Group>
                    {/* <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Message</Form.Label>
                        <Form.Control
                            type="email"
                            placeholder="your message"
                            name="Email"
                            value={person.Message}
                            onChange={changeMessage}
                        />


                    </Form.Group> */}
                    {/* <Form.Group className="mb-3" controlId="formBasicpassword">
                        <Form.Label>password</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Enter password"
                            name="password"
                            value={person.password}
                            onChange={changepassword}
                        />
                    </Form.Group> */}
                    <textarea className="textarea"
                        placeholder="Your message"
                        type="text"
                        name="Message"
                        value={person.Message}
                        onChange={changeMessage}
                    ></textarea>
                    <Button className="Btn" variant="primary" type="submit" onClick={submitHandler}>
                        Submit
                    </Button>
                </Form>
            </div>
        </div >
    );
};

export default Contactus;
