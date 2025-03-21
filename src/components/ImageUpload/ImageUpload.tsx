import React, { useRef } from 'react';
import { FaUpload } from "react-icons/fa";
import './ImageUpload.css';

interface ImageUploadComponentProps {
    onConfirmImage: (imageData: string) => void;
}

const ImageUploadComponent: React.FC<ImageUploadComponentProps> = ({ onConfirmImage }) => {
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0]
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (e.target?.result) {
                    onConfirmImage(e.target.result as string);
                }
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="input-options">

            <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleImageUpload}
                className="hidden"
            />

            <button className="btn btn-primary" onClick={() => fileInputRef.current?.click()}>
                <FaUpload /> Upload Image
            </button>

        </div>
    )
}

export default ImageUploadComponent;