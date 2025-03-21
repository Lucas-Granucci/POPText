import { forwardRef, useImperativeHandle, useState, useEffect, useRef } from 'react';
import { FaCamera, FaSyncAlt, FaCheck, FaTimes } from "react-icons/fa";
import './CameraCapture.css';

interface CameraComponentProps {
    onConfirmImage: (imageData: string) => void;
}

export interface CameraComponentRef {
    openCameraPopup: () => void;
}

const CameraComponent = forwardRef<CameraComponentRef, CameraComponentProps>(({ onConfirmImage }, ref) => {
    const [image, setImage] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
    const [stream, setStream] = useState<MediaStream | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);

    const openCameraPopup = async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ video: true });

            setStream(stream);
            setIsModalOpen(true);
        } catch (error) {
            console.error('Error accessing camera: ', error);
        }
    };

    useEffect(() => {
        if (isModalOpen && stream && videoRef.current) {
            videoRef.current.srcObject = stream;
        }
    }, [isModalOpen, stream])

    const captureImage = () => {
        if (videoRef.current) {
            const videoElement = videoRef.current;
            const canvas = document.createElement('canvas')
            canvas.width = videoElement.videoWidth;
            canvas.height = videoElement.videoHeight;

            const context = canvas.getContext('2d');
            if (context) {
                context.drawImage(videoElement, 0, 0, canvas.width, canvas.height);
                const imageData = canvas.toDataURL('image/png');
                setImage(imageData);
                stopStream();
            }
        }
    };

    const stopStream = () => {
        if (stream) {
            stream.getTracks().forEach(track => track.stop());
            setStream(null);
        }
    };

    const closeModal = () => {
        stopStream();
        setIsModalOpen(false);
        setImage(null);
    }

    const retakeImage = () => {
        setImage(null);
        openCameraPopup();
    };

    const confirmImage = () => {
        if (image) {
            onConfirmImage(image);
            closeModal();
        }
    }

    useImperativeHandle(ref, () => ({
        openCameraPopup
    }));

    useEffect(() => {
        return () => {
            stopStream();
        }
    }, [])

    return (
        <div>

            {isModalOpen && (
                <div className="modal-container">
                    {image ? (
                        <>
                            <img src={image} alt="Captured" className="captured-image-style" />

                            <div className="capture-button-div">
                                <button onClick={retakeImage} className="btn btn-secondary"><FaSyncAlt /> Retake</button>
                                <button onClick={confirmImage} className="btn btn-secondary"><FaCheck /> Confirm</button>
                            </div>
                            <button onClick={closeModal} className='close-button'><FaTimes /> Close</button>
                        </>
                    ) : (
                        <>
                            <video ref={videoRef} autoPlay className="video-style" />

                            <div className="capture-button-div">
                                <button onClick={captureImage} className="btn btn-secondary"><FaCamera /> Capture Image</button>
                                <button onClick={closeModal} className='close-button'><FaTimes /> Close</button>
                            </div>
                        </>
                    )}
                </div>
            )}
        </div>
    );
});

export default CameraComponent