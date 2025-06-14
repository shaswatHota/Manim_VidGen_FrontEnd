# 🎬 Manim Video Generator Frontend

A clean, minimalistic React frontend for the Manim Video Generator. This interface allows users to input natural language descriptions and generate stunning mathematical animations powered by AI. Built with modern web technologies for a smooth and intuitive user experience.

Simply describe the mathematical concept or animation you want to visualize, and watch as AI transforms your words into beautiful Manim animations.

## ✨ Features

- **🎯 Minimalistic Design**: Clean, distraction-free interface focused on content creation
- **⚡ Real-time Generation**: Instant feedback and fast video generation
- **📱 Responsive Layout**: Works seamlessly on desktop, tablet, and mobile devices
- **🤖 AI-Powered**: Natural language input for mathematical animation generation
- **🎨 Modern UI**: Built with Tailwind CSS for a contemporary look and feel
- **🔄 Live Preview**: See your animations as they're generated
- **📋 Easy Input**: Simple text area for describing your desired animations
- **🎬 Video Display**: Integrated video player for generated animations

## 🛠️ Tech Stack

- **Framework**: React 19.1.0
- **Build Tool**: Vite 6.3.5
- **Styling**: Tailwind CSS 4.1.8
- **HTTP Client**: Axios 1.9.0
- **Icons**: React Icons 5.5.0
- **Language**: JavaScript (ES Modules)
- **Linting**: ESLint 9.25.0

## 🚀 Setup & Installation

### Prerequisites

Make sure you have Node.js installed on your system:
- **Node.js**: Version 18.0.0 or higher
- **npm**: Version 8.0.0 or higher (comes with Node.js)

You can check your versions with:
```bash
node --version
npm --version
```

### Step 1: Clone the Repository

```bash
git clone https://github.com/shaswatHota/Manim_VidGen_FrontEnd.git
cd Manim_VidGen_FrontEnd
```

### Step 2: Install Dependencies

```bash
npm install
```

This will install all the required dependencies including:
- React and React DOM
- Vite for development and building
- Tailwind CSS for styling
- Axios for API communication
- React Icons for UI icons

### Step 3: Configure Backend Connection

The frontend needs to connect to your Manim Video Generator Backend. Make sure:

1. **Backend is running**: Your backend server should be running on `http://localhost:8000`
2. **API endpoints**: Verify the API endpoints in your frontend code match your backend configuration
3. **CORS settings**: Ensure your backend allows requests from the frontend origin

If your backend runs on a different port or URL, update the API configuration in your frontend code accordingly.

## 🏃‍♂️ Running the Application

### Development Mode

Start the development server with hot reload:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or another port if 5173 is occupied).



## 🔧 Project Structure

```
src/
├── components/          # React components
├── assets/             # Static assets (images, icons)
├── styles/             # Additional CSS files
├── utils/              # Utility functions
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles with Tailwind
```

## 🔧 Troubleshooting

### Common Issues and Solutions


**1. Node modules issues**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

**2. Backend connection issues**
- Verify backend is running on `http://localhost:8000`
- Check browser console for CORS errors
- Ensure API endpoints are correctly configured
- Test backend endpoints directly with curl or Postman


## 🎯 Usage

1. **Start the backend**: Make sure your [Manim Video Generator Backend](https://github.com/shaswatHota/Manim-VidGen-BackEnd) is running
2. **Open the frontend**: Navigate to `http://localhost:5173` in your browser
3. **Describe your animation**: Enter a natural language description of the mathematical animation you want
4. **Generate**: Click the generate button and wait for your AI-powered animation
5. **View result**: Watch your generated mathematical animation directly in the browser

## 🔗 Related Projects

**Backend Repository**: [Manim Video Generator Backend](https://github.com/shaswatHota/Manim-VidGen-BackEnd)

Make sure to set up and run the backend service before using this frontend interface.

---

Happy creating! 🎬✨