// 後測頁面
import Container from 'react-bootstrap/Container';
import scorepic from '../assets/images/score.png'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';


export default function Aftertestpage() {
  const [q, setQ] = useState(0);    
  const [result, setResult] = useState(true);
  const [afterscore,setAfterscore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    switch (q) {
        case 0:
            setResult({
                'ques': '1-10 小美在解釋機器學習時提到了哪些學習方式？',
                'a': '監督式學習、非監督式學習、半監督式學習、強化學習',
                'b': '模仿式學習、隨機學習、實驗性學習、模型學習',
                'c': '訓練式學習、規則式學習、探索式學習、評估式學習',
                'd': '觀察式學習、分析式學習、預測式學習、反饋式學習',
            });
            break;
        case 1:
            setResult({
                'ques': '2-10 神經網路中的「層次結構」指的是：',
                'a': '每一層都學習不同層次的抽象特徵',
                'b': '每一層的神經元相互連接',
                'c': '模型自行發現模式和特徵',
                'd': '以上皆非',
            });
            break;
        case 2:
            setResult({
                'ques': '3-10 故事中提到，小美利用機器學習技術成功解決了小帥的指甲疾病問題。這種應用屬於機器學習中的哪一個領域？',
                'a': '影像辨識',
                'b': '語音辨識',
                'c': '自然語言處理',
                'd': '強化學習',
            });
            break;
        case 3:
            setResult({
                'ques': '4-10 深度學習是指神經網路的：',
                'a': '淺層結構',
                'b': '層次結構',
                'c': '非層次結構',
                'd': '以上皆非',
            });
            break;
        case 4:
            setResult({
                'ques': '5-10 小美在故事中解釋了機器學習中的三種學習方式。哪一種學習方式類似於在捕魚中自己發現魚的群聚而不知道每條魚的種類？',
                'a': '監督式學習',
                'b': '非監督式學習',
                'c': '半監督式學習',
                'd': '強化學習',
            });
            break;
        case 5:
            setResult({
                'ques': '6-10 小美解釋了哪種學習方式是像老師告訴學生正確答案？',
                'a': '非監督式學習',
                'b': '強化學習',
                'c': '監督式學習',
                'd': '半監督式學習',
            });
            break;
        case 6:
            setResult({
                'ques': '7-10 機器學習中的「強化學習」強調了什麼？',
                'a': '通過與環境的互動學習',
                'b': '與其他學習方式的區別',
                'c': '模型的層次結構',
                'd': '學習新事物的方法',
            });
            break;
        case 7:
            setResult({
                'ques': '8-10 機器學習模型如何利用資料集進行訓練？',
                'a': '模仿人類思維',
                'b': '學習新事物的方法',
                'c': '分析模式和特徵',
                'd': '觀察和試驗',
            });
            break;
        case 8:
            setResult({
                'ques': '9-10 在神經網路中，什麼結構使得模型能夠學習複雜的模式和特徵？',
                'a': '神經元相互連接',
                'b': '電信號傳遞',
                'c': '網路的深度',
                'd': '模型的層次結構',
            });
            break;
        case 9:
            setResult({
                'ques': '10-10 機器學習中的神經網路受到什麼啟發而來？',
                'a': '電腦編程',
                'b': '生物大腦結構',
                'c': '物理學原理',
                'd': '數學模型',
            });
            break;    
        default:
            break;
    }
  }, [q]);

  function handleAns(option) {
    return () => {
        switch (q) {
            case 0:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)監督式學習、非監督式學習、半監督式學習、強化學習', 'error');
                    setQ(q + 1);
                } 
                break;
            case 1:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)每一層都學習不同層次的抽象特徵', 'error');
                    setQ(q + 1);
                } 
                break;
            case 2:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)影像辨識', 'error');
                    setQ(q + 1);
                } 
                break;
            case 3:
                if (option === 'b') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(B)層次結構', 'error');
                    setQ(q + 1);
                } 
                break;
            case 4:
                if (option === 'b') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(B)非監督式學習', 'error');
                    setQ(q + 1);
                } 
                break;
            case 5:
                if (option === 'c') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(C)監督式學習', 'error');
                    setQ(q + 1);
                } 
                break;
            case 6:
                if (option === 'a') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)通過與環境的互動學習', 'error');
                    setQ(q + 1);
                } 
                break;
            case 7:
                if (option === 'c') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(C)分析模式和特徵', 'error');
                    setQ(q + 1);
                } 
                break;
            case 8:
                if (option === 'a') {
                        Swal.fire('Correct', '回答正確', 'success');
                        setQ(q + 1);
                        setAfterscore(afterscore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)神經元相互連接', 'error');
                    setQ(q + 1);
                } 
                break;
            case 9:
                if (option === 'b') {
                    Swal.fire('Correct', '回答正確', 'success').then(() => {
                        Swal.fire({
                            text: '得分:' + (afterscore+1) + '/10',
                            imageUrl: scorepic,
                        })
                        navigate('/naildisease');
                    });
                } else {
                    Swal.fire('Mistake', '正確答案為(B)生物大腦結構', 'error').then(()=>{
                        Swal.fire({
                            text: '得分:' + afterscore + '/10',
                            imageUrl: scorepic,
                        })
                        navigate('/naildisease');
                    });
                } 
                break;
            default:
                break;
        }
    };
  }

  return (
    <section id="teams" className="block blog-block">
      <Container fluid>
        <Row>
            <Col sm={12} >
                <div className='holder' >
                    <Card>
                        <div className="title-holder">
                        <h2><b>後測</b></h2>
                        </div>
                        <div className='testblock'>
                            <h3>{result.ques}</h3>
                            <a className="btn btn-answer mb-2" onClick={handleAns('a')}>(A) {result.a}</a>
                            <br/>
                            <a className="btn btn-answer mb-2" onClick={handleAns('b')}>(B) {result.b}</a>
                            <br/>
                            <a className="btn btn-answer mb-2" onClick={handleAns('c')}>(C) {result.c}</a>
                            <br/>
                            <a className="btn btn-answer mb-2" onClick={handleAns('d')}>(D) {result.d}</a>
                        </div>
                    </Card>
                </div>
                
            </Col>

        </Row>
      </Container>
    </section>
  );
}

