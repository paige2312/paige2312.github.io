<script setup>
import { ref, reactive, onMounted } from "vue";
import texture from "@/assets/homepage/texture.png";
import Navbar from "@/components/Navbar.vue";
import { useRoute } from "vue-router";
import PlatformClass from "@/utils/class/PlatformClass.js";
import dataA from "@/utils/data.js";
import dataB from "@/utils/icon.js";

// //删除图标路径
// {

//     thumurl: "./icon/delete.obj",
// },
// //背包收起时向上的按钮
// {

//     thumurl: "./icon/button-up.obj",
// },

let data = dataA.data;
let icon = dataB.icon;

const myElement1 = ref(null);
const myElement2 = ref(null);

let vmdata = reactive({
  iconFilter: [],
  isShow: true,
  btndown: "/World/button-down.png",
  btnup: "icon/button-up.png",
});

let arrCollect = sessionStorage.getItem("arrCollect");
arrCollect = JSON.parse(arrCollect);

if (arrCollect) {
  for (let i = 0; i < arrCollect.length; i++) {
    let ids = arrCollect[i] - 0;

    for (let j = 0; j < icon.length; j++) {
      let id = icon[j].id;

      if (ids == id) {
        vmdata.iconFilter.push(icon[j]);
      }
    }
  }
}

let threeApp = "";
threeApp = new PlatformClass({
  data: data,
  // arrCollect: arrCollect,
});
threeApp.load();

const deleteIcon = (id) => {
  vmdata.iconFilter = vmdata.iconFilter.filter((item) => {
    return item.id != id;
  });

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

  if (threeApp) {
    threeApp.deleteModel(id);
  }
};


const addModel = (id) => {
  if (threeApp) {
    threeApp.addModel(id);
  }
};

const downList = () => {
  vmdata.isShow = !vmdata.isShow;

  if (vmdata.isShow) {
    myElement1.value.classList.remove("note-none");
    myElement2.value.classList.remove("note-none");
    myElement1.value.classList.add("note-show");
    myElement2.value.classList.add("note-show");
  } else {
    myElement1.value.classList.remove("note-show");
    myElement2.value.classList.remove("note-show");
    myElement1.value.classList.add("note-none");
    myElement2.value.classList.add("note-none");
  }
};




</script>
<template>
  <Navbar />
  <div class="container">
    <!--bag tag -->
    <img
      src="/World/bag tag.png"
      class="bag-tag"
      style="
        position: absolute;
        width: 449px;
        height: 76px;
        left: 0px;
        top: 78px;
        z-index: 2;
      "
    />

    <!---bg-->
    <img
      src="/World/worldbg.png"
      class="worldbg"
      style="
        position: absolute;
        width: 100vw;
        height: 1080px;
        left: 0px;
        top: 0px;
        z-index: 1;
      "
    />

    <div id="div_canvas3d" class="threejs-container"></div>

    <!--sky -->
    <img
      src="/World/sky.png"
      class="sky"
      style="
        position: absolute;
        width: 1399px;
        height: 868px;
        left: 479px;
        top: 78px;
        z-index: 2;
      "
    />

    <!--scene-tag-->
    <img
      src="/World/scene-tag.png"
      class="scene-tag"
      style="
        position: absolute;
        width: 80px;
        height: 27px;
        left: 1798px;
        top: 919px;
        z-index: 3;
      "
    />

    <!--button-down-->
    <img
      class="button-down mp"
      style="
        position: absolute;
        width: 135px;
        height: 41px;
        left: 156px;
        top: 127px;
        z-index: 10;
      "
      @click="downList()"
      :src="vmdata.isShow ? vmdata.btndown : vmdata.btnup"
    />

    <div ref="myElement1" class="leftdown">
      <div class="div-panel">
        <div
          v-for="(item, index) in vmdata.iconFilter"
          :key="item.id"
          class="div-content"
        >
          <img
            src="/icon/delete.png"
            class="deleteicon"
            @click="deleteIcon(item.id)"
          />
          <img :src="item.thumurl" class="iconpng mp"
           @click="addModel(item.id)"
          
           />
        </div>
      </div>
    </div>

    <!--bag-->
    <img
      ref="myElement2"
      src="/World/bag.png"
      class="button-down"
      style="
        position: absolute;
        width: 449px;
        height: 497px;
        left: 0px;
        top: 78px;
        z-index: 1;
      "
    />
  </div>
</template>

<style scoped>
.leftdown {
  position: absolute;
  width: 449px;
  height: 497px;
  left: 0px;
  top: 78px;
  z-index: 2;
  overflow: hidden;
}

.div-panel {
  position: absolute;

  width: 389px;
  height: 497px;

  margin-top: 100px;
  margin-left: 30px;

  display: flex;
  flex-wrap: wrap;
  align-content: flex-start;
}

.div-content {
  margin: 5px 5px;
  width: 66px;
  height: 66px;
}

.deleteicon {
  cursor: pointer;

  position: absolute;
  margin-left: 50px;
  margin-top: -5px;
}

.mp {
  cursor: pointer;
}

.threejs-container {
  position: absolute;
  width: 1399px;
  height: 868px;
  left: 479px;
  top: 78px;
  z-index: 10;
}

ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

img {
  border: none;
  border-width: 0px 0px 0px 0px;
}

.note-none {
  display: none !important;
}

.note-show {
  display: flex !important;
}
</style>
