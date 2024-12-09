<template>
  <div>
    <!-- Canvas元素，用于渲染三维图形 -->
    <canvas ref="threeCanvas" id="three" class="three-canvas"></canvas>
  </div>
</template>

<script setup>
import { ref, onMounted, watch } from "vue";
import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js"; // 引入OBJ加载器
import { TextureLoader } from "three"; // 引入纹理加载器

// 后期处理相关引入
import { EffectComposer } from "three/examples/jsm/postprocessing/EffectComposer.js";
import { RenderPass } from "three/examples/jsm/postprocessing/RenderPass.js";
import { ShaderPass } from "three/examples/jsm/postprocessing/ShaderPass";
const props = defineProps({
  currentIndex: Number, // 传递当前选中的模型索引
});

// 模型数据
let modelData = [
  {
    name: "1",
    ourl: "./001planet/001-planet/planet001.obj", // obj路径
    textureUrl: "./001planet/001-planet/planet001.png", // 贴图路径
    model: "", // 存储模型的引用
  },
  {
    name: "2",
    ourl: "./002planet/002-planet.obj",
    textureUrl: "./002planet/002-planet.png",
    model: "",
  },
  {
    name: "3",
    ourl: "./003planet/planet003.obj",
    textureUrl: "./003planet/planet003.png",
    model: "",
  },
  {
    name: "4",
    ourl: "./004planet/004-planet.obj",
    textureUrl: "./004planet/planet004.png",
    model: "",
  },
  {
    name: "5",
    ourl: "./005planet/005planet.obj",
    textureUrl: "./005planet/005planet.png",
    model: null,
  },
];

// console.log(111,props.currentIndex)

let scene, renderer, camera, composer;
const models = []; // 存储所有模型的引用

onMounted(() => {
  console.log(props.currentIndex);

  // 获取canvas元素
  const canvas = document.getElementById("three");

  // 创建 WebGL 渲染器
  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
    alpha: true,
  });
  renderer.setSize(900, 900);

  // 创建场景和相机
  scene = new THREE.Scene();
  camera = new THREE.PerspectiveCamera(75, 900 / 900, 0.1, 1000);
  camera.position.x = 18;
  camera.lookAt(0, 0, 0);

  // 添加光源
  const light = new THREE.AmbientLight(0xffffff, 3);
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xdddddd, 1);
  directionalLight.position.set(500, 1000, 500);
  scene.add(directionalLight);

  // 设置 EffectComposer 和 RenderPass
  composer = new EffectComposer(renderer);
  const renderPass = new RenderPass(scene, camera);
  composer.addPass(renderPass); // 添加默认的渲染Pass

  // 添加自定义的着色器效果
  const saturationShader = {
    uniforms: {
      tDiffuse: { value: null },
      amount: { value: 1 }, // 增加饱和度的因子
    },
    vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform sampler2D tDiffuse;
      uniform float amount;
      varying vec2 vUv;

      vec3 applySaturation(vec3 color, float saturation) {
        float intensity = dot(color, vec3(0.299, 0.587, 0.114));
        return mix(vec3(intensity), color, saturation);
      }

      void main() {
        vec4 texColor = texture2D(tDiffuse, vUv);
        vec3 color = applySaturation(texColor.rgb, amount);
        gl_FragColor = vec4(color, texColor.a);
      }
    `,
  };

  const saturationPass = new ShaderPass(saturationShader);
  composer.addPass(saturationPass);

  // 加载所有模型
  modelData.forEach((data, index) => loadModel(data, index));

  // 渲染循环
  animate(); // 启动动画循环
});

// 加载模型函数
function loadModel(data, index) {
  const { name, ourl, textureUrl } = data;

  console.log(name);

  // 创建纹理加载器
  const textureLoader = new TextureLoader();
  textureLoader.load(textureUrl, (texture) => {
    const material = new THREE.MeshStandardMaterial({
      color: 0xffffff,
      map: texture,
    });

    const objLoader = new OBJLoader();
    objLoader.load(
      ourl,
      (obj) => {
        obj.name = name;
        data.model = obj;

        obj.traverse((child) => {
          if (child.isMesh) {
            child.material = material;
          }
        });

        scene.add(obj);
        models[index] = obj;
        // models.push(obj);  // 存储加载的模型引用
        obj.visible = false; // 初始状态下所有模型不可见
      },
      (xhr) => {
        // console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
      },
      (error) => {
        console.error("An error happened while loading the model:", error);
      }
    );
  });
}

// 渲染循环
const animate = () => {
  requestAnimationFrame(animate);

  // 根据 currentIndex 控制显现的模型
  models.forEach((model, index) => {
    if (model) {
      model.visible = index === props.currentIndex; // 只显示 currentIndex 对应的模型
      if (model.visible) {
        model.rotation.y += 0.01; // 让当前显示的模型旋转
      }
    }
  });

  // 使用 EffectComposer 渲染
  composer.render(); // 使用 composer 来渲染场景，而不是直接使用 renderer.render()
};

// 监听 currentIndex 的变化
// watch(() => props.currentIndex, (newIndex) => {
//   // 当 currentIndex 变化时，更新模型的可见性
//   models.forEach((model, index) => {
//     model.visible = (index === newIndex);
//   });
// });
</script>

<style scoped>
.three-canvas {
  width: 100%;
  height: 100%;
}
</style>
