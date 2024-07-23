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
    scene.background = new THREE.Color('#eee4ee'); // Set background color

    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer();
    renderer.setSize(width, height);
    currentMount.appendChild(renderer.domElement);

    // Cube geometry
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    
    // Load the logo texture
    const textureLoader = new THREE.TextureLoader();
    const logoTexture = textureLoader.load('/logo-pink.png');

    // Create materials for cube faces
    const materials = [
      new THREE.MeshBasicMaterial({ color: '#ed64a6' }), // Front face with logo
      new THREE.MeshBasicMaterial({ color: '#FF66B2' }), // Back face
      new THREE.MeshBasicMaterial({ color: '#FF8CFF' }), // Top face (lighter shade)
      new THREE.MeshBasicMaterial({ color: '#FF0080' }), // Bottom face (darker shade)
      new THREE.MeshBasicMaterial({ color: '#FFFFFF', map: logoTexture  }), // Left face
      new THREE.MeshBasicMaterial({ color: '#B47BFF' })  // Right face
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    let textMesh; // Declare textMesh variable here

    // Load font and create text
    const loader = new FontLoader();
    loader.load('/fonts/helvetiker_regular.typeface.json', (font) => {
      const textGeometry = new TextGeometry("Wendy's Portfolio", {
        font: font,
        size: 0.4,
        height: 0.1
      });

      // Create canvas for linear gradient texture
      const gradientCanvas = document.createElement('canvas');
      gradientCanvas.width = 512;
      gradientCanvas.height = 512;
      const ctx = gradientCanvas.getContext('2d');
      
      const gradient = ctx.createLinearGradient(0, 0, 512, 512);
      gradient.addColorStop(0, '#FF8CFF'); 
      gradient.addColorStop(1, '#FF0080'); 
      
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, 512, 512);
      
      const gradientTexture = new THREE.CanvasTexture(gradientCanvas);
      
      const textMaterial = new THREE.MeshBasicMaterial({ map: gradientTexture });
      textMesh = new THREE.Mesh(textGeometry, textMaterial);
      
      textMesh.position.set(-2, -2.5, 0); // Position text under the cube
      scene.add(textMesh);
    });

    camera.position.z = 7;

    const raycaster = new THREE.Raycaster();
    const mouse = new THREE.Vector2();

    const handleMouseMove = (event) => {
      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cube);

      if (intersects.length > 0) {
        setIsCubeHovered(true);
        document.body.style.cursor = 'pointer'; // Change cursor to pointer
      } else {
        setIsCubeHovered(false);
        document.body.style.cursor = 'auto'; // Reset cursor
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
