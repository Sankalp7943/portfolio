import { Canvas } from '@react-three/fiber'
import Experience from './Experience.jsx'
import { useState, useEffect } from 'react';

const audio = new Audio("./whoosh.wav");

const App = function(){

    const [startAudio, setStartAudio] = useState(false);
    useEffect(() => {
        if (startAudio) {
          audio.play();
          setStartAudio(false)
          console.log("Play")
        }
      }, [startAudio]);


    return (   
        <>
        <Canvas
        onClick={()=>setStartAudio(true)}
        onTouchMove={()=>setStartAudio(true)}
        className="r3f"
        camera={ {
            fov: 45,
            near: 0.1,
            far: 2000,
            position: [ -3, 1.5, 4 ]
        } }
    >
        <Experience />
    </Canvas>
        
    </>)
}

export default App