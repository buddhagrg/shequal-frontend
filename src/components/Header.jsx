import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom"

const Header = () => {
    return (
        <Navbar className="nav-container">
            <Container>
                <Navbar.Brand>
                    <Link to={"/"}>Shequal Jobs</Link>
                </Navbar.Brand>
                <Nav className="justify-content-end">
                    <Link to={"/postjob"}>
                        <Button
                            type="button"
                            size="sm"
                            variant="primary"
                            className="post-job-btn"
                        >POST A JOB</Button>
                    </Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default Header;