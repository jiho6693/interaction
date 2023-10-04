import * as THREE from 'three';

// Scene 생성하기
var scene = new THREE.Scene();

// 카메라 생성하기
var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 5;

// Renderer 생성하기
var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Vimeo API로부터 영상 가져오기
var vimeoID = "747416442";
var vimeoURL = "https://player.vimeo.com/video/" + vimeoID;
var video = document.createElement('video');
video.src = vimeoURL;

// VideoTexture 생성하기
var texture = new THREE.VideoTexture(video);
texture.minFilter = THREE.LinearFilter;
texture.magFilter = THREE.LinearFilter;
// texture.format = THREE.RGBFormat;

// 오브젝트 생성하기
var geometry = new THREE.BoxGeometry(1, 1, 1);
var material = new THREE.MeshBasicMaterial({ map: texture });
var mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

const light = new THREE.AmbientLight( 0x404040 ); // soft white light
scene.add( light );

// 비디오 재생하기
video.play();

// 애니메이션 함수 생성하기
function animate() {
    requestAnimationFrame(animate);
    mesh.rotation.x += 0.01;
    mesh.rotation.y += 0.01;
    renderer.render(scene, camera);
}
animate();

