import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import sunTexture from "./assets/sun.jpg";
import earthTexture from "./assets/earth.jpg";
import mercuryTexture from "./assets/mercury.jpeg";
import venusTexture from "./assets/venus.jpeg";
import marsTexture from "./assets/mars.jpeg";
import starTexture from "./assets/bg.jpg";
import saturnTexture from "./assets/saturn.jpeg";
import saturnRingTexture from "./assets/saturn-ring.jpeg";
import jupiterTexture from "./assets/jupiter.jpg";
import uranusTexture from "./assets/uranus.jpeg";
import neptuneTexture from "./assets/neptune.jpeg";
import uranusRingTexture from "./assets/uranus-ring.jpg";

const renderer = new THREE.WebGL1Renderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const scene = new THREE.Scene();
scene.background = new THREE.CubeTextureLoader().load([
	starTexture, 
	starTexture, 
	starTexture, 
	starTexture, 
	starTexture, 
	starTexture
]);

const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);
const orbit = new OrbitControls(camera, renderer.domElement);
orbit.update();
camera.position.set(0, 0, 10);

const textureLoader = new THREE.TextureLoader();
const sphereGeo = new THREE.SphereGeometry(2);
const sphereMesh = new THREE.MeshBasicMaterial({
	map: textureLoader.load(sunTexture),
});


const sun = new THREE.Mesh(sphereGeo, sphereMesh);
scene.add(sun);
sun.position.set(0, 0, 0);

const pointLight = new THREE.PointLight(0xffffff, 2, 300);
scene.add(pointLight);
pointLight.position.set(0, 0, 0);

const createPlanet = (size, image, position,ring) => {
	const spehereGeometery = new THREE.SphereGeometry(size);
	const sphereMaterial = new THREE.MeshStandardMaterial({
		map: textureLoader.load(image),
	});
	const sphere = new THREE.Mesh(spehereGeometery, sphereMaterial);
	const obj = new THREE.Object3D();
	obj.add(sphere);
	if(ring){
		const ringGeometry = new THREE.RingGeometry(
			ring.innerRadius,
			ring.outerRadius,
			32
		);
		const ringMaterial = new THREE.MeshBasicMaterial({
			map : textureLoader.load(ring.texture),
			side:THREE.DoubleSide
		});
		const ringMesh = new THREE.Mesh(ringGeometry,ringMaterial);
		obj.add(ringMesh);
		ringMesh.position.x = position;
		ringMesh.rotation.x = -0.5*Math.PI;
	}
	scene.add(obj);
	sphere.position.set(...position);
	return { sphere, obj };
};

// planets
const mercury = createPlanet(1, mercuryTexture, [5, -1, 0]);
const venus = createPlanet(1, venusTexture, [10, -1, 0]);
const earth = createPlanet(1, earthTexture, [15, -1, 0]);
const mars = createPlanet(1, marsTexture, [20, -1, 0])
const jupiter = createPlanet(3, jupiterTexture, [25, -1, 0]);
const saturn = createPlanet(2, saturnTexture, [30, -1, 0],{
	innerRadius:10,
	outerRadius:20,
	texture:saturnRingTexture
});
const uranus = createPlanet(7, uranusTexture,[35, -1, 0], {
    innerRadius: 7,
    outerRadius: 12,
    texture: uranusRingTexture
});
const neptune = createPlanet(1, neptuneTexture, [40, -1, 0]);


function animate() {
	//rotation
	mercury.sphere.rotateY(0.005);
	venus.sphere.rotateY(0.005);
	earth.sphere.rotateY(0.005);
	mars.sphere.rotateY(0.005);
	jupiter.sphere.rotateY(0.005);
	saturn.sphere.rotateY(0.005);
	uranus.sphere.rotateY(0.005);
	neptune.sphere.rotateY(0.005);

	// revolution
	mercury.obj.rotateY(0.07);
	venus.obj.rotateY(0.02);
	earth.obj.rotateY(0.005);
	mars.obj.rotateY(0.001);
	jupiter.obj.rotateY(0.004);
	saturn.obj.rotateY(0.003);
	uranus.obj.rotateY(-0.005);
	neptune.obj.rotateY(0.006);

	renderer.render(scene, camera);
}


renderer.setAnimationLoop(animate);

window.addEventListener("resize", function () {
	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
});