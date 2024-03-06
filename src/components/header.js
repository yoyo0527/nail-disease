import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import naillogo from '../assets/images/naillogo.png';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <img className="nail-logo" src={naillogo} alt="..." />
        <Navbar.Brand href="/naildisease">naildisease</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/naildisease">首頁</Nav.Link>
            <Nav.Link href="/naildisease/purpose">目的</Nav.Link>
            <Nav.Link href="/naildisease/disease">辨識的疾病</Nav.Link>
            <Nav.Link href="#works">運用技術</Nav.Link>
            <Nav.Link href="/naildisease/video">觀看影片與測驗</Nav.Link>
            {/* <Nav.Link href="#testimonials">Testimonials</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;