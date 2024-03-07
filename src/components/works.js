import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Pagination from 'react-bootstrap/Pagination';

const worksData = [
  {
    id: 1,
    link: '#graynail',
    image: require('../assets/images/graynail.jpg'),
    title: '灰指甲',
  },
  {
    id: 2,
    link: 'https://www.google.com',
    image: require('../assets/images/clubbing.jpg'),
    title: '杵狀指',
  },
  {
    id: 3,
    link: 'https://www.google.com',
    image: require('../assets/images/beaus.jpg'),
    title: '博氏線',
  },
  {
    id: 4,
    link: 'https://www.google.com',
    image: require('../assets/images/blackline.jpg'),
    title: '縱向黑甲症',
  },
  {
    id: 5,
    link: 'https://www.google.com',
    image: require('../assets/images/whitedot8.png'),
    title: '白甲',
  },
]

function AppWorks() {
  return (
    <section id="works" className="block works-block">
      <Container fluid>
        <div className="title-holder">
          <h2>辨識的疾病</h2>
        </div>
        <Row className='portfoliolist'>
          {
            worksData.map(works => {
              return (
                <Col sm={4} key={works.id}>
                  <div className='portfolio-wrapper'>
                    <a href={works.link}>
                      <Image src={works.image}  className='detect-image'/>
                      <div className='label text-center'>
                        <h3 style={{fontSize:'150%'}}>{works.title}</h3>
                      </div>
                    </a>
                  </div>
                </Col>
              );
            })
          }
        </Row>
      </Container>  
    </section>
  );
}

export default AppWorks;