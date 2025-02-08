import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Scene from "./threejs/Scene";
import { Container, Row, Col, Button, Card, Navbar, Nav } from "react-bootstrap";

function App() {
  return (
    <>
      {/* Barra de navegación responsiva con ancho completo */}
      <Navbar bg="dark" variant="dark" expand="lg" className="w-100">
        <Container fluid>
          <Navbar.Brand href="#">🌟 Mi Portafolio</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#">Inicio</Nav.Link>
              <Nav.Link href="#">Proyectos</Nav.Link>
              <Nav.Link href="#">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Contenido principal sin márgenes laterales */}
      <Container fluid className="text-center bg-light min-vh-100 m-0 p-0 w-100">
        {/* Sección de bienvenida */}
        <Row className="mb-4 justify-content-center w-100">
          <Col xs={12}>
            <h1 className="display-4 text-primary">🚀 Bienvenido a Mi Portafolio</h1>
            <p className="lead text-muted">
              Explorando el poder de <strong>React, Bootstrap y Three.js</strong>.
            </p>
          </Col>
        </Row>

        {/* Botón de prueba de Bootstrap */}
        <Row className="mb-4 justify-content-center w-100">
          <Col xs={12}>
            <Button variant="success" size="lg">
              ¡Bootstrap está funcionando! ✅
            </Button>
          </Col>
        </Row>

        {/* Tarjetas de información centradas */}
        <Row className="justify-content-center text-center w-100">
          <Col xs={12} md={6} lg={4} className="mb-3">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>🔥 Proyecto Interactivo</Card.Title>
                <Card.Text>
                  Este portafolio integra tecnologías modernas para una experiencia inmersiva.
                </Card.Text>
                <Button variant="primary">Saber más</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={6} lg={4} className="mb-3">
            <Card className="shadow-lg">
              <Card.Body>
                <Card.Title>🎨 Diseño Responsivo</Card.Title>
                <Card.Text>
                  La estructura de Bootstrap garantiza una excelente apariencia en cualquier dispositivo.
                </Card.Text>
                <Button variant="info">Ver diseño</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Escena 3D con Three.js ocupando todo el ancho */}
        <Row className="justify-content-center w-100">
          <Col xs={12} className="text-center">
            <h2 className="mt-4">🌌 Escena 3D con Three.js</h2>
            <div
              className="w-100"
              style={{
                height: "50vh",
                border: "2px solid #007bff",
                borderRadius: "10px",
                overflow: "hidden",
              }}
            >
              <Scene />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Pie de página con ancho completo */}
      <footer className="text-center py-3 mt-4 bg-dark text-white w-100">
        <p>&copy; 2024 Gustavo Sánchez Rodríguez | Todos los derechos reservados.</p>
      </footer>
    </>
  );
}

export default App;
