# POPText - Text OCR Website

POPText is a web application that allows users to extract text from images using Optical Character Recognition (OCR). The frontend is built with **React** and **Vite**, while the backend uses **Python** with **FastAPI** and **Pytesseract** for text extraction. Users can upload image files or use their webcam to capture photos, and the extracted text will be displayed on the website.

---

## Features

- **Upload Image Files**: Upload images (JPEG, PNG, etc.) to extract text.
- **Webcam Capture**: Use your webcam to take photos and extract text in real-time.
- **FastAPI Backend**: A lightweight and fast backend for processing OCR requests.
- **Pytesseract**: Utilizes the power of Tesseract OCR for accurate text extraction.
- **Responsive Design**: A clean and user-friendly interface built with React.

---

## Prerequisites

Before running the project, ensure you have the following installed:

1. **Node.js** (for running the React frontend)
2. **Python 3.8+** (for running the FastAPI backend)
3. **Tesseract OCR** (install it on your system and ensure it's added to your PATH)
   - For Windows: Download from [Tesseract at UB Mannheim](https://github.com/UB-Mannheim/tesseract/wiki)
   - For macOS: Install via Homebrew (`brew install tesseract`)
   - For Linux: Install via package manager (`sudo apt install tesseract-ocr`)

---

## Installation

### Frontend (React + Vite)

1. Install dependencies:
   ```bash
   npm install
   ```

### Backend (FastAPI + Pytesseract)

1. Create a virtual environment:
   ```bash
   python -m venv backend-venv
   ```
2. Activate the virtual environment:
   - On Windows:
     ```bash
     backend-venv\Scripts\activate
     ```
   - On macOS/Linux:
     ```bash
     source backend-venv/bin/activate
     ```
3. Install Python dependencies:
   ```bash
   pip install fastapi uvicorn python-multipart pytesseract pillow                                                 
   ```

---

## Running the Application

### Frontend

1. Start the React development server:
   ```bash
   npm run dev
   ```
2. The frontend will be available at `http://localhost:5173`.

### Backend

1. Ensure the virtual environment is activated (see above).
2. Start the FastAPI server:
   ```bash
   python backend/main.py
   ```
3. The backend will be available at `http://localhost:8000`.

---

## Usage

1. Open the website in your browser (`http://localhost:5173`).
2. Choose one of the following options:
   - **Upload Image**: Click the "Upload" button to select an image file from your device.
   - **Webcam Capture**: Click the "Use Webcam" button to take a photo using your webcam.
3. The extracted text will be displayed on the screen.

---

## Project Structure

```
POPText/
├── public/             # Static assets
├── src/                # React components and logic
│   ├── components/     # Reusable components
|   ├── sections/       # Reusable modules
│   ├── App.jsx         # Main application component
│   └── main.jsx        # Entry point
├── package.json        # Frontend dependencies
└── vite.config.js      # Vite configuration
│
├── backend/            # FastAPI + Pytesseract backend
│   ├── main.py         # FastAPI server and OCR logic
|
└── backend-venv/       # Python virtual environment
│
└── README.md           # Project documentation
```

---

## Notes

- Ensure the backend is running before using the frontend, as the frontend makes API requests to the backend for OCR processing.
- For better OCR accuracy, use high-quality images with clear text.
- The webcam feature requires browser permissions to access the camera.

---

---

Enjoy using POPText! 🚀

(README generated with assistance from Deepseek)