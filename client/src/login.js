import React, { useState, useEffect } from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./login.css";

export default function Login() {
const [email, setEmail] = useState("");
const [data, setData] = useState(null);
const [password, setPassword] = useState("");

const fetchAPI = async (param) => {
  // param is a highlighted word from the user before it clicked the button
  console.log(param);
  const res = await fetch("http://localhost:5000/lsds/covidTally/" + param, {
    method: 'GET',
    mode: 'cors'
  }).then(res => res.json()).then(dat => setData(dat))
  .catch(err => console.log("My error, ", err));
}

useEffect(() => {
  console.log("Data");
  console.log(data);
}, [data]);

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

<div>
  <table className="taglist">
    <tbody>
    {data && data.map(({newDocument}) => (
      <div>
      <tr>
        <th>CODE</th>
        <th>COUNTRY</th>
        <th>CONFIRMED</th>
        <th>CRITICAL</th>
        <th>DEATHS</th>
        <th>RECOVERED</th>
        <th>LASTUPDATE</th>
      </tr>
      
      <tr>
        <td>{newDocument.code}</td>
        <td>{newDocument.country}</td>
        <td>{newDocument.confirmed}</td>
        <td>{newDocument.critical}</td>
        <td>{newDocument.deaths}</td>
        <td>{newDocument.recovered}</td>
        <td>{newDocument.lastupdate}</td>
      </tr>
    </div>
    ))}
    </tbody>
  
</table>
</div>

  </div>
);


}