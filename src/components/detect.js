import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import axios from 'axios';
import React, { useState } from 'react';
import { FileUploader } from 'baseui/file-uploader';
import Swal from 'sweetalert2';
import loading from '../assets/images/loading.gif';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

function useInterval(callback, delay) {
    const savedCallback = React.useRef(() => {});

    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);

    React.useEffect(() => {
        function tick() {
        savedCallback.current();
        }
        if (delay !== null) {
        let id = setInterval(tick, delay);
        return () => clearInterval(id);
        }
    }, [delay]);
}

function useFakeProgress() {
    const [fakeProgress, setFakeProgress] = React.useState(0);
    const [isActive, setIsActive] = React.useState(false);
    
    function stopFakeProgress() {
        setIsActive(false);
        setFakeProgress(0);
    }

    function startFakeProgress() {
        setIsActive(true);
    }

    useInterval(() => {
        if (fakeProgress >= 100) {
        stopFakeProgress();
        } else {
        setFakeProgress(fakeProgress + 100);
        }
    }, isActive ? 500 : null);
    
    // console.log('fakeProgress:', fakeProgress);
    // console.log('isActive:', isActive);
  
    return [fakeProgress, startFakeProgress, stopFakeProgress];
}

export default function Detect() {
    const [image, setImage] = useState(null);
    const [file, setFile] = useState(null);
    const [progressAmount, startFakeProgress, stopFakeProgress] = useFakeProgress();
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const [result, setResult] = useState(null);

    const handleDrop = (acceptedFiles) => {
        if (acceptedFiles && acceptedFiles.length > 0) {
            const successfile = '已上傳圖片:' + acceptedFiles[0].name;
            setFile(acceptedFiles[0]);
            startFakeProgress();
            console.log(successfile);
            setResult(successfile);
        }
    };

    const handleUpload = async () => {
        if (!file) {
            Swal.fire('Mistake', '請先選擇圖片!', 'error');
            return;
        }
        Swal.fire('Correct', '已上傳辨識!', 'success');
        // setLoad(loading);
        // setResult('辨識中...');
        MySwal.fire({
                        text: '辨識中...(辨識完畢將會自動跳轉頁面',
                        imageUrl: loading,
                        showConfirmButton: false,
                    })
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://4f181c81.r26.cpolar.top/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);

            if (data){
                Swal.fire('Correct', '辨識完畢!', 'success');
                if (data.prediction === 'Onychomycosis') {
                    navigate('/naildisease/disease#graynail');
                }else if(data.prediction === 'beau_s') {
                    navigate('/naildisease/disease#beaus');
                }else if(data.prediction === 'black_line') {
                    navigate('/naildisease/disease#blackline');
                }else if(data.prediction === 'clubbing') {
                    navigate('/naildisease/disease#clubbing');
                }else if(data.prediction === 'healthy nail') {
                    navigate('/naildisease/disease#healthy_nail');
                }else if(data.prediction === 'onycholysis') {
                    navigate('/naildisease/disease#nailbroken');
                }else if(data.prediction === 'white spot') {
                    navigate('/naildisease/disease#whitedot');
                }else{
                    Swal.fire('Mistake', '上傳辨識失敗!', 'error');
                }
            }
        } catch (error) {
            console.error('Error uploading file:', error);
            Swal.fire('Mistake', '上傳辨識失敗!', 'error');
            setResult('上傳辨識失敗...');    
        }
    };

    const handleImageSubmit = async () => {
        try {
        // 將 base64 字符串發送到後端 Node.js 伺服器
        await axios.post('YOUR_BACKEND_URL', { image });
        console.log('Image uploaded successfully!');
        } catch (error) {
        console.error('Error uploading image:', error);
        }
    };
  return (
    <div>
      {/* 指甲辨識 */}
      <section id="graynail" className="block blog-block">
        <Container fluid>
          <div className="title-holder">
            <h2>辨識體驗</h2>
          </div>
          <Row style={{ display: 'flex', justifyContent: 'center' }}>
            <Col sm={6}>
              <div className='holder'>
                <Card>
                    <FileUploader
                        onDrop={handleDrop} 
                        onCancel={stopFakeProgress} 
                        progressAmount={progressAmount} 
                        progressMessage={
                            progressAmount
                            ? `Uploading... ${progressAmount}% of 100%`
                            : ''
                            
                        }
                        className='FileUploader'
                    />

                    
                    <h3><center>{result}</center></h3>
                    <Button onClick={handleUpload}>上傳辨識</Button>
                </Card>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}