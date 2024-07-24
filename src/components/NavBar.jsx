import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import { CartWidget } from "./CartWidget"

export const NavBar = () => {
    return (
    <>
    <Navbar bg="primary" data-bs-theme="dark">
        <Container>
        <Navbar.Brand href="#home">Mailin Sweets</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Menu</Nav.Link>
            <Nav.Link href="#features">Nosotros</Nav.Link>
            <Nav.Link href="#pricing">Pedidos</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
    <CartWidget />
    </>
)
}