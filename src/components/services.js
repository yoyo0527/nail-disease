// 目的頁面
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const servicesData = [
  {
    id: 1,
    icon: 'fas fa-desktop',
    title: '指甲健康監測',
    description: '可以提供使用者自主監測手腳指甲的變化'
  },
  {
    id: 2,
    icon: 'fas fa-life-ring',
    title: '醫療輔助工具​',
    description: '輔助醫護人員在診斷或監測疾病的時候作為參考'
  },
  {
    id: 3,
    icon: 'fas fa-hand',
    title: '普及指甲健康教育',
    description: '提供用戶關於手腳指甲健康的知識和教育，幫助一般民眾更了解這方面的健康重要性'
  },
]

function AppServices() {
  return (
    <section id="services" className="block services-block">
      <Container fluid>
        <div className="title-holder">
          <h2>目的</h2>
        </div>
        <Row>
          {
            servicesData.map(services => {
              return (
                <Col sm={4} className='holder' key={services.id}>
                  <div className="icon">
                    <i className={services.icon}></i>
                  </div>
                  <h3><b>{services.title}</b></h3>
                  <p style={{lineHeight: 2}}>{services.description}</p>
                </Col>
              );
            })
          }
        </Row>
      </Container>
    </section>
  );
}

export default AppServices;