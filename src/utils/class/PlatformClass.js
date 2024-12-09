import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import { TransformControls } from 'three/examples/jsm/controls/TransformControls.js';
import ThreeClass from "./ThreeClass";


class SceneClass extends ThreeClass {
  constructor(data) {
    super();

    this.data = data.data;
    this.arrCollect = data.arrCollect;

    this.object = "";
    this.group = new THREE.Group();

    this.textureLoader = new THREE.TextureLoader();

    this.vmLayout = "";
    this.dataLayout = "";

    this.manager = "";
    this.material = "";

    this.transformControls = "";
    this.currentObject = "";

    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.arr = [];

  }

  /**数据*/
  initData() {
    this.flagLoadData = true;
  }

  initModel() {

    // let arrCollect = sessionStorage.getItem("arrCollect");
    // arrCollect = JSON.parse(arrCollect);
    // console.log(arrCollect);

    // if (this.arrCollect) {
    //   for (let i = 0; i < this.arrCollect.length; i++) {
    //     let ids = this.arrCollect[i] - 0;

    //     for (let j = 0; j < this.data.length; j++) {
    //       let id = this.data[j].id;

    //       if (ids == id) {
    //         this.addModel(this.data[j]);
    //       }
    //     }
    //   }
    // }


  }

  deleteModel(id) {
    let arr = [];
    for (let i = 0; i < this.arr.length; i++) {
      let ids = this.arr[i].ids - 0;

      if (id == ids) {
        this.scene.remove(this.arr[i]);
      } else {
        arr.push(this.arr[i]);
      }
    }

    this.arr = arr;
  }

  addModel(id) {
    // console.log(data);

    console.log(id);

    let data = "";
    for (let i = 0; i < this.data.length; i++) {
      let ids = this.data[i].id;

      if (ids == id) {
        data = this.data[i];
      }
    }

    if (data) {
      const { id, name, modelurl, textureurl } = data;

      // 创建纹理加载器
      this.textureLoader.load(textureurl, (texture) => {
        const material = new THREE.MeshStandardMaterial({
          color: 0xffffff,
          map: texture,
        });

        const objLoader = new OBJLoader();
        objLoader.load(
          modelurl,
          (obj) => {
            obj.name = name;

            obj.traverse((child) => {
              if (child.isMesh) {
                child.material = material;
              }
            });

            obj.ids = id;
            this.scene.add(obj);
            this.object = obj;

            this.arr.push(this.object);
          },
          (xhr) => {
            console.log(`${(xhr.loaded / xhr.total) * 100}% loaded`);
          },
          (error) => {
            console.error('An error happened while loading the model:', error);
          }
        );
      });
    }

  }

  start() {
    const helper = new THREE.GridHelper(150, 100);
    // helper.position.y = - 199;
    helper.position.y = - 1;
    helper.material.opacity = 0.25;
    helper.material.transparent = true;
    this.scene.add(helper);

    // 初始化 TransformControls 控制器
    this.transformControls = new TransformControls(this.camera, this.renderer.domElement);
    // this.scene.add(this.transformControls);
    this.transformControls.setSize(1.5);  // 将三色轴的大小设置为1.5倍

    const gizmo = this.transformControls.getHelper();
    this.scene.add(gizmo);

    // 禁用 OrbitControls 当用户正在使用 TransformControls
    this.transformControls.addEventListener('dragging-changed', (event) => {
      this.controls.enabled = !event.value;
    });

    window.addEventListener('keydown', (event) => {
      switch (event.key) {
        case 'q':
          this.transformControls.setSpace(this.transformControls.space === 'local' ? 'world' : 'local');
          break;
        case 'w':
          this.transformControls.setMode('translate');
          break;
        case 'e':
          this.transformControls.setMode('rotate');
          break;
        case 'r':
          this.transformControls.setMode('scale');
          break;
        case '+':
        case '=':
          this.transformControls.setSize(this.transformControls.size + 0.1);
          break;
        case '-':
        case '_':
          this.transformControls.setSize(Math.max(this.transformControls.size - 0.1, 0.1));
          break;
        case 'x':
          this.transformControls.showX = !this.transformControls.showX;
          break;
        case 'y':
          this.transformControls.showY = !this.transformControls.showY;
          break;
        case 'z':
          this.transformControls.showZ = !this.transformControls.showZ;
          break;
        case 'Escape':
          this.transformControls.reset();
          break;
        default:
          break;
      }
    });

    window.addEventListener('click', this.onMouseClick.bind(this), false);

  }

  // 处理鼠标点击事件，用于选择模型
  onMouseClick(event) {
    let mainCanvas = document.getElementsByTagName("canvas")[0];
    this.mouse.x = ((event.clientX - mainCanvas.getBoundingClientRect().left) / mainCanvas.offsetWidth) * 2 - 1;
    this.mouse.y = -((event.clientY - mainCanvas.getBoundingClientRect().top) / mainCanvas.offsetHeight) * 2 + 1;
    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.arr);
    // console.log(intersects)
    if (intersects.length > 0) {
      const selectedObject = intersects[0].object;

      if (this.currentObject !== selectedObject) {
        if (this.currentObject) {
          this.transformControls.detach(this.currentObject); // 分离旧模型的 gizmo
        }
        this.currentObject = selectedObject;
        this.transformControls.attach(this.currentObject); // 附加 gizmo
      }
    } else {
      this.transformControls.detach(this.currentObject);
    }
  };


  initControls() {
    // this.camera.position.set(3, 3, 3);
    // this.camera.position.set(
    //   -10.350237674218075,
    //   2.5749242828865792,
    //   2.9804674422183681
    // );
    super.initControls();

  }

  render() {
    super.render();
  }

}

export default SceneClass;
