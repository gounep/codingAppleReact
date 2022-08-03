import { useState } from "react";
import { Button, Navbar, Container, Nav } from "react-bootstrap";

import "./App.css";
// import backgroundImg from "./img/1444545727149_space-2.jpg";
import data from "./data";

function App() {
  let [shoes] = useState(data);

  return (
    <div className="App">
      <Navbar bg="secondary" variant="dark" className="navbar">
        <Container>
          <Navbar.Brand href="#home">React Shop</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">JSX</Nav.Link>
            <Nav.Link href="#features">UseState</Nav.Link>
            <Nav.Link href="#pricing">Redux</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div
        className="main-bg"
        // style={{ backgroundImage: "url(" + backgroundImg + ")" }}
      ></div>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes1.jpg"
              width="80%"
            />
            <h4>{shoes[0].title}</h4>
            <p>{shoes[0].price}</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes2.jpg"
              width="80%"
            />
            <h4>{shoes[1].title}</h4>
            <p>{shoes[1].price}</p>
          </div>
          <div className="col-md-4">
            <img
              src="https://codingapple1.github.io/shop/shoes3.jpg"
              width="80%"
            />
            <h4>{shoes[2].title}</h4>
            <p>{shoes[2].price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
