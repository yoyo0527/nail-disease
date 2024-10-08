import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { Button } from 'react-bootstrap';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { FileUploader } from 'baseui/file-uploader';
import Swal from 'sweetalert2';
import loading from '../assets/images/loading.gif';
import withReactContent from 'sweetalert2-react-content';
import { GoogleMap, LoadScript, Marker , InfoWindow } from '@react-google-maps/api';
import getCroppedImg from './cropImage'; 
import Cropper from 'react-easy-crop';

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

export default function Detect(props) {
    const [file, setFile] = useState(null);
    const [progressAmount, startFakeProgress, stopFakeProgress] = useFakeProgress();
    const MySwal = withReactContent(Swal);
    const [result, setResult] = useState(null);
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    const [advice, setAdvice] = useState(null);
    const [detectresult, setDetectresult] = useState(null);
    const [clinics, setClinics] = useState([]);
    const [latitude, setLatitude] = useState(null);
    const [longitude, setLongitude] = useState(null);
    const [clinicButton, setClinicButton] = useState(false);
    const [activeMarker, setActiveMarker] = useState(null);

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
        MySwal.fire({
                        text: '辨識中...(辨識完畢將會自動關閉',
                        imageUrl: loading,
                        showConfirmButton: false,
                    })
        setDetectresult('等待中...');
        const formData = new FormData();
        formData.append('file', file);

        try {
            const response = await fetch('https://14a58ab3.r28.cpolar.top/upload', {
            // const response = await fetch('https://e7f6460.r26.cpolar.top/upload', {
                method: 'POST',
                body: formData,
            });
            const data = await response.json();
            console.log(data);
            setAdvice('等待中....');
            if (data){
                Swal.fire('Correct', '辨識完畢!', 'success');
                const uploadtogpt = async (question) => {
                    const response = await fetch('https://abf03a2.r28.cpolar.top/ask', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ question: question })
                    });
                    const data = await response.json();
                    setAdvice(data.response);
                    setClinicButton(true);
                };
                if (data.prediction === 'Onychomycosis') {
                    uploadtogpt('甲癬');
                    setDetectresult('甲癬');
                }else if(data.prediction === 'beau_s') {
                    uploadtogpt('博氏線');
                    setDetectresult('博氏線');

                }else if(data.prediction === 'black_line') {
                    uploadtogpt('縱向黑線');
                    setDetectresult('縱向黑線');

                }
                // else if(data.prediction === 'clubbing') {
                //     uploadtogpt('杵狀指');
                // }
                else if(data.prediction === 'healthy nail') {
                    uploadtogpt('健康手指');
                    setDetectresult('健康手指');

                }else if(data.prediction === 'onycholysis') {
                    uploadtogpt('甲剝離症）');
                    setDetectresult('甲剝離症');

                }else if(data.prediction === 'white spot') {
                    uploadtogpt('白甲');
                    setDetectresult('白甲');
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

    const cameraRef = useRef(null);
    const handleOpenCamera = () => {
        navigator.mediaDevices.getUserMedia({ video: true }).then((stream) => {
            let video = cameraRef.current;
            video.srcObject = stream;
            video.play();
        });
    };

    const photoRef = useRef(null);
    const [croppedAreaPixels, setCroppedAreaPixels] = useState(null); 
    const [capturedPhoto, setCapturedPhoto] = useState(null);
    const [showCropper, setShowCropper] = useState(false);
    const [crop, setCrop] = useState({ x: 0, y: 0 });
    const [zoom, setZoom] = useState(1);
    const [cropperSize, setCropperSize] = useState({ width: 0, height: 0 });

    const handleTakePhoto = () => {
        const video = cameraRef.current;
        const canvas = photoRef.current;
        const ctx = canvas.getContext('2d');
        canvas.width = video.videoWidth;
        canvas.height = video.videoHeight;
        ctx.drawImage(video, 0, 0, canvas.width, canvas.height);
        setCapturedPhoto(canvas.toDataURL('image/png'));
        setShowCropper(true); 
        setCropperSize({ width: canvas.width, height: canvas.height });
    };

    const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
        setCroppedAreaPixels(croppedAreaPixels);
    }, []);

    const handleCropSave = useCallback(async () => {
        try {
            const croppedImg = await getCroppedImg(capturedPhoto, croppedAreaPixels);

            // 將 Base64 字符串轉換為 Blob
            const response = await fetch(croppedImg);
            const blob = await response.blob(); // 直接獲取 Blob
    
            const formData = new FormData();
            formData.append('file', blob, 'cropped.png'); 
        
            MySwal.fire({
                text: '辨識中...(辨識完畢將會自動關閉',
                imageUrl: loading,
                showConfirmButton: false,
            });

            const uploadResponse  = await fetch('https://14a58ab3.r28.cpolar.top/upload', {
            // const response = await fetch('https://e7f6460.r26.cpolar.top/upload', {
                method: 'POST',
                body: formData,
            });

            setDetectresult('等待中...');
            const data = await uploadResponse.json();
            console.log(data);
            setAdvice('等待中....');
            if (data){
                Swal.fire('Correct', '辨識完畢!', 'success');
                const uploadtogpt = async (question) => {
                    const response = await fetch('https://abf03a2.r28.cpolar.top/ask', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({ question: question })
                    });
                    const data = await response.json();
                    setAdvice(data.response);
                    setClinicButton(true);
                };
                if (data.prediction === 'Onychomycosis') {
                    uploadtogpt('甲癬');
                    setDetectresult('甲癬');
                }else if(data.prediction === 'beau_s') {
                    uploadtogpt('博氏線');
                    setDetectresult('博氏線');

                }else if(data.prediction === 'black_line') {
                    uploadtogpt('縱向黑線');
                    setDetectresult('縱向黑線');

                }
                // else if(data.prediction === 'clubbing') {
                //     uploadtogpt('杵狀指');
                // }
                else if(data.prediction === 'healthy nail') {
                    uploadtogpt('健康手指');
                    setDetectresult('健康手指');

                }else if(data.prediction === 'onycholysis') {
                    uploadtogpt('甲剝離症）');
                    setDetectresult('甲剝離症');

                }else if(data.prediction === 'white spot') {
                    uploadtogpt('白甲');
                    setDetectresult('白甲');
                }else{
                    Swal.fire('Mistake', '上傳辨識失敗!', 'error');
                }
            }
        } catch (e) {
            console.error(e);
        }
    }, [croppedAreaPixels, capturedPhoto]);


    useEffect(() => {
        const getLocation = () => {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(
                    (position) => {
                        const lat = position.coords.latitude;
                        const lng = position.coords.longitude;
                        setLatitude(lat);
                        setLongitude(lng);
                        console.log(`獲取位置成功: 緯度 ${lat}, 經度 ${lng}`);
                    },
                    (error) => {
                        console.error('無法獲取位置:', error.message);
                        // 在此可以根據錯誤類型顯示不同的提示
                        switch (error.code) {
                            case error.PERMISSION_DENIED:
                                alert("使用者拒絕了地理位置請求。");
                                break;
                            case error.POSITION_UNAVAILABLE:
                                alert("地理位置不可用。");
                                break;
                            case error.TIMEOUT:
                                alert("請求地理位置超時。");
                                break;
                            case error.UNKNOWN_ERROR:
                                alert("發生未知錯誤。");
                                break;
                        }
                    }
                );
            } else {
                alert('this browser no allowed for gps');
            }
        };
        getLocation();
    }, []);

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };
        
        window.addEventListener('resize', handleResize);
    
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []); 

    const getNearbyClinics = async () => {
        if (!latitude || !longitude) {
            alert('尚未取得用戶位置請重試');
            return;
        }
        try {
            const response = await fetch('https://7c89bd64.r28.cpolar.top/get_nearby_clinics', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ latitude, longitude }),
            });
            const data = await response.json();
            if (data.status === 'success') {
                setClinics(data.clinics);
                console.log('nearby clinics:',data.clinics);
            } else {
                alert('無法取得附近診所資訊');
            }
        } catch (error) {
            console.error('Error fetching nearby clinics:', error);
        }
    };

    const mapContainerStyle = {
        height: '700px',
        width: '100%',
    };

    const [mapCenter, setMapCenter] = useState(null);
    useEffect(() => {
        if (latitude && longitude) {
            setMapCenter({ lat: latitude, lng: longitude });
        }
    }, [latitude, longitude]);

    // 處理 Marker 點擊事件
    const handleMarkerClick = (clinic) => {
        setActiveMarker(clinic);
        setMapCenter({
            lat: clinic.geometry.location.lat,
            lng: clinic.geometry.location.lng,
        });
    }    

    // 關閉 InfoWindow 的處理
    const handleInfoWindowClose = () => {
        setActiveMarker(null);
    };

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
                                        <video ref={cameraRef} style={{ transform: 'scaleX(-1)' }}></video>
                                        <Button onClick={handleOpenCamera} style={{marginTop: '5%'}}>開啟相機</Button>
                                    </Card>
                                </div>
                            </Col>
                        )} 
                        {windowWidth > 768 && (           
                            <Col sm={6}>
                                <div className='holder'>
                                    <Card>
                                        <canvas ref={photoRef} style={{ transform: 'scaleX(-1)' }}></canvas>
                                        <Button onClick={handleTakePhoto} style={{marginTop: '5%'}}>拍照</Button>
                                    </Card>
                                </div>
                            </Col>
                        )}
                        {windowWidth > 768 && (           
                            <hr className='hr-design'/>
                        )}
                        {windowWidth > 768 && (           
                            <Col sm={6}>
                                <div className='holder'>
                                    <Card>
                                        <div style={{height: cropperSize.height}}>
                                            <Cropper
                                                image={capturedPhoto}
                                                crop={crop}
                                                zoom={zoom}
                                                aspect={1}
                                                onCropChange={setCrop}
                                                onZoomChange={setZoom}
                                                onCropComplete={onCropComplete}
                                            />
                                        </div>
                                        {showCropper && (
                                            <Button onClick={handleCropSave} style={{ zIndex: 1000}}>上傳辨識</Button>
                                        )}
                                    </Card>
                                </div>
                            </Col>                        
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
                        {windowWidth > 768 && (           
                            <hr className='hr-design'/>
                        )}
                        <Col sm={6}>
                            <div className='holder'>
                                <Card>
                                    <h3 style={{textAlign:'center'}}>辨識結果:{detectresult}</h3>
                                    <h3>建議:</h3>
                                    <div dangerouslySetInnerHTML={{ __html: advice }} />
                                    {clinicButton && (
                                        <Button onClick={getNearbyClinics}>查看附近診所</Button>
                                    )}
                                </Card>
                            </div>
                        </Col>
                        {/*{clinicButton &&(
                            <Col sm={12}>
                                <LoadScript googleMapsApiKey="AIzaSyCDZPfFIb6gmKj3XBFzFL3F35AYHY35E0M">
                                    <GoogleMap
                                        mapContainerStyle={mapContainerStyle}
                                        center={center}
                                        zoom={15}
                                    >
                                        {clinics.map((clinic, index) => (
                                            <Marker
                                                key={index}
                                                position={{
                                                    lat: clinic.geometry.location.lat,
                                                    lng: clinic.geometry.location.lng,
                                                }}
                                                title={clinic.name} 
                                            />
                                        ))}
                                    </GoogleMap>
                                </LoadScript> 
                            </Col>
                        )}*/}
                        {clinicButton && (
                            <Col sm={6}>
                                <LoadScript googleMapsApiKey="AIzaSyCDZPfFIb6gmKj3XBFzFL3F35AYHY35E0M">
                                    <GoogleMap
                                        mapContainerStyle={mapContainerStyle}
                                        center={mapCenter}
                                        zoom={15}
                                    >
                                        {clinics.map((clinic, index) => (
                                            <Marker
                                                key={index}
                                                position={{
                                                    lat: clinic.geometry.location.lat,
                                                    lng: clinic.geometry.location.lng,
                                                }}
                                                onClick={() => handleMarkerClick(clinic)} // 點擊事件
                                                title={clinic.name}
                                            />
                                        ))}

                                        {/* 顯示 InfoWindow */}
                                        {activeMarker && (
                                            <InfoWindow
                                                position={{
                                                    lat: activeMarker.geometry.location.lat,
                                                    lng: activeMarker.geometry.location.lng,
                                                }}
                                                options={{
                                                    pixelOffset: new window.google.maps.Size(0, -30)
                                                }}
                                                onCloseClick={handleInfoWindowClose} // 點擊關閉 InfoWindow
                                            >
                                                <div>
                                                    <h4>{activeMarker.name}</h4>
                                                    <p>{activeMarker.vicinity}</p> 
                                                    <p>評分: {activeMarker.rating}</p> 
                                                </div>
                                            </InfoWindow>
                                        )}
                                    </GoogleMap>
                                </LoadScript>
                            </Col>
                        )}
                    </Row>
                </Container>
            </section>
        </div>
    )
}