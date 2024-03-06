import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import ProgressBar from 'react-bootstrap/ProgressBar';
import img1 from '../assets/images/intro.png';

function AppAbout() {
  const html = 80;
  const responsive = 95;
  const photoshop = 60;

  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2><b>背景</b></h2>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} />
          </Col>
          <Col sm={6}>
            <p>手腳指甲是人體健康的一個指標，指甲的外觀可以反映出身體健康狀況的一些跡象。然而，許多人可能未能及時察覺或了解指甲變化的​重要性，因此這項應用的開發是為了幫助用戶更容易地識別並了解可能與指甲健康相關的​問題。​</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;