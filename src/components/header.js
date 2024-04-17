// 導覽列
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function AppHeader() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <div className="brand-wrapper">
          <img className="nail-logo" src={require('../assets/images/handlogo.png')} alt="..." />
          <Navbar.Brand href="/naildisease">Nail Disease</Navbar.Brand>
        </div>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav >
            <Nav.Link href="/naildisease">首頁</Nav.Link>
            <hr className="nav-divider" />
            <Nav.Link href="/naildisease/disease">辨識的疾病</Nav.Link>
            <hr className="nav-divider" />
            <Nav.Link href="/naildisease/skill">運用技術</Nav.Link>
            <hr className="nav-divider" />
            <Nav.Link href="/naildisease/video">觀看影片</Nav.Link>
            <hr className="nav-divider" />
            <Nav.Link href="/naildisease/beforetest">前測</Nav.Link>
            <hr className="nav-divider" />
            <Nav.Link href="/naildisease/aftertest" style={{width:58}}>後測</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppHeader;