import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Plane } from '@react-three/drei'
import * as THREE from 'three'
import {isMobile} from 'react-device-detect';
import Button from './components/Button';



export default function Experience()
{
    
    if (!isMobile){
        const computer = useGLTF('./model.gltf')   
        return <>

        <color args={ [ '#000000' ] } attach="background" />

        <Environment files="./hdri/potsdamer_platz_4k.hdr" />
        
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 75 }
                    color={ '#fafafa' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2 }
                    position-x={- 0.3}
                    scale = {1.0}
                    // rotation-x={ 0.13 }
                >
                    <Plane args={[200, 200]} rotation={[-Math.PI / 2, 0, 0]}>
                        <meshStandardMaterial color="#000000" roughness={1} metalness={0.5} />
                    </Plane>
                    
                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }

                    >
                   <iframe src="./data/index.html" name='myiframe'/>
                        
                    </Html>

                    <pointLight 
                    position={[7, 4, -5]}
                    intensity={700}
                    color="#ff0000"
                    decay={2}
                    />
                    <pointLight 
                    position={[-3, 4, -5]}
                    intensity={700}
                    color="#0000ff"
                    decay={2}
                    />

                </primitive>

                <Text
                    font="./xshow.ttf"
                    fontSize={ 0.8 }
                    position={ [ 2, 0.75, 0.75 ] }
                    rotation-y={ - 1.25 }
                    maxWidth={ 2.5 }
                    color={new THREE.Color(1,1,1)}
                    letterSpacing={0.05}
                >
                    SANKALP SHARMA
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 1.4 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 1.5 }
        />
            <Html
                center
                wrapperClass="htmlButton"
                distanceFactor={ 10 }
                position={ [ 8, -4, - 1.4 ] }
            >
                <Button name="Open" target_url="./data/index.html" />
            </Html>

    </>
    }
    else {
        const computer = useGLTF('./model.gltf')
        return <>

        <color args={ [ '#000000' ] } attach="background" />

        <Environment files="./hdri/potsdamer_platz_4k.hdr" />
        
        <PresentationControls
            global
            rotation={ [ 0.13, 0.1, 0 ] }
            polar={ [ - 0.4, 0.2 ] }
            azimuth={ [ - 1, 0.75 ] }
            config={ { mass: 2, tension: 400 } }
            snap={ { mass: 4, tension: 400 } }
        >
            <Float rotationIntensity={ 0.4 } >  
                <rectAreaLight
                    width={ 2.5 }
                    height={ 1.65 }
                    intensity={ 75 }
                    color={ '#fafafa' }
                    rotation={ [ - 0.1, Math.PI, 0 ] }
                    position={ [ 0, 0.55-1, - 1.15 ] }
                />

                <primitive
                    object={ computer.scene }
                    position-y={ - 1.2}
                    position-x = { 0.1 }
                    scale = {0.6}
                    rotation-y={ -0.5 }
                >
                    <Plane args={[100, 300]} rotation={[-Math.PI / 2, 0, -Math.PI/2]}>
                        <meshStandardMaterial color="#000000" roughness={1} metalness={0.5} />
                    </Plane>

                    <Html
                        transform
                        wrapperClass="htmlScreen"
                        distanceFactor={ 1.17 }
                        position={ [ 0, 1.56, - 1.4 ] }
                        rotation-x={ - 0.256 }
                    >   
                        <iframe src="./data/index.html"/>

                        
                    </Html>

                    <pointLight 
                    position={[10, 4, -5]}
                    intensity={700}
                    color="#ff0000"
                    decay={2}
                    />
                    <pointLight 
                    position={[-3, 4, -5]}
                    intensity={700}
                    color="#0000ff"
                    decay={2}
                    />

                </primitive>

                <Text
                    font="./xshow.ttf"
                    fontSize={ 0.3 }
                    position={ [ -0.8, 1.5, 0.75 ] }
                    rotation-y={ 0 }
                    maxWidth={ 1 }
                    color={new THREE.Color(1,1,1)}
                    letterSpacing={0.1}
                >
                    SANKALP SHARMA
                </Text>
            </Float>
        </PresentationControls>

        <ContactShadows
            position-y={ - 5 }
            opacity={ 0.4 }
            scale={ 5 }
            blur={ 1.5 }
        />
            <Html
                center
                wrapperClass="htmlButton"
                distanceFactor={ 10 }
                position={ [ 1, -3, - 1.4 ] }
            >
                <Button name="Open" target_url="./data/index.html" />
            </Html>
        </>
    }
    
}