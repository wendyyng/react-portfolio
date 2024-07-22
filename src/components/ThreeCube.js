import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ThreeCube = ({ onClick }) => {
  const mountRef = useRef(null);

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
    const logoTexture = textureLoader.load('/maskable_icon_x192.png'); // Path to your logo image

    // Create a gradient texture for the transition color
    const gradientCanvas = document.createElement('canvas');
    gradientCanvas.width = 512;
    gradientCanvas.height = 512;
    const ctx = gradientCanvas.getContext('2d');
    
    const gradient = ctx.createLinearGradient(0, 0, 512, 512);
    gradient.addColorStop(0, '#B47BFF'); 
    gradient.addColorStop(1, '#FF66B2'); 
    
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, 512, 512);
    
    const gradientTexture = new THREE.CanvasTexture(gradientCanvas);

    // Materials: one side with the logo, others with the gradient
    const materials = [
      new THREE.MeshBasicMaterial({ color: 0xffffff, map: logoTexture }), // Front face with logo
      new THREE.MeshBasicMaterial({ map: gradientTexture  }), // Back face
      new THREE.MeshBasicMaterial({ map: gradientTexture }), // Top face
      new THREE.MeshBasicMaterial({ map: gradientTexture }), // Bottom face
      new THREE.MeshBasicMaterial({ color: 0xffffff, map: logoTexture }), // Left face
      new THREE.MeshBasicMaterial({ map: gradientTexture })  // Right face
    ];

    const cube = new THREE.Mesh(geometry, materials);
    scene.add(cube);

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      cube.rotation.x += 0.01;
      cube.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();

    // Handle click event
    const handleClick = (event) => {
      const mouse = new THREE.Vector2();
      const raycaster = new THREE.Raycaster();

      // Calculate mouse position in normalized device coordinates
      mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouse.y = - (event.clientY / window.innerHeight) * 2 + 1;

      raycaster.setFromCamera(mouse, camera);
      const intersects = raycaster.intersectObject(cube);

      if (intersects.length > 0) {
        onClick();
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
      currentMount.removeChild(renderer.domElement);
    };
  }, [onClick]);

  return <div ref={mountRef} className="cube-container" style={{ width: '100vw', height: '100vh' }} />;
};

export default ThreeCube;
