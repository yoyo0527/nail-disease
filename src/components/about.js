// 首頁
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import img1 from '../assets/images/intro.png';
import { useEffect, useState } from 'react';

function AppAbout() {
  // const [result, setResult] = useState('');

  // useEffect(() => {
    // 在組件首次渲染時發送 GET 請求
    // fetch('https://4f31f73d.r3.cpolar.top/')
    //   .then(response => response.json())
    //   .then(data => {
    //     setResult(data.result); // 更新組件狀態，將結果保存下來
    //   })
    //   .catch(error => {
    //     console.error('Error:', error);
    //   });

    // 在組件首次渲染時發送 POST 請求
  //   fetch('https://4f31f73d.r3.cpolar.top/', {
  //     method: 'POST',
  //     headers: {
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify({ key: 'post' }) // 將你要發送的數據轉換為 JSON 格式
  //   })
  //     .then(response => response.json())
  //     .then(data => {
  //       setResult(data.result)
  //     })
  //     .catch(error => {
  //       console.error('Error:', error);
  //     });
  // }, []);  
  return (
    <section id="about" className="block about-block">
      <Container fluid>
        <div className="title-holder">
          <h2>背景</h2>
        </div>
        <Row>
          <Col sm={6}>
            <Image src={img1} style={{borderRadius:'10px'}}/>
          </Col>
          <Col sm={6} style={{display:'flex',alignItems:'center',lineHeight:2}}>
            <p>手腳指甲是人體健康的一個指標，指甲的外觀可以反映出身體健康狀況的一些跡象。然而，許多人可能未能及時察覺或了解指甲變化的​重要性，因此這項應用的開發是為了幫助用戶更容易地識別並了解可能與指甲健康相關的​問題。​</p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default AppAbout;