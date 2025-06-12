import { useEffect, useState } from 'react'
import { FaArrowUp } from "react-icons/fa6";
import api from './services/api';
import './App.css'

function App() {

  const [isLoading, setIsLoading] = useState(false);
    const [prompt, setPrompt] = useState("");
    const [sceneName, setSceneName] = useState("");
    const [vidUrl, setVidUrl] = useState("")
    const [error, setError] = useState("")
  
    async function getVideo() {
      try {
        console.log("Getting video for scene:", sceneName);
        const url = `${api.defaults.baseURL}/video?scene_name=${sceneName}`; 
        console.log("Video URL:", url);
        
        
        const response = await fetch(url);
        console.log("Video response status:", response.status);
        
        if (response.ok) {
          setVidUrl(url);
          setError("");
          console.log("Video URL set successfully");
        } else {
          
          try {
            const errorData = await response.json();
            console.error("Video fetch failed:", errorData);
            setError(`Video not found: ${errorData.message}`);
            
            
            
          } catch (e) {
            
            const errorText = await response.text();
            console.error("Video fetch failed:", response.status, errorText);
            setError(`Video not found: ${response.status}`);
          }
        }
      } catch (err) {
        console.error("Error getting video:", err);
        setError(`Network error: ${err.message}`);
      }
    }
  
    useEffect(() => {
      if (sceneName) {
        console.log("Scene name changed to:", sceneName);
        getVideo();
      }
    }, [sceneName])
  
    async function generateVid() {
      try {
        setIsLoading(true);
        setError("");
        setVidUrl(""); 
        setSceneName(""); 
        
        console.log("Generating video with prompt:", prompt);
        const response = await api.post('/generate', { prompt });
        console.log("Generate response:", response.data);
  
        if (response.data.status === 'success') {
          console.log("Setting scene name to:", response.data.scene_name);
          setSceneName(response.data.scene_name);
        } else {
          
          const errorMsg = response.data.message || response.data.details || response.data.error || "Unknown error";
          console.error("Error generating video:", errorMsg);
          setError(`Generation failed: ${errorMsg}`);
        }
      } catch (err) {
        console.error("Request failed:", err);
        if (err.response?.data) {
          
          const backendError = err.response.data.message || err.response.data.error || "Backend error";
          setError(`Request failed: ${backendError}`);
        } else {
          
          setError(`Network error: ${err.message}`);
        }
      } finally {
        setIsLoading(false);
      }
    }

  return (
    <div className='h-screen flex flex-col'>
      <div className='pl-7 pt-4 text-[#ffffff] text-3xl h-14 bg-[#212121] '>
        AIVG
      </div>

      <div className='flex grow justify-center items-center bg-[#212121]'>
        <div className='h-82 w-xl bg-black rounded-xl'>
          <div className='flex rounded-xl p-2 gap-2'>
            <div className='rounded-full w-3 h-3 bg-red-500'></div>
            <div className='rounded-full w-3 h-3 bg-yellow-500'></div>
            <div className='rounded-full w-3 h-3 bg-green-500'></div>
          </div>

          <div className='flex justify-center items-center h-78 w-xl bg-black text-white rounded-xl flex-col '>
            {vidUrl && !isLoading && !error && (
              <video
                src = {vidUrl}
                controls
                className='w-full h-full rounded-xl'
                onError={(e) => {
                  console.error("Video playback error:", e);
                  setError("Video playback failed - check console for details");
                }}
                onLoadStart={() => console.log("video loading started")}
                onCanPlay={()=> console.log("video can be played now")}
              />
            )}
            {isLoading && (
              <div className='text-center'>
                <p className='text-white'>Generating video...</p>
                <p className='text-gray-300'>This may take a while</p>
              </div>
            )}
            {error && (
              <div className='text-center overflow-auto'>
                <p className='text-red-500'>Error:</p>
                <p className='text-yellow-400 text-sm'>{error}</p>
              </div>
            )
            }
            {!vidUrl && !error && !isLoading && !sceneName && (
              <div className='text-center'>
                <p className='text-white'>Welcome to AIVG</p>
                <p className='text-sm text-gray-300'>Enter prompt to generate a Manim Video</p>
              </div>
            )
            }
            {sceneName && !vidUrl && !error && !isLoading && (
              
                <p className='text-yellow-400'>Loading video for: {sceneName}</p>
              
            )

            }
          </div>
        </div>
      </div>

      <div className='flex items-center justify-center flex-1 bg-[#212121]'>
        <div className='bg-[#303030] h-24 w-2xl rounded-2xl'>
          <input
            type="text"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e)=>{
              if(e.key === 'Enter' && !isLoading && prompt.trim()){
                generateVid();
              }
            }}
            placeholder='Generate video...'
            className='pl-5 bg-[#303030] text-[#a5a5a5] h-14 w-2xl rounded-2xl outline-none'
          />
          <div className='flex flex-row-reverse pr-4'>
            <FaArrowUp onClick={()=>{
              if(!isLoading && prompt.trim()){
                generateVid();
              }
            }} className={` rounded-full text-[#212121] p-1 w-7 h-7 cursor-pointer transition-color ${
              isLoading  ? "bg-gray-400 cursor-not-allowed" : "bg-white hover:bg-[#8a8c8d]"
            }`} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
