import { Text, Html, ContactShadows, PresentationControls, Float, Environment, useGLTF, Plane } from '@react-three/drei'
import * as THREE from 'three'


export default function Experience()
{
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
                        <iframe src="./data/index.html" />
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
                    font="./bangers-v20-latin-regular.woff"
                    fontSize={ 1 }
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

    </>
}