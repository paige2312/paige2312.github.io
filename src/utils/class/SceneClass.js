import * as THREE from "three";
import { OBJLoader } from "three/examples/jsm/loaders/OBJLoader.js";
import ThreeClass from "./ThreeClass";


class SceneClass extends ThreeClass {
  constructor(data) {
    super();

    this.data = data;

    this.object = "";
    this.group = new THREE.Group();

    this.textureLoader = new THREE.TextureLoader();

    this.vmLayout = "";
    this.dataLayout = "";

    this.manager = "";
    this.material = "";

    this.currentScale = 1;
    this.topScale = 1.7;
    this.bottomScale = 0.3;
    this.scaleStep = 0.1;

  }

  /**数据*/
  initData() {
    this.flagLoadData = true;
  }

  initModel() {
    const { name, modelurl, textureurl } = this.data.data;

    // 创建纹理加载器
    this.textureLoader.load(textureurl, (texture) => {
      console.log(textureurl)
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

          let size = 1.5;
          obj.scale.set(size, size, size);

          this.scene.add(obj);

          this.object = obj;
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

  start() {

  }

  initControls() {
    // this.camera.position.set(3, 3, 3);
    // this.camera.position.set(
    //   -10.350237674218075,
    //   2.5749242828865792,
    //   2.9804674422183681
    // );
    super.initControls();

  }

  //放大
  upScale() {
    if (this.object) {
      let flag = false;
      if (this.currentScale + this.scaleStep > this.topScale) {
        flag = true;
      }

      if (!flag) {
        this.currentScale += this.scaleStep;
        this.object.scale.set(this.currentScale, this.currentScale, this.currentScale);
      }
    }

  }

  //缩小
  downScale() {
    if (this.object) {
      let flag = false;
      if (this.currentScale - this.scaleStep < this.bottomScale) {
        flag = true;
      }

      if (!flag) {
        this.currentScale -= this.scaleStep;
        this.object.scale.set(this.currentScale, this.currentScale, this.currentScale);
      }
    }
  }

  render() {
    super.render();
  }

}

export default SceneClass;
