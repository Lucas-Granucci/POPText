import React from 'react';
import { FaCopy, FaSave, FaShare } from "react-icons/fa";
import './ExtractedText.css';

interface ExtractedTextSectionProps {
    text: string;
    setText: (text: string) => void;
}

const ExtractedTextSection: React.FC<ExtractedTextSectionProps> = ({ text, setText }) => {

    // Copy text to clipboard
    const copyText = () => {
        navigator.clipboard.writeText(text);
        alert("Text copied to clipboard!");
    }

    // Save text to file
    const saveText = () => {
        const blob = new Blob([text], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = url;
        a.download = "transcribed-text.txt";
        a.click();
    }

    // Share text
    const shareText = () => {
        if (navigator.share) {
            navigator.share({
                title: "Transcribed text",
                text: text,
            });
        } else {
            alert("Sharing is not supported in your browser")
        }
    }

    return (
        <section className="text-section">
            <div className="text-heading">
                <h2>Extracted text</h2>
                <div className="text-actions">
                    <button className="btn btn-secondary" onClick={copyText}>
                        <FaCopy /> Copy
                    </button>
                    <button className="btn btn-secondary" onClick={saveText}>
                        <FaSave /> Save
                    </button>
                    <button className="btn btn-secondary" onClick={shareText}>
                        <FaShare /> Share
                    </button>
                </div>
            </div>

            <textarea
                className="text-content"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Extracted text will appear here" />
        </section>
    )
}

export default ExtractedTextSection;