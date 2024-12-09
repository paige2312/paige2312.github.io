<script setup>
import texture from "@/assets/homepage/texture.png";
import Navbar from "@/components/Navbar.vue";

import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const router = useRouter();

const myElement1 = ref(null);
const myElement2 = ref(null);
const myElement3 = ref(null);
const myElement4 = ref(null);
const myElement5 = ref(null);

const myNode1 = ref(null);
const myNode2 = ref(null);
const myNode3 = ref(null);
const myNode4 = ref(null);
const myNode5 = ref(null);

const setBig = (id) => {
  switch (id) {
    case 15:
      myElement1.value.classList.remove("ty-img-origin");
      myElement1.value.classList.add("ty-img-big");

      myNode1.value.classList.remove("note-none");
      break;
    case 16:
      myElement2.value.classList.remove("ty-img-origin");
      myElement2.value.classList.add("ty-img-big");

      myNode2.value.classList.remove("note-none");
      break;
    case 17:
      myElement3.value.classList.remove("ty-img-origin");
      myElement3.value.classList.add("ty-img-big");

      myNode1.value.classList.remove("note-none");
      break;
    case 18:
      myElement4.value.classList.remove("ty-img-origin");
      myElement4.value.classList.add("ty-img-big");

      myNode3.value.classList.remove("note-none");
      break;
    case 19:
      myElement5.value.classList.remove("ty-img-origin");
      myElement5.value.classList.add("ty-img-big");

      myNode4.value.classList.remove("note-none");
      break;

    default:
      break;
  }
};

const setOrigin = (id) => {
  switch (id) {
    case 15:
      myElement1.value.classList.remove("ty-img-big");
      myElement1.value.classList.add("ty-img-origin");
      break;
    case 16:
      myElement2.value.classList.remove("ty-img-big");
      myElement2.value.classList.add("ty-img-origin");
      break;
    case 17:
      myElement3.value.classList.remove("ty-img-big");
      myElement3.value.classList.add("ty-img-origin");
      break;
    case 18:
      myElement4.value.classList.remove("ty-img-big");
      myElement4.value.classList.add("ty-img-origin");
      break;
    case 19:
      myElement5.value.classList.remove("ty-img-big");
      myElement5.value.classList.add("ty-img-origin");
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
    <!---homepage3bg-->
    <img
      src="/Homepage-4/homepage4bg.png"
      class="homepage4bg"
      style="
        position: absolute;
        width: 1920px;
        height: 1080px;
        left: 0px;
        top: 0px;
        z-index: 0;
      "
    />

    <!--note15-17 bed-->
    <img
     ref="myNode1"
      src="/Homepage-4/note15-17.png"
      class="note15-17 note-none"
      style="
        position: absolute;
        width: 497px;
        height: 95px;
        left: 484px;
        top: 591px;
        z-index: 2;
      "
    />

    <!--note16 mirrore-->
    <img
     ref="myNode2"
      src="/Homepage-4/note16.png"
      class="note16 note-none"
      style="
        position: absolute;
        width: 508px;
        height: 85px;
        left: 806px;
        top: 889px;
        z-index: 2;
      "
    />
    
    <!--note18 tv-->
    <img
     ref="myNode3"
      src="/Homepage-4/note18.png"
      class="note18 note-none"
      style="
        position: absolute;
        width: 508px;
        height: 85px;
        left: 982px;
        top: 332px;
        z-index: 2;
      "
    />
    <!--note19 rainbowhouse-->
    <img
     ref="myNode4"
      src="/Homepage-4/note19.png"
      class="note19 note-none"
      style="
        position: absolute;
        width: 321x;
        height: 159px;
        left: 74px;
        top: 114px;
        z-index: 2;
      "
    />
    <!--ellips椭圆-->
    <img
      src="/Homepage-4/ellips.png"
      class="ellips"
      style="
        position: absolute;
        width: 1526px;
        height: 835px;
        left: 261px;
        top: 133px;
        z-index: 2;
      "
    />

    <!--id15-rainbowtree1-note15-17-->
    <img
      ref="myElement1"
      src="/Homepage-4/id15.png"
      class="id15 mp"
      style="
        position: absolute;
        width: 189px;
        height: 294px;
        left: 338px;
        top: 595px;
        z-index: 2;
      "
      @mouseenter="setBig(15)"
      @mouseleave="setOrigin(15)"
      @click="openModel(15)"
    />
    <!--id16-mirror-note16-->
    <img
      ref="myElement2"
      src="/Homepage-4/id16.png"
      class="id16 mp"
      style="
        position: absolute;
        width: 443px;
        height: 507px;
        left: 1242px;
        top: 436px;
        z-index: 2;
      "
      @mouseenter="setBig(16)"
      @mouseleave="setOrigin(16)"
      @click="openModel(16)"
    />
    <!--id17-rainbowtree2-note17-->
    <img
      ref="myElement3"
      src="/Homepage-4/id17.png"
      class="id17 mp"
      style="
        position: absolute;
        width: 221px;
        height: 304px;
        left: 722px;
        top: 300px;
        z-index: 2;
      "
      @mouseenter="setBig(17)"
      @mouseleave="setOrigin(17)"
      @click="openModel(17)"
    />
    <!--id18-tv-note18-->
    <img
      ref="myElement4"
      src="/Homepage-4/id18.png"
      class="id18 mp"
      style="
        position: absolute;
        width: 220px;
        height: 263px;
        left: 1450px;
        top: 115px;
        z-index: 2;
      "
      @mouseenter="setBig(18)"
      @mouseleave="setOrigin(18)"
      @click="openModel(18)"
    />
    <!--id19-rainbowhouse-note19-->
    <img
      ref="myElement5"
      src="/Homepage-4/id19.png"
      class="id19 mp"
      style="
        position: absolute;
        width: 238px;
        height: 278px;
        left: 405px;
        top: 172px;
        z-index: 2;
      "
      @mouseenter="setBig(19)"
      @mouseleave="setOrigin(19)"
      @click="openModel(19)"
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
