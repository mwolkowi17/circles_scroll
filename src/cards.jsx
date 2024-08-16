import { useGLTF } from '@react-three/drei'
import { useLoader, useFrame } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { useEffect, useRef, useState } from 'react'
import { useScroll } from '@react-three/drei'
import * as THREE from 'three'

export function Cards(ifwhelle) {

    const [play, setPlay] = useState(false)
    const [timeplay, setTimeplay] = useState(0)
    //const { nodes } = useGLTF('cards1.glb')
    const gltf = useLoader(GLTFLoader, 'circles3.glb')
    const mixer = useRef()
    const value = useRef()
    const scroll = useScroll();
    value.current = 0

    useFrame(() => {

        setTimeplay(scroll.range(1 / 3, 1 / 3, 0.001))
        // if (ifwhelle === true) {
        //     setPlay(true)
        // }

        // if (ifwhelle != true) {
        //     setPlay
        // }

        console.log(scroll.offset)
        //console.log(play)
    })

    useEffect(() => {
        if (gltf) {
            mixer.current = new THREE.AnimationMixer(gltf.scene)

            const action = mixer.current.clipAction(gltf.animations[0])
            const action1 = mixer.current.clipAction(gltf.animations[1])
            const action2 = mixer.current.clipAction(gltf.animations[2])
            const action3 = mixer.current.clipAction(gltf.animations[3])
            const action4 = mixer.current.clipAction(gltf.animations[4])
            const action5 = mixer.current.clipAction(gltf.animations[5])
            const action6 = mixer.current.clipAction(gltf.animations[6])
            const action7 = mixer.current.clipAction(gltf.animations[7])
            const action8 = mixer.current.clipAction(gltf.animations[8])
            const action9 = mixer.current.clipAction(gltf.animations[9])
            const action10 = mixer.current.clipAction(gltf.animations[10])
            const action11 = mixer.current.clipAction(gltf.animations[11])


            //action.timeScale = -1 reverse anim play

            action.play()
            action1.play()
            action2.play()
            action3.play()
            action4.play()
            action5.play()
            action6.play()
            action7.play()
            action8.play()
            action9.play()
            action10.play()
            action11.play()

            // if (play) {
            //     action.timeScale = -1
            //     action1.timeScale = -1
            //     action2.timeScale = -1
            //     action3.timeScale = -1
            //     action4.timeScale = -1
            //     action5.timeScale = -1
            //     action6.timeScale = -1
            //     action7.timeScale = -1
            //     action8.timeScale = -1
            //     action9.timeScale = -1
            //     action10.timeScale = -1
            //     action11.timeScale = -1
            // }
        }
    }, [gltf, play])

    useFrame((state, delta) => {


        // if (timeplay > 0 && timeplay < .2 && play === true)
        // if (play === true) {
        mixer.current?.update(delta / 4 - timeplay / 100)

        // }


    })
    return <primitive object={gltf.scene} scale={1} position={[-4, 0, 0]} rotation={[0, 0, 0]} />
}