import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Card from 'react-bootstrap/Card';
import scorepic from '../assets/images/score.png'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';

// const teamsData = [
//   {
//     id: 1,
//     image: require('../assets/images/team1.jpg'),
//     fbLink: 'https://www.facebook.com',
//     twitterLink: 'https://www.twitter.com',
//     linkedinLink: 'https://www.linkedin.com',
//     name: 'Gabriel Hart',
//     designation: 'CEO',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
//   },
//   {
//     id: 2,
//     image: require('../assets/images/team2.jpg'),
//     fbLink: 'https://www.facebook.com',
//     twitterLink: 'https://www.twitter.com',
//     linkedinLink: 'https://www.linkedin.com',
//     name: 'David Antony',
//     designation: 'Manager',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
//   },
//   {
//     id: 3,
//     image: require('../assets/images/team3.jpg'),
//     fbLink: 'https://www.facebook.com',
//     twitterLink: 'https://www.twitter.com',
//     linkedinLink: 'https://www.linkedin.com',
//     name: 'Nicholas Perry',
//     designation: 'UX Designer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
//   },
//   {
//     id: 4,
//     image: require('../assets/images/team4.jpg'),
//     fbLink: 'https://www.facebook.com',
//     twitterLink: 'https://www.twitter.com',
//     linkedinLink: 'https://www.linkedin.com',
//     name: 'Sarah Wills',
//     designation: 'Developer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
//   },
//   {
//     id: 5,
//     image: require('../assets/images/team5.jpg'),
//     fbLink: 'https://www.facebook.com',
//     twitterLink: 'https://www.twitter.com',
//     linkedinLink: 'https://www.linkedin.com',
//     name: 'Sophia Pitt',
//     designation: 'Developer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
//   },
//   {
//     id: 6,
//     image: require('../assets/images/team6.jpg'),
//     fbLink: 'https://www.facebook.com',
//     twitterLink: 'https://www.twitter.com',
//     linkedinLink: 'https://www.linkedin.com',
//     name: 'Taylor Lopez',
//     designation: 'Developer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
//   },
//   {
//     id: 7,
//     image: require('../assets/images/team7.jpg'),
//     fbLink: 'https://www.facebook.com',
//     twitterLink: 'https://www.twitter.com',
//     linkedinLink: 'https://www.linkedin.com',
//     name: 'Ryan Giggs',
//     designation: 'Content Writer',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
//   },
//   {
//     id: 8,
//     image: require('../assets/images/team8.jpg'),
//     fbLink: 'https://www.facebook.com',
//     twitterLink: 'https://www.twitter.com',
//     linkedinLink: 'https://www.linkedin.com',
//     name: 'David Smith',
//     designation: 'SEO Expert',
//     description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui facilis, totam maiores.'
//   }
// ]
const blogData = [
  {
    id: 1,
    image: require('../assets/images/blog1.jpg'),
    time: '15 Nov 2016',
    title: 'Coffee Lovers',
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
    link: 'https://www.google.com'
  },
  // {
  //   id: 2,
  //   image: require('../assets/images/blog2.jpg'),
  //   time: '10 Nov 2016',
  //   title: 'Tips for UI Design',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
  //   link: 'https://www.facebook.com'
  // },
  // {
  //   id: 3,
  //   image: require('../assets/images/blog3.jpg'),
  //   time: '07 Nov 2016',
  //   title: 'Beautiful Day',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt, asperiores eaque quibusdam eum quod cum nesciunt.',
  //   link: 'https://www.twitter.com'
  // }
]

function AppTeams() {
  const [q, setQ] = useState(false);    
  const [result, setResult] = useState(null);
  const [afterscore,setAfterscore] = useState(0);
  const [beforescore,setBeforescore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    switch (q) {
        case 0:
            setResult({
                'ques': '小美在解釋機器學習時提到了哪些學習方式？',
                'a': '監督式學習、非監督式學習、半監督式學習、強化學習',
                'b': '模仿式學習、隨機學習、實驗性學習、模型學習',
                'c': '訓練式學習、規則式學習、探索式學習、評估式學習',
                'd': '觀察式學習、分析式學習、預測式學習、反饋式學習',
            });
            break;
        case 1:
            setResult({
                'ques': '神經網路中的「層次結構」指的是：',
                'a': '每一層都學習不同層次的抽象特徵',
                'b': '每一層的神經元相互連接',
                'c': '模型自行發現模式和特徵',
                'd': '以上皆非',
            });
            break;
        case 2:
            setResult({
                'ques': '故事中提到，小美利用機器學習技術成功解決了小帥的指甲疾病問題。這種應用屬於機器學習中的哪一個領域？',
                'a': '影像辨識',
                'b': '語音辨識',
                'c': '自然語言處理',
                'd': '強化學習',
            });
            break;
        case 3:
            setResult({
                'ques': '深度學習是指神經網路的：',
                'a': '淺層結構',
                'b': '層次結構',
                'c': '非層次結構',
                'd': '以上皆非',
            });
            break;
        case 4:
            setResult({
                'ques': '小美在故事中解釋了機器學習中的三種學習方式。哪一種學習方式類似於在捕魚中自己發現魚的群聚而不知道每條魚的種類？',
                'a': '監督式學習',
                'b': '非監督式學習',
                'c': '半監督式學習',
                'd': '強化學習',
            });
            break;
        case 5:
            setResult({
                'ques': '小美解釋了哪種學習方式是像老師告訴學生正確答案？',
                'a': '非監督式學習',
                'b': '強化學習',
                'c': '監督式學習',
                'd': '半監督式學習',
            });
            break;
        case 6:
            setResult({
                'ques': '機器學習中的「強化學習」強調了什麼？',
                'a': '通過與環境的互動學習',
                'b': '與其他學習方式的區別',
                'c': '模型的層次結構',
                'd': '學習新事物的方法',
            });
            break;
        case 7:
            setResult({
                'ques': '機器學習模型如何利用資料集進行訓練？',
                'a': '模仿人類思維',
                'b': '學習新事物的方法',
                'c': '分析模式和特徵',
                'd': '觀察和試驗',
            });
            break;
        case 8:
            setResult({
                'ques': '在神經網路中，什麼結構使得模型能夠學習複雜的模式和特徵？',
                'a': '神經元相互連接',
                'b': '電信號傳遞',
                'c': '網路的深度',
                'd': '模型的層次結構',
            });
            break;
        case 9:
            setResult({
                'ques': '機器學習中的神經網路受到什麼啟發而來？',
                'a': '電腦編程',
                'b': '生物大腦結構',
                'c': '物理學原理',
                'd': '數學模型',
            });
            break;
        case 10:
            setResult({
                'ques': '非監督式學習的一個例子是什麼？',
                'a': '驗證垃圾郵件的分類',
                'b': '預測股票市場的趨勢',
                'c': '將相似的新聞文章分組',
                'd': '辨識手寫數字的圖像',
            });
            break;
        case 11:
            setResult({
                'ques': '深度學習中的"深度"是指什麼？',
                'a': '模型的層數',
                'b': '模型的學習速度',
                'c': '模型的複雜性',
                'd': '模型的準確度',
            });
            break;
        case 12:
            setResult({
                'ques': '機器學習中，模型訓練的目的是什麼？',
                'a': '讓模型能夠擁有最大的參數',
                'b': '讓模型能夠完美地擬合訓練數據',
                'c': '讓模型能夠泛化到新的數據',
                'd': '讓模型能夠記住所有的訓練數據',
            });
            break;
        case 13:
            setResult({
                'ques': '監督式學習的一個應用是什麼？',
                'a': '預測天氣的變化',
                'b': '識別垃圾郵件',
                'c': '分析市場行為',
                'd': '訓練自動駕駛汽車',
            });
            break;
        case 14:
            setResult({
                'ques': '強化學習的一個例子是什麼？',
                'a': '通過分析大量影片來學習物體辨識',
                'b': '使用大量圖像數據訓練神經網路',
                'c': '通過與環境的互動來教導機器人走路',
                'd': '學習語言翻譯的模型',
            });
            break;
        case 15:
            setResult({
                'ques': '半監督式學習的一個應用是什麼？',
                'a': '使用標記和未標記的數據訓練圖像分割模型',
                'b': '利用有限標記的數據和大量未標記的數據進行情感分析',
                'c': '使用監督式和非監督式學習模型進行股票價格預測',
                'd': '使用強化學習模型來訓練自動駕駛系統',
            });
            break;
        case 16:
            setResult({
                'ques': '機器學習中的監督式學習是指：',
                'a': '模型自行發現模式和特徵',
                'b': '使用帶有標籤的數據進行訓練',
                'c': '模型與環境互動學習',
                'd': '以上皆非',
            });
            break;
        case 17:
            setResult({
                'ques': '在機器學習中，強化學習強調的是：',
                'a': '模型與環境的互動學習',
                'b': '使用帶有標籤的數據進行訓練',
                'c': '使用帶有標籤的數據進行訓練',
                'd': '以上皆非',
            });
            break;
        case 18:
            setResult({
                'ques': '機器學習中的非監督式學習是指：',
                'a': '模型自行發現模式和特徵',
                'b': '使用帶有標籤的數據進行訓練',
                'c': '模型與環境互動學習',
                'd': '以上皆非',
            });
            break;
        case 19:
            setResult({
                'ques': '機器學習中的「深度學習」是指什麼？',
                'a': '模型通過與環境的互動進行學習',
                'b': '模型使用帶有標籤的數據進行訓練',
                'c': '神經網絡的多層結構',
                'd': '模型在沒有任何指導的情況下學習',
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
            case 10:
                if (option === 'c') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(C)將相似的新聞文章分組', 'error');
                    setQ(q + 1);
                } 
                break;
            case 11:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)模型的層數', 'error');
                    setQ(q + 1);
                } 
                break;
            case 12:
                if (option === 'c') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(C)讓模型能夠泛化到新的數據', 'error');
                    setQ(q + 1);
                } 
                break;
            case 13:
                if (option === 'd') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(D)訓練自動駕駛汽車', 'error');
                    setQ(q + 1);
                } 
                break;
            case 14:
                if (option === 'c') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(C)通過與環境的互動來教導機器人走路', 'error');
                    setQ(q + 1);
                } 
                break;
            case 15:
                if (option === 'b') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(B)利用有限標記的數據和大量未標記的數據進行情感分析', 'error');
                    setQ(q + 1);
                } 
                break;
            case 16:
                if (option === 'b') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(B)使用帶有標籤的數據進行訓練', 'error');
                    setQ(q + 1);
                } 
                break;
            case 17:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)模型與環境的互動學習', 'error');
                    setQ(q + 1);
                } 
                break;
            case 18:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)模型自行發現模式和特徵', 'error');
                    setQ(q + 1);
                } 
                break;
            case 19:
                if (option === 'c') {
                    Swal.fire('Correct', '回答正確', 'success').then(() => {
                        Swal.fire({
                            text: '得分:' + (beforescore+1) + '/10',
                            imageUrl: scorepic,
                        })
                        navigate('/naildisease');
                    });
                } else {
                    Swal.fire('Mistake', '正確答案為(C)神經網絡的多層結構', 'error').then(()=>{
                        Swal.fire({
                            text: '得分:' + beforescore + '/10',
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

  function handletest1() {
    setQ(10);
  }

  function handletest2() {
    setQ(0);
  }

  return (
    <section id="teams" className="block teams-block">
      <Container fluid>
        <div className="title-holder">
          <h2>影片演示</h2>
          
        </div>
        <Row>
          <iframe className='video-set' src="https://www.youtube.com/embed/UflwfRh_nZY" allowFullScreen/>
          <hr/>
          <a className="btn btn-primary" onClick={handletest1} style={{width:'12%'}}>前測<i className="fas fa-chevron-right"></i></a>
          <a className="btn btn-success" onClick={handletest2} style={{width:'12%'}}>後測<i className="fas fa-chevron-right"></i></a>
          {result && (
            <div>
              <h3>{result.ques}</h3>
                  <a className="btn btn-answer mb-2" onClick={handleAns('a')}>(A) {result.a}<i className="fas fa-chevron-right"></i></a>
                  <br/>
                  <a className="btn btn-answer mb-2" onClick={handleAns('b')}>(B) {result.b}<i className="fas fa-chevron-right"></i></a>
                  <br/>

                  <a className="btn btn-answer mb-2" onClick={handleAns('c')}>(C) {result.c}<i className="fas fa-chevron-right"></i></a>
                  <br/>

                  <a className="btn btn-answer" onClick={handleAns('d')}>(D) {result.d}<i className="fas fa-chevron-right"></i></a>

                                    
            </div>
          )}          
{/* {
            blogData.map(blog => {
              return (
                <Col sm={4} key={blog.id}>
                  <div className='holder'>
                    <Card>
                      <Card.Img variant="top" src={blog.image} />
                      <Card.Body>
                        <time>{blog.time}</time>
                        <Card.Title>{blog.title}</Card.Title>
                        <Card.Text>
                          {blog.description}
                        </Card.Text>
                        <a href={blog.link} className="btn btn-primary">Read More <i className="fas fa-chevron-right"></i></a>
                      </Card.Body>
                    </Card>
                  </div>
                </Col>
              )
            })
          }
 */}
          {/* {
            teamsData.map(teams => {
              return (
                <Col sm={3} key={teams.id}>
                  <div className='image'>
                    <Image src={teams.image} />
                    <div className='overlay'>
                      <div className='socials'>
                        <ul>
                          <li><a href={teams.fbLink}><i className="fab fa-facebook-f"></i></a></li>
                          <li><a href={teams.twitterLink}><i className="fab fa-twitter"></i></a></li>
                          <li><a href={teams.linkedinLink}><i className="fab fa-linkedin-in"></i></a></li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className='content'>
                    <h3>{teams.name}</h3>
                    <span className='designation'>{teams.designation}</span>
                    <p>{teams.description}</p>
                  </div>
                </Col>
              );
            })
          } */}
        </Row>
      </Container>
    </section>
  );
}

export default AppTeams;