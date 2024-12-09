<script setup>
import { reactive, onMounted } from "vue";
import Navbar from "@/components/Navbar.vue";
import { useRoute } from "vue-router";
import SceneClass from "@/utils/class/SceneClass.js";
import dataA from "@/utils/data.js";
import dataB from "@/utils/dataBack.js";

let vmdata = reactive({
  pngurl: "",
  bpng: "/Homepage-1-1/linear-bg.png",
  isCollect: false,
  collectbtn: "/Homepage-1-1/collectbutton.png",
  nocollectbtn: "/Homepage-1-1/collect-none.png",
});

const route = useRoute();
// console.log(route.params.id); // 这里的id是你传递的参数
const id = route.params.id - 0;

let data = dataA.data;
let dataBack = dataB.dataBack;

let contentData = 0;
let contentBack = 0;
for (let i = 0; i < data.length; i++) {
  let dataOne = data[i];

  if (id == dataOne.id) {
    contentData = dataOne;

    let fid = dataOne.fid;
    for (let j = 0; j < dataBack.length; j++) {
      let dataBackOne = dataBack[j];
      if (fid == dataBackOne.id) {
        contentBack = dataBackOne;
      }
    }
  }
}

let threeApp = "";
if (contentData != 0) {
  threeApp = new SceneClass({
    data: contentData,
  });
  threeApp.load();

  vmdata.pngurl = contentData.pngurl;
  vmdata.text = contentData.text;
  vmdata.infourl = contentData.infourl;

  vmdata.bpng = contentBack.bpng;
}

const upScale = () => {
  if (threeApp) {
    threeApp.upScale();
  }
};

const downScale = () => {
  if (threeApp) {
    threeApp.downScale();
  }
};

const checkCollect = () => {
  let arrCollect = sessionStorage.getItem("arrCollect");
  arrCollect = JSON.parse(arrCollect);
  console.log(arrCollect);

  let num = 1;
  if (arrCollect) {
    for (let i = 0; i < arrCollect.length; i++) {
      let ids = arrCollect[i];

      if (id == ids) {
        num = 2;
      }
    }
  } else {
    num = 0;
  }

  return num;
};

let num = checkCollect();
if (num == 2) {
  vmdata.isCollect = true;
}
// sessionStorage.removeItem("arrCollect");
//收藏物品
const collectItem = () => {
  let num = checkCollect();

  if (num == 0) {
    let arr = [];
    arr.push(id);
    sessionStorage.setItem("arrCollect", JSON.stringify(arr));

    vmdata.isCollect = true;
  } else if (num == 1) {
    let arrCollect = sessionStorage.getItem("arrCollect");
    arrCollect = JSON.parse(arrCollect);
    arrCollect.push(id);
    sessionStorage.setItem("arrCollect", JSON.stringify(arrCollect));

    vmdata.isCollect = true;
  } else {
    //取消
    let arrCollect = sessionStorage.getItem("arrCollect");
    arrCollect = JSON.parse(arrCollect);

    let arr = [];
    for (let i = 0; i < arrCollect.length; i++) {
      let ids = arrCollect[i] - 0;

      if (id != ids) {
        arr.push(ids);
      }
    }
    arrCollect = arr;
    sessionStorage.setItem("arrCollect", JSON.stringify(arrCollect));

    vmdata.isCollect = false;
  }
};
</script>
<template>
  <Navbar />

  <!----------------------------保持不变的复用---------------------------------->
  
  <img src="/Homepage-1-1/listen.png" class="listen" />
  <img src="/Homepage-1-1/zoomin.png" class="zoomin mp" @click="upScale()" />
  <img src="/Homepage-1-1/zoomout.png" class="zoomout mp" @click="downScale()" />
  <img
    :src="vmdata.bpng"
    class="linear-bg"
    style="position: absolute; width: 1920px; height: 1080px; z-index: 0"
  />

  <img
    src="/Homepage-1-1/P1split01.png"
    class="P1split01"
    style="
      position: absolute;
      width: 715.77px;
      height: 472.15px;
      top: 156px;
      left: 931.56px;
      z-index: 1;
    "
  />
  <img
    @click="collectItem"
    class="collectbutton mp"
    :src="vmdata.isCollect ? vmdata.collectbtn : vmdata.nocollectbtn"
  />
  <!-----------------src="/Homepage-1-1/collectbutton.png"--------------- >

  <!----------------------------保持不变的复用---------------------------------- >
  <!----------------------------threejs canva大小---------------------------------->
  <div id="div_canvas3d" class="threejs-container"></div>

  <!----------------------------点击MEC.PNG对应展示---------------------------------->
  <div class="area">
    <p>信息 A:三维模型</p>
    <p class="note-text">
      {{ vmdata.text }}
      <!-- “The Worry Filter absorbs the sadness and troubles, transforming them into large
      cups of milk tea, brimming with happiness.”
 -->
    </p>
    <div class="splited-img">
      <img :src="vmdata.pngurl" class="mec01" />

      <!-- <img class="mec01" src="/Homepage-1-1/mec01.png" />
      <img class="mec02" src="/Homepage-1-1/mec02.png" />
      <img class="mec03" src="/Homepage-1-1/mec03.png" />
      <img class="mec04" src="/Homepage-1-1/mec04.png" />
      <img class="mec05" src="/Homepage-1-1/mec05.png" /> -->
    </div>
    <div class="object-label">
      <img :src="vmdata.infourl" class="label001" />
    </div>
  </div>
</template>
<style scoped>
@font-face {
  font-family: "Audiowide";
  /* 自定义字体名称 */
  src: url("@/assets/front/Audiowide-Regular.ttf") format("truetype");
  /* 确保格式正确 */
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "JejuHallasan";
  /* 自定义字体名称 */
  src: url("@/assets/front/JejuHallasan-Regular.ttf") format("truetype");
  /* 确保格式正确 */
  font-weight: normal;
  font-style: normal;
}

.rect {
  position: absolute;
  width: 100vw;
  height: 52px;
  left: 0px;
  top: 1050px;
  background: rgba(198, 206, 226, 0.33);
  z-index: 10;
}
.listen {
  position: absolute;
  width: 67px;
  height: 67px;
  left: 80px;
  top: 104px;
  z-index: 6;
}
.zoomin {
  position: absolute;
  width: 67px;
  height: 67px;
  left: 159px;
  top: 104px;
  z-index: 6;
}
.zoomout {
  position: absolute;
  width: 67px;
  height: 67px;
  left: 239px;
  top: 104px;
  z-index: 6;
}
.note-text {
  position: absolute;
  width: 907px;
  height: 43px;
  left: 81px;
  top: 906px;

  font-family: "JejuHallasan";
  font-style: normal;
  font-weight: 400;
  font-size: 25px;
  line-height: 25px;
  letter-spacing: 0.05em;

  color: #ffffff;
}
.splited-img {
  /* position: absolute;
  width: 577px;
  height: 411px;
  left: 932px;
  top: 157px;
  z-index: 5; */

  position: absolute;
  width: 715.77px;
  height: 472.15px;
  top: 156px;
  left: 931.56px;
  z-index: 1;
}

.mec01 {
  position: absolute;
  /* width: 205px;
  height: 222px; */
  /* left: -6px;
  top: -12px; */
}
.mec02 {
  position: absolute;
  width: 322px;
  height: 284px;
  left: -13px;
  top: 83px;
}
.mec03 {
  position: absolute;
  width: 418px;
  height: 313px;
  left: 94px;
  top: 63px;
}
.mec04 {
  position: absolute;
  width: 208px;
  height: 232px;
  left: 371px;
  top: 55px;
}
.mec05 {
  position: absolute;
  width: 144px;
  height: 132px;
  left: 401px;
  top: 26px;
}
.label001 {
  position: absolute;
  width: 357px;
  height: 568px;
  left: 1500px;
  top: 390px;
  z-index: 5;
}
.collectbutton {
  position: absolute;
  width: 41px;
  height: 41px;
  left: 1778px;
  top: 865px;
  z-index: 6;
}
.threejs-container {
  z-index: 4;

  position: absolute;
  width: 900px;
  height: 680px;
  left: 83px;
  top: 125px;
}

.mp {
  cursor: pointer;
}
</style>
