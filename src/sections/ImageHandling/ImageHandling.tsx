import axios from 'axios';
import React, { useRef, useState } from "react";
import CameraComponent, { CameraComponentRef } from '../../components/CameraCapture/CameraCapture';
import { FaCamera } from "react-icons/fa";
import ImageUploadComponent from '../../components/ImageUpload/ImageUpload';

import './ImageHandling.css';

interface ImageHandlingSectionProps {
    setText: (text: string) => void;
}

const ImageHandlingSection: React.FC<ImageHandlingSectionProps> = ({ setText }) => {
    const cameraRef = useRef<CameraComponentRef>(null);
    const [image, setImage] = useState<string | null>(null);
    const [loading, setLoading] = useState(false);

    // Handle image from camera/upload
    const handleConfirmedImage = (imageData: string) => {
        setImage(imageData);
    }

    const handleCameraClick = () => {
        if (cameraRef.current) {
            cameraRef.current.openCameraPopup();
        }
    }

    // Send image to backend for OCR
    const processImage = async () => {
        if (!image) return;
        setLoading(true);
        try {
            const base64response = await fetch(image)
            const blob = await base64response.blob()

            const formData = new FormData()
            formData.append("image", blob, "image.png")

            const response = await axios.post("http://localhost:8000/ocr", formData, {
                headers: {
                    "Content-Type": "multipart-form-data"
                }
            });

            setText(response.data.text);
        } catch (err) {
            console.error("Error processing image: ", err);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="image-section">

            <div className="image-buttons">
                <ImageUploadComponent onConfirmImage={handleConfirmedImage} />
                <div className="input-options">
                    <button className="btn btn-secondary" onClick={handleCameraClick}><FaCamera /> Open Camera</button>
                </div>
            </div>

            <div>
                <CameraComponent ref={cameraRef} onConfirmImage={handleConfirmedImage} />
            </div>

            <div className="image-preview">
                {!image ? (
                    <img src="https://placehold.co/600x400@2x.png" alt="Placeholder image here" />
                ) : (
                    <img src={image} alt="Preview image here" />
                )}
            </div>

            <button className="btn btn-accent extract-btn" onClick={processImage} disabled={loading}>
                {loading ? (
                    <span className="spinner"></span>
                ) : (
                    <span className="btn-text">Extract Text</span>
                )}
            </button>
        </section>
    )
}

export default ImageHandlingSection;