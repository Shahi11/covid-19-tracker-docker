import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const fetchAPI = (param) => {
    // param is a highlighted word from the user before it clicked the button
    console.log(param);
    return fetch("http://localhost:5000/lsds/covidTally/" + param, {
      headers: {
        "Access-Control-Allow-Origin": "*"
      },
      mode: 'no-cors'
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();
  }

  return (
    <div className="Login">
      <Form onSubmit={handleSubmit}>
        <Form.Group size="lg" controlId="email">
          <Form.Label>Country</Form.Label>
          <Form.Control
            autoFocus
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br></br>
        </Form.Group>
        <Button onClick={() => fetchAPI(email)}>
          Search
        </Button>
      </Form>
    </div>
  );
}