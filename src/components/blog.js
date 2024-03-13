import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import { Modal } from 'react-bootstrap';

// const blogData = [
//   {
//     id: 1,
//     image: require('../assets/images/graynail.jpg'),
//     title: '正式名稱：',
//     description: '甲癬',
//     title2: '別名：',
//     description2: '臭甲、灰指甲',
//     title3: '別名：',
//     description3: '各種真菌，像是皮癬菌等。免疫力較差的人也可能會因為念珠菌而感染，像是糖尿病人。',
//     title4: '感染部位：',
//     description4: '指甲',
//     link: 'https://www.google.com'
//   },
//   {
//     id: 2,
//     image: require('../assets/images/graynail2.gif'),
//     title: '灰指甲有哪些症狀​',
//     description: '灰指甲是一種由黴菌感染引起的指甲問題。指甲可能呈現混濁、黯淡的顏色，而非僅限於灰色。正常指甲應呈現粉紅肉色，具光澤和彈性。灰指甲可能表現為指甲變硬、變厚、易碎、形變，有時呈現黃褐、咖啡、灰或綠色。感染使指甲受損，變得越來越厚、硬，可能導致疼痛和走路時頂到鞋子。其他症狀包括指甲碎裂、掉屑，指甲增厚、粗糙，以及指甲變形和甲床分離。​',
//     link: 'https://www.facebook.com'
//   },
//   {
//     id: 3,
//     image: require('../assets/images/blog3.jpg'),
//     time: '07 Nov 2016',
//     title: 'Beautiful Day',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
//     link: 'https://www.twitter.com'
//   }
// ]

function AppBlog() {
  const [showModal,setShowModal] = useState(false);
  const handleShowModal = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };
  return (
    <div>
      {/* 灰指甲 */}
      <section id="graynail" className="block blog-block">
        <Container fluid>
          <div className="title-holder">
            <h2>灰指甲</h2>
          </div>
          <Row>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Img variant="top" src={require('../assets/images/graynail.jpg')} className='disease-image'/>
                    <Card.Body>
                      <Card.Text>
                        <b>正式名稱：</b>甲癬
                      </Card.Text>
                      <Card.Text>
                        <b>別名：</b>臭甲、灰指甲
                      </Card.Text>
                      <Card.Text>
                        <b>成因：</b>各種真菌，像是皮癬菌等。免疫力較差的人也可能會因為念珠菌而感染，像是糖尿病人。
                      </Card.Text>
                      <Card.Text>
                        <b>感染部位：</b>指甲​
                      </Card.Text>
                    </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Img variant="top" src={require('../assets/images/graynail2.gif')} className='disease-image'/>
                    <Card.Body>
                      <Card.Text style={{fontSize:30}}>
                        <b>灰指甲有哪些症狀​</b>
                      </Card.Text>
                      <Card.Text>
                        黴菌感染引起的指甲問題，導致指甲顏色混濁、呈現黯淡，有時呈現黃褐、咖啡、灰或綠色。其他症狀包括指甲碎裂、脫落，增厚、粗糙，以及形狀變化和甲床分離。
                      </Card.Text>
                    </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Body>
                      <Card.Text style={{fontSize:30}}>
                        <b>灰指甲治療方式​</b>
                      </Card.Text>
                      <Card.Text>
                        灰指甲的<b>主要方式是藥物治療</b>，分為外用跟口服，但通常會<b>同時配合手術「挫甲」、雷射等輔助治療</b>
                      </Card.Text>
                      <Card.Text>
                        <b>外用藥</b>
                      </Card.Text>
                      <Card.Text>
                        常用藥物：水楊酸及抗黴菌藥物。
                      </Card.Text>
                      <Card.Text>
                        <b>口服藥​</b>
                      </Card.Text>
                      <Card.Text>
                        常用藥物：抗黴菌藥物。
                      </Card.Text>
                      <Card.Text style={{color:'red'}}>
                        <b>禁忌：</b>                
                      </Card.Text>
                      <Card.Text>
                        <b>孕婦或是肝功能異常者（包括肝炎、脂肪肝或肝硬化）不適合服用</b>，健康的人服藥後需定期回診檢查肝功能，但新一代藥物對肝的影響已經較為輕微。​                    
                      </Card.Text>

                    </Card.Body>
                </Card>
              </div>
            </Col>
            <hr/>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Body>
                      <Card.Text style={{fontSize:30}}>
                        <b>如何預防灰指甲</b>                
                      </Card.Text>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>指甲<b>出現變形、混濁，儘快去看皮膚科醫師</b>​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li><b>避免手腳泡水</b>、赤腳走濕濕的路​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>手腳<b>不共用同一支指甲剪</b>，並定期消毒​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>穿吸汗的襪子，儘量<b>讓腳部通風​</b></li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 杵狀指 */}
      <section id="clubbing" className="block blog-block clubbing">
        <Container fluid>
          <div className="title-holder">
            <h2>杵狀指</h2>
          </div>
          <Row>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Img variant="top" src={require('../assets/images/clubbing.jpg')} className='disease-image'/>
                    <Card.Body>
                      <Card.Text>
                        杵狀指會讓<b>末端指節鬆軟腫大，甲面也明顯下彎</b>，隨後<b>指甲和甲床之間的正常角度消失</b>。它不只會發生於手指末端，腳趾末端也同樣可能有此症狀。​
                      </Card.Text>
                      <Card.Text>
                        杵狀指通常雙側發生，雙手指或腳趾都會有此症狀。不過也有單側發生的可能性。​
                      </Card.Text>
                    </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Img variant="top" src={require('../assets/images/clubbing2.jpg')} className='disease-image'/>
                    <Card.Body>
                      <Card.Text style={{fontSize:30}}>
                        <b>杵狀指的原因</b>
                      </Card.Text>
                      <Card.Text>
                        目前主要是認為當心肺相關疾病導致身體<b style={{color:'red'}}>缺氧</b>時，會刺激患者的血液中<b>血管內皮生長因子增加</b>。血管內皮生長因子是一種血小板衍生因子，會誘使指甲處發生<b>血管增生、水腫、纖維母細胞或成骨細胞增生</b>並進一步造成杵狀指。​                      
                      </Card.Text>
                      <Card.Text>
                        此外，會造成血小板慢性增加的發炎性腸道疾病也會因為生長因子增加造成杵狀指發生。​                      
                      </Card.Text>
                    </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Body>
                      <div onClick={handleShowModal}><Card.Img variant="top" src={require('../assets/images/clubbing3.webp')} className='disease-image'/></div>
                    </Card.Body>
                </Card>
              </div>
              <Modal show={showModal} onHide={handleCloseModal} centered>
                <Modal.Body>
                    <img src={require('../assets/images/clubbing3.webp')} alt="Clubbing" className='modal-image' />
                </Modal.Body>
              </Modal>
            </Col>
            <hr/>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Body>
                      <Card.Text style={{fontSize:30}}>
                        <b>杵狀指如何治療</b>                
                      </Card.Text>
                      <Card.Text>
                        多由<b>外部因素以及內部疾病</b>所引起，所以在進行治療的時候應<b>對原發病進行治療</b>。當原發病得到治療控制後，杵狀指的症狀也會得到緩解​。
                      </Card.Text>

                    </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Body>
                      <Card.Text style={{fontSize:30}}>
                        <b>杵狀指看哪一科？</b>                
                      </Card.Text>
                      <Card.Text>
                        若懷疑發生杵狀指而<b style={{color:'red'}}>不知道要掛哪一科，可以先至家醫科就醫</b>，由家醫科先做心肺評估。
                      </Card.Text>
                      <Card.Text>
                        若發現自己有杵狀指且<b style={{color:'red'}}>容易喘、會聽到喘鳴聲、吸氣吸不飽等狀況</b>，則可直接尋求<b style={{color:'red'}}>胸腔科</b>協助。​
                      </Card.Text>
                      <Card.Text>
                        如果<b style={{color:'red'}}>肺功能評估沒問題，病人本身也沒有抽菸</b>，可能是<b style={{color:'red'}}>心衰竭或是心臟結構異常</b>，需至<b style={{color:'red'}}>心臟科</b>就醫。​​
                      </Card.Text>
                      <Card.Text>
                        如果有<b style={{color:'red'}}>長期腹瀉腹痛等問題</b>，也必須尋求<b style={{color:'red'}}>腸胃內科</b>醫師協助排除發炎性腸道疾病。​                      
                      </Card.Text>

                    </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Body>
                      <Card.Text style={{fontSize:30}}>
                        <b>杵狀指是肺癌前兆</b>                
                      </Card.Text>
                      <Card.Text>
                        發現自己有杵狀指，先不必驚慌，病人<b>可能本身原本就有肺部功能問題</b>而導致杵狀指發生。有杵狀指也可能是<b>老菸槍、嚴重慢性肺阻塞</b>的病人或者罹患其他心臟相關疾病、腸胃道功能有狀況等。並不是肺癌才會發現杵狀指。
                      </Card.Text>

                    </Card.Body>
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