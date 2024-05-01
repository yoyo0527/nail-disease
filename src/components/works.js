// 快速跳到內容
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import { useEffect } from 'react';

const worksData = [
  {
    id: 1,
    link: '#graynail',
    image: require('../assets/images/graynail2.gif'),
    title: '灰指甲',
  },
  {
    id: 2,
    link: '#clubbing',
    image: require('../assets/images/clubbing.jpg'),
    title: '杵狀指',
  },
  {
    id: 3,
    link: '#beaus',
    image: require('../assets/images/beaus.jpg'),
    title: '博氏線',
  },
  {
    id: 4,
    link: '#blackline',
    image: require('../assets/images/blackline.jpg'),
    title: '縱向黑甲症',
  },
  {
    id: 5,
    link: '#nailbroken',
    image: require('../assets/images/nailbroken.png'),
    title: '指甲剝離',
  },
  {
    id: 6,
    link: '#whitedot',
    image: require('../assets/images/whitedot8.png'),
    title: '白甲',
  },
  {
    id: 7,
    link: '#healthy_nail',
    image: require('../assets/images/healthynail.jpg'),
    title: '健康指甲',
  },

]

function AppWorks() {
  useEffect(() => {
    // 在頁面載入後檢查 URL 中的 hash，並滾動到對應的位置
    const hash = window.location.hash;
    
    if (hash) {
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 1000);     
    }
  }, []);
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