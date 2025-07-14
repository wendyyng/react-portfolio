import React, { useRef, useEffect, useState } from 'react';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry';

const ThreeCube = ({ onClick }) => {
  const mountRef = useRef(null);
  const [isCubeHovered, setIsCubeHovered] = useState(false);

  useEffect(() => {
    const currentMount = mountRef.current;

    const width = currentMount.clientWidth;
    const height = currentMount.clientHeight;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#eee4ee');

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    // Cube geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // Load the logo texture
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/logo-pink.png');

    // Create materials for cube faces
    const materials = [
      new THREE.MeshBasicMaterial({ color: '#ed64a6' }),
      new THREE.MeshBasicMaterial({ color: '#FF66B2' }),
      new THREE.MeshBasicMaterial({ color: '#FF8CFF' }),
      new THREE.MeshBasicMaterial({ color: '#FF0080' }),
      new THREE.MeshBasicMaterial({ color: '#FFFFFF', map: logoTexture  }),
      new THREE.MeshBasicMaterial({ color: '#B47BFF' })
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    let textMesh;

    // Load font and create enhanced 3D text
    const loader = new FontLoader();
    loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry("Wendy's Portfolio", {
        font: font,
        size: 0.4,
        height: 0.1, // Reduced depth for less shadowing
        curveSegments: 12,
        bevelEnabled: true,
        bevelThickness: 0.02,
        bevelSize: 0.015,
        bevelSegments: 5
      });

      textGeometry.center();

      // Create brighter gradient texture for text
      const canvas = document.createElement('canvas');
      canvas.width = 512;
      canvas.height = 512;
      const context = canvas.getContext('2d');
      const gradient = context.createLinearGradient(0, 0, 0, 512);
      gradient.addColorStop(0, '#FFB3FF'); // Lighter pink
      gradient.addColorStop(1, '#FF4DA6'); // Brighter pink
      context.fillStyle = gradient;
      context.fillRect(0, 0, 512, 512);
      const gradientTexture = new THREE.CanvasTexture(canvas);

      // Create materials for text with increased emissive property
      const textMaterial = new THREE.MeshPhongMaterial({
        color: 0xffffff,
        map: gradientTexture,
        emissive: 0xFF69B4, // Add pink emissive color
        emissiveIntensity: 0.5, // Adjust intensity as needed
        shininess: 100 // Increase shininess for a more polished look
      });

      textMesh = new THREE.Mesh(textGeometry, textMaterial);
      textMesh.position.set(0, -2.5, 0);
      scene.add(textMesh);

      // Add stronger ambient light
      const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
      scene.add(ambientLight);

      // Add directional light
      const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
      directionalLight.position.set(5, 5, 5);
      scene.add(directionalLight);

      // Add point light near the text for extra brightness
      const pointLight = new THREE.PointLight(0xFFB3FF, 1, 10);
      pointLight.position.set(0, -2, 2);
      scene.add(pointLight);
    });

    camera.position.z = 7;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event) => {
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cube);

      if (intersects.length > 0) {
        setIsCubeHovered(true);
        document.querySelector('.cube-container').style.cursor = 'pointer';
      } else {
        setIsCubeHovered(false);
        document.querySelector('.cube-container').style.cursor = 'auto';
      }
    };

    const handleClick = (event) => {
      if (isCubeHovered) {
        onClick();
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('click', handleClick);

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      if (textMesh) {
        textMesh.rotation.y = Math.sin(Date.now() * 0.001) * 0.1;
      }
      renderer.render(scene, camera);
    };
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('click', handleClick);
      currentMount.removeChild(renderer.domElement);
    };
  }, [onClick, isCubeHovered]);

  return <div ref={mountRef} className="cube-container" />;
};

export default ThreeCube;