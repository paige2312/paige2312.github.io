<script setup>
import texture from "@/assets/homepage/texture.png";
import { useRouter } from "vue-router";
import Navbar from "@/components/Navbar.vue";
import { ref, onMounted, onUnmounted } from "vue";

const router = useRouter();

const myElement1 = ref(null);
const myElement2 = ref(null);
const myElement3 = ref(null);
const myElement4 = ref(null);

const myNode1 = ref(null);
const myNode2 = ref(null);
const myNode3 = ref(null);
const myNode4 = ref(null);

const setBig = (id) => {
  switch (id) {
    case 11:
      myElement1.value.classList.remove("ty-img-origin");
      myElement1.value.classList.add("ty-img-big");

      myNode1.value.classList.remove("note-none");
      break;
    case 12:
      myElement2.value.classList.remove("ty-img-origin");
      myElement2.value.classList.add("ty-img-big");

      myNode2.value.classList.remove("note-none");
      break;
    case 13:
      myElement3.value.classList.remove("ty-img-origin");
      myElement3.value.classList.add("ty-img-big");

      myNode3.value.classList.remove("note-none");
      break;
    case 14:
      myElement4.value.classList.remove("ty-img-origin");
      myElement4.value.classList.add("ty-img-big");

      myNode4.value.classList.remove("note-none");
      break;

    default:
      break;
  }
};

const setOrigin = (id) => {
  switch (id) {
    case 11:
      myElement1.value.classList.remove("ty-img-big");
      myElement1.value.classList.add("ty-img-origin");
      break;
    case 12:
      myElement2.value.classList.remove("ty-img-big");
      myElement2.value.classList.add("ty-img-origin");
      break;
    case 13:
      myElement3.value.classList.remove("ty-img-big");
      myElement3.value.classList.add("ty-img-origin");
      break;
    case 14:
      myElement4.value.classList.remove("ty-img-big");
      myElement4.value.classList.add("ty-img-origin");
      break;
    default:
      break;
  }
};

const openModel = (id) => {
  router.push({ name: "homepage1.1", params: { id: id } });
};

</script>
<template>
  <Navbar />
  <div class="container">
    <!---right-column-->
    <img
      src="/Homepage-2/homepage2bg.png"
      class="homepage2bg"
      style="
        position: absolute;
        width: 1920px;
        height: 1080px;
        left: 0px;
        top: 0px;
        z-index: 0;
      "
    />

    <!--note11 椅子-->
    <img
      ref="myNode1"
      src="/Homepage-2/note11.png"
      class="note11 note-none"
      style="
        position: absolute;
        width: 375px;
        height: 147px;
        left: 669px;
        top: 787px;
        z-index: 2;
      "
    />
    <!--note12 robot小机甲人-->
    <img
      ref="myNode2"
      src="/Homepage-2/note12.png"
      class="note12 note-none"
      style="
        position: absolute;
        width: 617px;
        height: 73px;
        left: 281px;
        top: 467px;
        z-index: 2;
      "
    />
    <!--note13 cloudtree-->
    <img
      ref="myNode3"
      src="/Homepage-2/note13.png"
      class="note13 note-none"
      style="
        position: absolute;
        width: 347px;
        height: 193px;
        left: 1461px;
        top: 654px;
        z-index: 2;
      "
    />
    <!--note14 pump-->
    <img
      ref="myNode4"
      src="/Homepage-2/note14.png"
      class="note14 note-none"
      style="
        position: absolute;
        width: 392px;
        height: 71px;
        left: 683px;
        top: 129px;
        z-index: 2;
      "
    />
    <!--ellips椭圆-->
    <img
      src="/Homepage-2/ellips.png"
      class="ellips"
      style="
        position: absolute;
        width: 1625px;
        height: 976px;
        left: 170px;
        top: 81px;
        z-index: 2;
      "
    />
    <!--id11-chair-note11-->
    <img
      ref="myElement1"
      src="/Homepage-2/id11.png"
      class="id11 mp"
      style="
        position: absolute;
        width: 271.63px;
        height: 329px;
        left: 320px;
        top: 646.14px;
        z-index: 2;
      "
      @mouseenter="setBig(11)"
      @mouseleave="setOrigin(11)"
      @click="openModel(11)"
    />
    <!--id12-robot-note12-->
    <img
      ref="myElement2"
      src="/Homepage-2/id12.png"
      class="id12 mp"
      style="
        position: absolute;
        width: 341px;
        height: 593px;
        left: 1020px;
        top: 150px;
        z-index: 2;
      "
      @mouseenter="setBig(12)"
      @mouseleave="setOrigin(12)"
      @click="openModel(12)"
    />
    <!--id13-cloudtree-note13-->
    <img
      ref="myElement3"
      src="/Homepage-2/id13.png"
      class="id13 mp"
      style="
        position: absolute;
        width: 363px;
        height: 415px;
        left: 1430px;
        top: 160px;
        z-index: 2;
      "
      @mouseenter="setBig(13)"
      @mouseleave="setOrigin(13)"
      @click="openModel(13)"
    />
    <!--id14-pump-note14-->
    <img
      ref="myElement4"
      src="/Homepage-2/id14.png"
      class="id14 mp"
      style="
        position: absolute;
        width: 441px;
        height: 359px;
        left: 230px;
        top: 75px;
        z-index: 2;
      "
      @mouseenter="setBig(14)"
      @mouseleave="setOrigin(14)"
      @click="openModel(14)"
    />
  </div>
</template>

<style scoped>
.note-none {
  display: none !important;
}

.note-show {
  display: flex !important;
}

.mp {
  cursor: pointer;
}

.ty-img-big {
  transition: all 0.6s;
  transform: scale(1.1);
  -ms-transform: scale(1.1);
  -webkit-transform: scale(1.1);
  -o-transform: scale(1.1);
  -moz-transform: scale(1.1);
}

.ty-img-origin {
  transition: all 0.6s;
  transform: scale(1);
  -ms-transform: scale(1);
  -webkit-transform: scale(1);
  -o-transform: scale(1);
  -moz-transform: scale(1);
}
</style>
