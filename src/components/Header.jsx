import { Button, Container, Nav, Navbar } from "react-bootstrap";

const Header = () => {
    return (
        <Navbar className="nav-container">
            <Container>
                <Navbar.Brand href="#home">Shequal Jobs</Navbar.Brand>
                <Nav className="justify-content-end">
                    <Button
                        type="button"
                        size="sm"
                        variant="primary"
                        className=""
                    >POST A JOB</Button>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;