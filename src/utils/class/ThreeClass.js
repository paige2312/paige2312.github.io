import * as THREE from "three";

import {
  OrbitControls
} from "three/examples/jsm/controls/OrbitControls.js";
// 后期处理相关引入
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { ShaderPass } from 'three/examples/jsm/postprocessing/ShaderPass';

class ThreeClass {
  constructor() {
    let pageObj = {
      isStats: false,

      isFog: false,
      isControlRotate: false,

      isLimitControl: false,

      isHalfRenderer: false,

      groundMethod: 0,
      skyboxMethod: 0,
      skyboxOne: "",
      skybox: [],

      renderEnabled: false,

    };
    this.pageObj = Object.assign(pageObj, {
      skyboxMethod: 2,
      isHalfRenderer: true,
      isStats: false,
      renderEnabled: true,
    });

    //获取界面大小
    this.W = 0;
    this.H = 0;

    this.resizeFunc = "";

    //动画计时
    this.delta = "";
    this.clock = new THREE.Clock();

    //初始化
    this.loadTime = 100; //加载时间计时
    this.renderOrder = 100;

    //基础
    this.container = "";
    this.scene = "";
    this.camera = ""; //场景摄像机
    this.controls = ""; //控制
    this.renderer = "";

    //是否
    this.flagLoadData = false; //加载数据
    this.flagLoad = false; //是否加载完成
    this.flagHalf = false;
    this.interval_load = "";

    //启用
    this.renderEnabled =
      this.pageObj.renderEnabled != "" ? this.pageObj.renderEnabled : false;

    this.frameId = "";
    this.timeoutResize = "";
    this.timeoutRender = "";
    this.timeRender = 3000;

    this.flagRender = false;
    this.renderIndex = 0;
    this.renderNum = 1;

    this.onWindowResize = this.onWindowResize.bind(this);
  }

  load() {
    this.init();
  }

  init() {
    this.initData();

    this.interval_load = setInterval(() => {
      if (this.flagLoadData) {
        clearInterval(this.interval_load);

        this.initCanvas();
        this.initScene();
        this.initCamera();
        this.initLight();
        // this.initGround();
        this.initFace();

        this.initControls();
        this.initRenderer();
        this.initModel();
        this.initShader();

        this.flagLoad = true;

        //窗口变化
        window.addEventListener(
          "resize", this.onWindowResize,
          false
        );

        this.start();
        this.animate();

        // 设置 EffectComposer 和 RenderPass
        this.composer = new EffectComposer(this.renderer);
        const renderPass = new RenderPass(this.scene, this.camera);
        this.composer.addPass(renderPass);  // 添加默认的渲染Pass

        // 添加自定义的着色器效果
        const saturationShader = {
          uniforms: {
            tDiffuse: { value: null },
            amount: { value: 1 },  // 增加饱和度的因子
          },
          vertexShader: `
      varying vec2 vUv;
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 2.0);
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
        this.composer.addPass(saturationPass);
      }
    }, this.loadTime);
  }

  initData() { }

  initFace() { }

  initModel() { }

  useModel() { }

  initShader() { }

  start() { }

  //画布
  initCanvas() {
    this.container = document.getElementById("div_canvas3d");
    this.getWidthHeight();
    // console.log(this.W, this.H);
  }

  //场景
  initScene() {
    this.scene = new THREE.Scene();
  }

  //相机
  initCamera() {
    this.camera = new THREE.PerspectiveCamera(75, this.W / this.H, 0.01, 100000);
    this.camera.position.x = 18;
    this.camera.lookAt(0, 0, 0);

    // this.camera.position.set(-357, 96, 166);
    // this.camera.position.set(0, 0, 1);
    
  }

  //灯光
  initLight() {
    // this.aLight = new THREE.AmbientLight(0xffffff, 0.3); //, 0.3
    // this.scene.add(this.aLight.clone());

    // this.dLight = new THREE.DirectionalLight(0xffffff, 0.8 * Math.PI);
    // this.dLight.position.set(0.5, 0, 0.866);
    // // this.dLight.position.set(100, 200, 100);
    // // this.dLight.castShadow = true;
    // this.scene.add(this.dLight.clone());

    // // 添加光源
    // const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    // this.scene.add(ambientLight);

    // const pointLight = new THREE.PointLight(0xffffff, 1);
    // pointLight.position.set(150, 150, 150);
    // this.scene.add(pointLight);

    // 添加光源
    const light = new THREE.AmbientLight(0xffffff, 4);
    this.scene.add(light);

    const directionalLight = new THREE.DirectionalLight(0xdddddd, 1);
    directionalLight.position.set(300, 500, 300);
    this.scene.add(directionalLight);



  }

  //广场
  initGround() {
    //模式
    switch (this.pageObj.groundMethod) {
      case 0:
        //网格
        let helper = new THREE.GridHelper(5000, 100);
        this.scene.add(helper);

        break;
    }
  }

  //控制器
  initControls() {
    this.controls = new OrbitControls(this.camera, this.container);
    this.controls.minDistance = 0.1;
    this.controls.maxDistance = 60;
  }

  //渲染器
  initRenderer() {

    this.renderer = new THREE.WebGLRenderer({
      antialias: true,
      logarithmicDepthBuffer: true,
      alpha: true
    });

    this.renderer.setSize(this.W, this.H);
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.container.appendChild(this.renderer.domElement);

  }

  //动画
  animate() {
    this.frameId = requestAnimationFrame(this.animate.bind(this));

    this.render();
    this.stats ? this.stats.update() : "";
  }

  //渲染
  render() {
    if (this.flagRender) {
      this.flagRender = false;
    }

    if (this.renderIndex == this.renderNum) {
      this.flagRender = true;
      this.renderIndex = 0;
    }

    if (this.flagRender) {
      this.delta = this.clock.getDelta();

      this.composer ? this.composer.render(this.delta) : "";

      this.renderer.render(
        this.scene, this.camera
      );


    }

    this.renderIndex++;

    //this.camera.position.z > 0 ? this.controls.saveState() : this.controls.reset();
    // console.log(this.camera.position)
  }

  ///////////////其他///////////////
  onWindowResize() {
    if (this.timeoutResize) clearTimeout(this.timeoutResize);
    this.timeoutResize = setTimeout(() => {
      this.getWidthHeight();

      if (this.camera) {
        this.camera.aspect = this.W / this.H;
        this.camera.updateProjectionMatrix();
      }

      this.renderer ? this.renderer.setSize(this.W, this.H) : "";

      this.resizeFunc && this.resizeFunc();
    }, 200);
  }

  getWidthHeight() {
    // this.W = window.innerWidth;
    // this.H = window.innerHeight;
    this.W = this.container.offsetWidth;
    this.H = this.container.offsetHeight;
  }

  addOrder() {
    //渲染层级
    this.renderOrder += 10;
    return this.renderOrder;
  }
}

export default ThreeClass;