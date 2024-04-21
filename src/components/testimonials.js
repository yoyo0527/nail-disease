import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function AppTestimonials() {
  return (
    <section className="block blog-block">
      <Container fluid>
        <Row>
          <Col sm={12}>
            <div className='holder'>
              <Card>
                  <Card.Img variant="top" src={require('../assets/images/skillcontent.jpg')} className='disease-image'/>
              </Card>
            </div>
          </Col>
          <hr className='hr-design'/>
          <Col sm={12}>
            <div className='holder'>
              <Card>
                  <Card.Img variant="top" src={require('../assets/images/skillcontent2.jpg')} className='disease-image'/>
              </Card>
            </div>
          </Col>
          <hr className='hr-design'/>
          <Col sm={12}>
            <div className='holder'>
              <Card>
                  <Card.Img variant="top" src={require('../assets/images/skillcontent3.jpg')} className='disease-image'/>
              </Card>
            </div>
          </Col>
          <hr className='hr-design'/>
          <Col sm={12}>
            <div className='holder'>
              <Card>
                  <Card.Img variant="top" src={require('../assets/images/skillcontent4.jpg')} className='disease-image'/>
              </Card>
            </div>
          </Col>
          <hr className='hr-design'/>
          <Col sm={12}>
            <div className='holder'>
              <Card>
                  <Card.Img variant="top" src={require('../assets/images/skillcontent5.jpg')} className='disease-image'/>
              </Card>
            </div>
          </Col>
          <hr className='hr-design'/>
          <Col sm={12}>
            <div className='holder'>
              <Card>
                  <Card.Img variant="top" src={require('../assets/images/skillcontent6.jpg')} className='disease-image'/>
              </Card>
            </div>
          </Col>

        </Row>
      </Container>
    </section>
);
}

export default AppTestimonials;