// 前測頁面
import Container from 'react-bootstrap/Container';
import scorepic from '../assets/images/score.png'
import { useEffect, useState } from 'react';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router-dom';
import { Card, Col, Row } from 'react-bootstrap';


export default function Beforetestpage() {
  const [q, setQ] = useState(0);    
  const [result, setResult] = useState(true);
  const [beforescore,setBeforescore] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    switch (q) {
        case 0:
            setResult({
                'ques': '1-10 非監督式學習的一個例子是什麼？',
                'a': '驗證垃圾郵件的分類',
                'b': '預測股票市場的趨勢',
                'c': '將相似的新聞文章分組',
                'd': '辨識手寫數字的圖像',
            });
            break;
        case 1:
            setResult({
                'ques': '2-10 深度學習中的"深度"是指什麼？',
                'a': '模型的層數',
                'b': '模型的學習速度',
                'c': '模型的複雜性',
                'd': '模型的準確度',
            });
            break;
        case 2:
            setResult({
                'ques': '3-10 機器學習中，模型訓練的目的是什麼？',
                'a': '讓模型能夠擁有最大的參數',
                'b': '讓模型能夠完美地擬合訓練數據',
                'c': '讓模型能夠泛化到新的數據',
                'd': '讓模型能夠記住所有的訓練數據',
            });
            break;
        case 3:
            setResult({
                'ques': '4-10 監督式學習的一個應用是什麼？',
                'a': '預測天氣的變化',
                'b': '識別垃圾郵件',
                'c': '分析市場行為',
                'd': '訓練自動駕駛汽車',
            });
            break;
        case 4:
            setResult({
                'ques': '5-10 強化學習的一個例子是什麼？',
                'a': '通過分析大量影片來學習物體辨識',
                'b': '使用大量圖像數據訓練神經網路',
                'c': '通過與環境的互動來教導機器人走路',
                'd': '學習語言翻譯的模型',
            });
            break;
        case 5:
            setResult({
                'ques': '6-10 半監督式學習的一個應用是什麼？',
                'a': '使用標記和未標記的數據訓練圖像分割模型',
                'b': '利用有限標記的數據和大量未標記的數據進行情感分析',
                'c': '使用監督式和非監督式學習模型進行股票價格預測',
                'd': '使用強化學習模型來訓練自動駕駛系統',
            });
            break;
        case 6:
            setResult({
                'ques': '7-10 機器學習中的監督式學習是指：',
                'a': '模型自行發現模式和特徵',
                'b': '使用帶有標籤的數據進行訓練',
                'c': '模型與環境互動學習',
                'd': '以上皆非',
            });
            break;
        case 7:
            setResult({
                'ques': '8-10 在機器學習中，強化學習強調的是：',
                'a': '模型與環境的互動學習',
                'b': '使用帶有標籤的數據進行訓練',
                'c': '使用帶有標籤的數據進行訓練',
                'd': '以上皆非',
            });
            break;
        case 8:
            setResult({
                'ques': '9-10 機器學習中的非監督式學習是指：',
                'a': '模型自行發現模式和特徵',
                'b': '使用帶有標籤的數據進行訓練',
                'c': '模型與環境互動學習',
                'd': '以上皆非',
            });
            break;
        case 9:
            setResult({
                'ques': '10-10 機器學習中的「深度學習」是指什麼？',
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
                if (option === 'c') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(C)將相似的新聞文章分組', 'error');
                    setQ(q + 1);
                } 
                break;
            case 1:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)模型的層數', 'error');
                    setQ(q + 1);
                } 
                break;
            case 2:
                if (option === 'c') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(C)讓模型能夠泛化到新的數據', 'error');
                    setQ(q + 1);
                } 
                break;
            case 3:
                if (option === 'd') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(D)訓練自動駕駛汽車', 'error');
                    setQ(q + 1);
                } 
                break;
            case 4:
                if (option === 'c') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(C)通過與環境的互動來教導機器人走路', 'error');
                    setQ(q + 1);
                } 
                break;
            case 5:
                if (option === 'b') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(B)利用有限標記的數據和大量未標記的數據進行情感分析', 'error');
                    setQ(q + 1);
                } 
                break;
            case 6:
                if (option === 'b') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(B)使用帶有標籤的數據進行訓練', 'error');
                    setQ(q + 1);
                } 
                break;
            case 7:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)模型與環境的互動學習', 'error');
                    setQ(q + 1);
                } 
                break;
            case 8:
                if (option === 'a') {
                    Swal.fire('Correct', '回答正確', 'success');
                    setQ(q + 1);
                    setBeforescore(beforescore + 1);
                } else {
                    Swal.fire('Mistake', '正確答案為(A)模型自行發現模式和特徵', 'error');
                    setQ(q + 1);
                } 
                break;
            case 9:
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


  return (
    <section id="teams" className="block blog-block">
      <Container fluid>
        <Row>
            <Col sm={12} >
                <div className='holder' >
                    <Card>
                        <div className="title-holder">
                        <h2><b>前測</b></h2>
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

