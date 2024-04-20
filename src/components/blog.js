// 辨識的指甲疾病頁面
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';

function AppBlog() {
  return (
    <div>
      {/* 灰指甲 */}
      <section id="graynail" className="block blog-block">
        <Container fluid>
          <div className="title-holder">
            <h2>灰指甲</h2>
          </div>
          <Row>
            <Col sm={6}>
              <div className='holder'>
                <Card>
                    <Card.Img variant="top" src={require('../assets/images/graynailcontent.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card >
                  <Card.Img variant="top" src={require('../assets/images/graynail.jpg')} className='disease-image' />
                </Card>
              </div>
            </Col>            
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card >
                  <Card.Img variant="top" src={require('../assets/images/graynail2.gif')} className='disease-image' />
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card >
                  <Card.Img variant="top" src={require('../assets/images/graynail3.jpg')} className='disease-image' />
                </Card>
              </div>
            </Col>
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card >
                  <Card.Img variant="top" src={require('../assets/images/graynail4.jpg')} className='disease-image' />
                </Card>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

      {/* 杵狀指 */}
      <section id="clubbing" className="block blog-block blogblock-gray">
        <Container fluid>
          <div className="title-holder">
            <h2>杵狀指</h2>
          </div>
          <Row>
            <Col sm={6}>
              <div className='holder' >
                <Card>
                    <Card.Img variant="top" src={require('../assets/images/clubbingcontent.jpg')} className='disease-image' />
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card >
                  <Card.Img variant="top" src={require('../assets/images/clubbing3.webp')} className='disease-image' />
                </Card>
              </div>
            </Col>
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/clubbing2.jpg')} className='disease-image' />
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/clubbing4.png')} className='disease-image' />
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 博氏線 */}
      <section id="beaus" className="block blog-block">
        <Container fluid>
          <div className="title-holder">
            <h2>博氏線</h2>
          </div>
          <Row>
            <Col sm={6}>
              <div className='holder'>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/beauscontent.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder'>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/beaus.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder'>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/beaus2.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 縱向黑甲症 */}
      <section id="blackline" className="block blog-block blogblock-gray">
        <Container fluid>
          <div className="title-holder">
            <h2>縱向黑甲症</h2>
          </div>
          <Row>
            <Col sm={6}>
              <div className='holder' >
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/blacklinecontent.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/blackline.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/blackline2.png')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/blackline3.webp')} className='disease-image'/>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 指甲剝離 */}
      <section id="nailbroken" className="block blog-block nailbroken">
        <Container fluid>
          <div className="title-holder">
            <h2>指甲剝離</h2>
          </div>
          <Row>
            <Col sm={6}>
              <div className='holder' >
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/nailbrokencontent.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/nailbroken.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/nailbroken2.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 白甲 */}
      <section id="whitedot" className="block blog-block blogblock-gray">
        <Container fluid>
          <div className="title-holder">
            <h2>白甲</h2>
          </div>
          <Row>
            <Col sm={6}>
              <div className='holder' >
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/whitedotcontent.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/whitedot.png')} className='disease-image' style={{width:1000}}/>
                </Card>
              </div>
            </Col>
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/whitedot2.jpeg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/whitedot4.jpeg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/whitedot6.png')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/whitedot8.png')} className='disease-image'/>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 健康指甲 */}
      <section id="healthy_nail" className="block blog-block nailbroken">
        <Container fluid>
          <div className="title-holder">
            <h2>健康指甲</h2>
          </div>
          <Row>
            <Col sm={6}>
              <div className='holder' >
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/healthynailcontent.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/healthynail2.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <hr className='hr-design'/>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/healthynail3.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>
            <Col sm={6}>
              <div className='holder' style={{display:'flex', alignItems:'center'}}>
                <Card>
                  <Card.Img variant="top" src={require('../assets/images/healthynail4.jpg')} className='disease-image'/>
                </Card>
              </div>
            </Col>

          </Row>
        </Container>
      </section>

    </div>
  )
}

export default AppBlog;