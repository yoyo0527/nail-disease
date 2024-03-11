import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import graynail from '../assets/images/graynail.jpg';

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
                    <Card.Img variant="top" src={require('../assets/images/graynail.jpg')} className='detect-image'/>
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
                    <Card.Img variant="top" src={require('../assets/images/graynail2.gif')} className='detect-image'/>
                    <Card.Body>
                      <Card.Text>
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
                      <Card.Text>
                        <b>灰指甲治療方式​</b>
                      </Card.Text>
                      <Card.Text>
                        灰指甲的主要方式是藥物治療，分為外用跟口服，但通常會同時配合手術「挫甲」、雷射等輔助治療
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
                        孕婦或是肝功能異常者（包括肝炎、脂肪肝或肝硬化）不適合服用，健康的人服藥後需定期回診檢查肝功能，但新一代藥物對肝的影響已經較為輕微。​                    
                      </Card.Text>

                    </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Body>
                      <Card.Text>
                        <b>如何預防灰指甲</b>                
                      </Card.Text>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>指甲出現變形、混濁，儘快去看皮膚科醫師​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>避免手腳泡水、赤腳走濕濕的路​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>手腳不共用同一支指甲剪，並定期消毒​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>穿吸汗的襪子，儘量讓腳部通風​</li>
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
      <section id="clubbing" className="block blog-block">
        <Container fluid>
          <div className="title-holder">
            <h2>杵狀指</h2>
          </div>
          <Row>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Img variant="top" src={require('../assets/images/graynail.jpg')} className='detect-image'/>
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
                    <Card.Img variant="top" src={require('../assets/images/graynail2.gif')} className='detect-image'/>
                    <Card.Body>
                      <Card.Text>
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
                      <Card.Text>
                        <b>灰指甲治療方式​</b>
                      </Card.Text>
                      <Card.Text>
                        灰指甲的主要方式是藥物治療，分為外用跟口服，但通常會同時配合手術「挫甲」、雷射等輔助治療
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
                        孕婦或是肝功能異常者（包括肝炎、脂肪肝或肝硬化）不適合服用，健康的人服藥後需定期回診檢查肝功能，但新一代藥物對肝的影響已經較為輕微。​                    
                      </Card.Text>

                    </Card.Body>
                </Card>
              </div>
            </Col>
            <Col sm={4}>
              <div className='holder'>
                <Card>
                    <Card.Body>
                      <Card.Text>
                        <b>如何預防灰指甲</b>                
                      </Card.Text>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>指甲出現變形、混濁，儘快去看皮膚科醫師​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>避免手腳泡水、赤腳走濕濕的路​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>手腳不共用同一支指甲剪，並定期消毒​</li>
                        </ul>
                      </Card.Text>
                      <hr/>
                      <Card.Text>
                        <ul className="custom-ul">
                          <li>穿吸汗的襪子，儘量讓腳部通風​</li>
                        </ul>
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