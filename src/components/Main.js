import React, { useEffect, useState } from "react";
import { useStoreActions } from "easy-peasy";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Pages from "./Pages";
import Page from "./Page";
import Home from "./Home";
import About from "./About";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function Main() {
  const loadPages = useStoreActions((actions) => actions.pages.loadPages);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    loadPages();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Router>
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="/">Best Practices</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/content">Content</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Button onClick={() => handleShow()} variant="outline-success">
              Login
            </Button>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/content">
            <Pages />
          </Route>
          <Route path="/topic/:slug">
            <Page />
          </Route>
        </Switch>
      </Router>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Sign in to continue</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Row>
              <Col className="xs={2}">Email</Col>
              <Col>
                <input name="email" type="text" />
              </Col>
            </Row>
            <Row>
              <Col className="xs={2}">Password</Col>
              <Col>
                <input name="password" type="password" />
              </Col>
            </Row>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Sign in
          </Button>
          <Button variant="primary">Cancel</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
