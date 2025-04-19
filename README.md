# Skin Savvy AI Detect

![Skin Savvy AI Detect](https://raw.githubusercontent.com/oyy-krishna/skin-savvy-ai-detect/main/assets/logo.png)

**Skin Savvy AI Detect** is an AI-powered web application designed to assist in the early detection of skin cancer. By leveraging deep learning techniques, the application analyzes uploaded skin lesion images and predicts whether they are benign or malignant. This tool aims to provide users with a preliminary assessment, promoting timely medical consultations.

## 🚀 Live Demo

Experience the application live: [Skin Savvy AI Detect](https://skin-savvy-ai-detect.lovable.app/)

## 🧠 Features

- **Image Upload**: Users can upload images of skin lesions for analysis.
- **AI Prediction**: Utilizes Convolutional Neural Networks (CNNs) to classify lesions.
- **Grad-CAM Visualization**: Highlights areas of the image that influenced the prediction.
- **User-Friendly Interface**: Intuitive design for easy navigation and use.
- **Responsive Design**: Compatible with various devices, including desktops and mobiles.

## 📸 Screenshots

![Upload Interface](https://raw.githubusercontent.com/oyy-krishna/skin-savvy-ai-detect/main/assets/upload_interface.png)
*Upload your skin lesion image.*

![Prediction Result](https://raw.githubusercontent.com/oyy-krishna/skin-savvy-ai-detect/main/assets/prediction_result.png)
*View the AI's prediction and visualization.*

## 🛠️ Technologies Used

- **Frontend**: TypeScript, React, Tailwind CSS, shadcn-ui
- **Backend**: Flask (Python)
- **Machine Learning**: TensorFlow, Keras
- **Model Architecture**: EfficientNetB0
- **Visualization**: Grad-CAM for heatmap generation
- **Deployment**: Lovable Platform

## 📂 Dataset

The model was trained using the [ISIC 2020: Skin Lesion Analysis Towards Melanoma Detection](https://www.kaggle.com/c/siim-isic-melanoma-classification) dataset, which contains a large collection of dermoscopic images labeled for melanoma classification.

## 🧪 Installation & Setup (Local Development)

1. **Clone the repository**:
   ```bash
   git clone https://github.com/oyy-krishna/skin-savvy-ai-detect.git
   cd skin-savvy-ai-detect
   ```

2. **Install Node.js dependencies**:
   ```bash
   npm i
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

## 🔢 Alternative Setup (Flask + ML Backend)

1. Create a Python virtual environment:
   ```bash
   python -m venv venv
   source venv/bin/activate  # On Windows: venv\Scripts\activate
   ```

2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```

3. Run the Flask server:
   ```bash
   python app.py
   ```

4. Open your browser and navigate to `http://localhost:5000`

## 🔖 Disclaimer

This application is intended for educational and informational purposes only. It is not a substitute for professional medical advice, diagnosis, or treatment. Always consult a qualified healthcare provider with any questions regarding medical conditions.

## 📢 Contact

For questions or feedback, feel free to reach out via [GitHub](https://github.com/oyy-krishna/skin-savvy-ai-detect/issues).

---

**Project deployed via Lovable:** [Lovable Project Link](https://lovable.dev/projects/599d4c30-5c22-497b-8c82-73c0f642f524)

