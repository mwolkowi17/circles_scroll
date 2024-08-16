import './App.css'
import {
  Canvas,
  useFrame
} from '@react-three/fiber'
import { OrbitControls, Environment, ScrollControls, useScroll } from '@react-three/drei'
import { Cards } from './cards'


export default function App() {

  // const handleScroll = (event) => {
  //   console.log('User scrolled!');
  // };


  return (
    <>
      {/* <div className={"scroll_el"} onWheel={handleScroll} onClick={() => { console.log("clicked") }}> */}
      <Canvas >
        <OrbitControls enableZoom={false} />
        <ambientLight
          intensity={Math.PI * 1.12}
        />
        <directionalLight position={[0, 0, 5]} />
        <directionalLight
          position={[3.3, 1.0, 4.4]}
          castShadow
          intensity={Math.PI / 2}
        />
        {/* <Circle args={[1]} material-color="hotpink" /> */}
        <ScrollControls pages={2} damping={0.25} >
          <Cards />
        </ScrollControls>
        {/* <mesh>
          <boxGeometry />
          <meshStandardMaterial />
        </mesh> */}
        <Environment preset="dawn" />
      </Canvas>
      {/* </div> */}
    </>
  )
}