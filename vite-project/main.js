import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls'; 
import * as dat from 'dat.gui';
import {GLTFLoader} from 'three/examples/jsm/loaders/GLTFLoader';
import sky from './assets/sky.webp';

// renderer
const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth,window.innerHeight);
document.body.appendChild(renderer.domElement);
renderer.shadowMap.enabled = true;
// renderer.setClearColor(0xffea20);


// axes helper
const axesHelper = new THREE.AxesHelper(3);

// gridhelper
const gridHelper = new THREE.GridHelper(5,5);

// graphical helper
const gui = new dat.GUI();
const options = {
  sphereColor : "#ffffff",
  wireframe : false,
  speed : 0.01
}

gui.addColor(options,"sphereColor").onChange((e)=>{
  sphere.material.color.set(e);
})

gui.add(options,"wireframe").onChange((e)=>{
  sphere.material.wireframe = e;
})

gui.add(options,"speed",0,0.1);

//scene
const scene = new THREE.Scene();
scene.add(axesHelper);
scene.add(gridHelper);

// blender vrun 3d model 
const loader = new GLTFLoader();
class Moon{
  constructor(){
    loader.load("assets/moon/scene.gltf",(gltf)=>{
      scene.add(gltf.scene);
      gltf.scene.position.set(0,0,0);
    }, undefined, function ( error ) {
      console.error( error );
    } );
  }
}
const moon = new Moon();


// camera types->Perspective and Orthogonal
const camera = new THREE.PerspectiveCamera(85,window.innerWidth/window.innerHeight,0.1,1000);
const orbit = new OrbitControls(camera,renderer.domElement);
camera.position.set(1,2,5);
orbit.update();

// geometry
const boxGeometry = new THREE.BoxGeometry();
const boxMaterial = new THREE.MeshStandardMaterial({color:"skyblue"});
const box = new THREE.Mesh(boxGeometry,boxMaterial);

// plane
const planeGeometry = new THREE.PlaneGeometry(5,5);
const planeMaterial = new THREE.MeshStandardMaterial({color:"white"});
const plane = new THREE.Mesh(planeGeometry,planeMaterial);
plane.rotation.x = Math.PI*(-0.5);
plane.receiveShadow = true;

// sphere
const sphereGeometry = new THREE.SphereGeometry(1,10,10);
const sphereMaterial = new THREE.MeshStandardMaterial({color:"purple"});
const sphere = new THREE.Mesh(sphereGeometry,sphereMaterial);
sphere.position.set(-2,2,0);
sphere.castShadow = true;

// light
const ambientLight = new THREE.AmbientLight(0x333333);
const directionalLight = new THREE.DirectionalLight(0xffffff);
directionalLight.position.set(-1.7,4,0);
const dLightHelper = new THREE.DirectionalLightHelper(directionalLight);
directionalLight.castShadow = true;

//texture loader
const textureLoader = new THREE.TextureLoader();
scene.background = textureLoader.load(sky);

scene.add(box);
scene.add(plane);
scene.add(sphere);
scene.add(ambientLight);
scene.add(directionalLight);
scene.add(dLightHelper);

// let speed = 0.01;  
let step = 0;


function animate(time){
  console.log(box.rotation.y);
  box.rotation.y += time/1000;
  box.rotation.x += time/1000;
  step += options.speed;
  sphere.position.y = Math.abs(Math.sin(step)) * 3;
  renderer.render(scene,camera);
}

renderer.setAnimationLoop(animate);
