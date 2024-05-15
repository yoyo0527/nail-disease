import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import React, { useEffect, useRef, useState } from 'react';
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
    const [file, setFile] = useState(null);
    const [progressAmount, startFakeProgress, stopFakeProgress] = useFakeProgress();
    const MySwal = withReactContent(Swal);
    const navigate = useNavigate();
    const [result, setResult] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

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
            const response = await fetch('https://2c30c00d.r24.cpolar.top/upload', {
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

    // const width = 300;
    // const height = 400;
    const cameraRef = useRef(null);
    const handleOpenCamera = () => {
        const videoWidth = cameraRef.current.offsetWidth;
        const videoHeight = 400;

        navigator.mediaDevices
        .getUserMedia({
            video: {
                width: videoWidth,
                height: videoHeight,
                audio: false,
                deviceId: "default",
                facingMode: "user",
            },
        })
        .then((stream) => {
            let video = cameraRef.current;
            video.srcObject = stream;
            video.play();
        })
        .catch((err) => {
            console.error("error:", err);
        });
    };

    const photoRef = useRef(null);
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const handleTakePhoto = () => {
        const target = photoRef.current;
        const ctx = target.getContext("2d");
        const photoWidth = cameraRef.current.offsetWidth;
        const photoHeight = 400;
        target.width = photoWidth ;
        target.height = photoHeight;
        ctx.translate(photoWidth, 0);
        ctx.scale(-1, 1);
        ctx.drawImage(cameraRef.current, 0, 0, photoWidth, photoHeight);
        // 獲取 Canvas 上的圖像數據
        const imageDataURL = target.toDataURL();
        setCapturedPhoto(imageDataURL);
    };

    const handleSavePhoto = () => {
        // 將 capturedPhoto 轉換為 Blob 對象
        const byteCharacters = atob(capturedPhoto.split(',')[1]);
        const byteNumbers = new Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteNumbers[i] = byteCharacters.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        const blob = new Blob([byteArray], { type: 'image/png' });

        // 創建下载連結
        const downloadLink = document.createElement('a');
        downloadLink.href = URL.createObjectURL(blob);
        downloadLink.download = 'nail.png';

        // 模擬下載連結
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);
  return (
    <div>
      {/* 指甲辨識 */}
      <section id="graynail" className="block blog-block">
        <Container fluid>
          <div className="title-holder">
            <h2>辨識體驗</h2>
          </div>
          <Row>
            {windowWidth > 768 && (
                <Col sm={6}>
                <div className='holder'>
                    <Card>
                        <video ref={cameraRef} style={{ transform: "scaleX(-1)" }}></video>
                        <Button onClick={handleOpenCamera}>開啟相機</Button>
                    </Card>
                </div>
                </Col>
            )} 
            {windowWidth > 768 && (           
                <Col sm={6}>
                <div className='holder'>
                    <Card>
                        <canvas ref={photoRef}></canvas>
                        <Button onClick={handleTakePhoto} style={{ marginBottom: '3%' }}>拍照</Button>
                        <Button onClick={handleSavePhoto}>儲存照片</Button>

                    </Card>
                </div>
                </Col>
            )}
            {windowWidth > 768 && (           
                <hr className='hr-design'/>
            )}
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