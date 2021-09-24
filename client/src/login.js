import React, { useState, useEffect } from "react";
import axios from 'axios'
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import _ from "lodash";
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

const fetchallAPI = async () => {
  // param is a highlighted word from the user before it clicked the button 
  const res = await fetch("http://localhost:5000/lsds/covidTally/", {
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

  <div class="header">
  <a href="#default" class="logo">COVID-19 TRACKER</a>
  <div class="header-right">
    <a class="active" href="#home">Home</a>
    <a href="#contact">Contact</a>
    <a href="#about">About</a>
  </div>
</div>
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
      <div className="btn-wrapper">
        <Button onClick={() => fetchAPI(email)}>
          Search
        </Button>
        <Button onClick={() => fetchallAPI()}>
          All Countries
        </Button>
      </div>
      
    </Form>

<div>
  <table className="taglist">
  
    <tbody>
    <tr>
        <th>CODE</th>
        <th>COUNTRY</th>
        <th>CONFIRMED</th>
        <th>CRITICAL</th>
        <th>DEATHS</th>
        <th>RECOVERED</th>
        <th>LASTUPDATE</th>
      </tr>
    {data && _.isArray(data) ? data.map(({newDocument}) => (
      
      <tr>
        <td>{newDocument.code}</td>
        <td>{newDocument.country}</td>
        <td>{newDocument.confirmed}</td>
        <td>{newDocument.critical}</td>
        <td>{newDocument.deaths}</td>
        <td>{newDocument.recovered}</td>
        <td>{newDocument.lastupdate}</td>
      </tr>
  
    )): (data && <tr>
      <td>{data.newDocument.code}</td>
      <td>{data.newDocument.country}</td>
      <td>{data.newDocument.confirmed}</td>
      <td>{data.newDocument.critical}</td>
      <td>{data.newDocument.deaths}</td>
      <td>{data.newDocument.recovered}</td>
      <td>{data.newDocument.lastupdate}</td>
    </tr> )
   }
    </tbody>
  
</table>
</div>

  </div>
);


}