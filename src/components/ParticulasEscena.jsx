import React, { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";
import GUI from "lil-gui";

const ThreeParticles = () => {
    const mountRef = useRef(null);

    useEffect(() => {
        if (!mountRef.current) return;

        /**
         * Base
         */
        const scene = new THREE.Scene();

        // Tamaño de la pantalla
        const sizes = {
            width: mountRef.current.clientWidth || window.innerWidth,
            height: mountRef.current.clientHeight || window.innerHeight,
        };

        /**
         * Cámara
         */
        const camera = new THREE.PerspectiveCamera(
            75,
            sizes.width / sizes.height,
            0.1,
            100
        );
        camera.position.set(0, 0, 3);
        scene.add(camera);

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({ antialias: true });
        renderer.setSize(sizes.width, sizes.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        mountRef.current.appendChild(renderer.domElement); // 💡 Agregado correctamente

        /**
         * Texturas
         */
        const textureLoader = new THREE.TextureLoader();

        /**
         * Cubo
         */
        const cubeGeometry = new THREE.BoxGeometry(1, 1, 1);
        const cubeMaterial = new THREE.MeshBasicMaterial({
            map: textureLoader.load("/static/textures/1.png"),
        });
        const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);
        scene.add(cube);
        /**
         * Luces
         */
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.3);
        scene.add(ambientLight);

        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
        directionalLight.position.set(2, 2, 5);
        scene.add(directionalLight);

        /**
         * Controles de Cámara
         */
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;

        /**
         * GUI para Depuración
         */
        const gui = new GUI();
        gui.add(ambientLight, "intensity").min(0).max(3).step(0.01);
        gui.add(directionalLight, "intensity").min(0).max(2).step(0.01);

        /**
         * Animación
         */
        const clock = new THREE.Clock();
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            controls.update();
            //renderizar
            renderer.render(scene, camera);
            //llamar a animate en el proximo frame
            requestAnimationFrame(animate);
        };
        animate();

        /**
         * Manejo de Resize
         */
        const handleResize = () => {
            sizes.width = window.innerWidth;
            sizes.height = window.innerHeight;

            camera.aspect = sizes.width / sizes.height;
            camera.updateProjectionMatrix();

            renderer.setSize(sizes.width, sizes.height);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        };
        window.addEventListener("resize", handleResize);


        /**
         * Cleanup al desmontar el componente
         */
        return () => {
            gui.destroy();
            window.removeEventListener("resize", handleResize);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
        };
    }, []);

    return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
};

export default ThreeParticles;