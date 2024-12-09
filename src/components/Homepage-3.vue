<script setup>
import texture from "@/assets/homepage/texture.png";
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";
import Navbar from "@/components/Navbar.vue";

const router = useRouter();

const myElement1 = ref(null);
const myElement2 = ref(null);
const myElement3 = ref(null);
const myElement4 = ref(null);
const myElement5 = ref(null);
const myElementTree = ref(null);

const myNode1 = ref(null);
const myNode2 = ref(null);
const myNode3 = ref(null);
const myNode4 = ref(null);
const myNode5 = ref(null);
const myNodeTree = ref(null);

const setBig = (id) => {
  switch (id) {
    case 6:
      myElement1.value.classList.remove("ty-img-origin");
      myElement1.value.classList.add("ty-img-big");

      myNode1.value.classList.remove("note-none");
      break;
    case 7:
      myElement2.value.classList.remove("ty-img-origin");
      myElement2.value.classList.add("ty-img-big");

      myNode2.value.classList.remove("note-none");
      break;
    case 8:
      myElement3.value.classList.remove("ty-img-origin");
      myElement3.value.classList.add("ty-img-big");

      myNode3.value.classList.remove("note-none");
      break;
    case 9:
      myElement4.value.classList.remove("ty-img-origin");
      myElement4.value.classList.add("ty-img-big");

      myNode4.value.classList.remove("note-none");
      break;
    case 10:
      myElement5.value.classList.remove("ty-img-origin");
      myElement5.value.classList.add("ty-img-big");

      myNode4.value.classList.remove("note-none");
      break;
    case "tree":
      myElement5.value.classList.remove("ty-img-origin");
      myElement5.value.classList.add("ty-img-big");

      myNodeTree.value.classList.remove("note-none");
      break;

    default:
      break;
  }
};

const setOrigin = (id) => {
  switch (id) {
    case 6:
      myElement1.value.classList.remove("ty-img-big");
      myElement1.value.classList.add("ty-img-origin");
      break;
    case 7:
      myElement2.value.classList.remove("ty-img-big");
      myElement2.value.classList.add("ty-img-origin");
      break;
    case 8:
      myElement3.value.classList.remove("ty-img-big");
      myElement3.value.classList.add("ty-img-origin");
      break;
    case 9:
      myElement4.value.classList.remove("ty-img-big");
      myElement4.value.classList.add("ty-img-origin");
      break;
    case 10:
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
      src="/Homepage-3/homepage3bg.png"
      class="homepage3bg"
      style="
        position: absolute;
        width: 1920px;
        height: 1080px;
        left: 0px;
        top: 0px;
        z-index: 0;
      "
    />
    <!--notetree-->
    <img
      ref="myNodeTree"
      src="/Homepage-3/notetree.png"
      class="notetree note-none"
      style="
        position: absolute;
        width: 339px;
        height: 133px;
        left: 63px;
        top: 456px;
        z-index: 2;
      "
    />

    <!--note6 cheese-->
    <img
      ref="myNode1"
      src="/Homepage-3/note6.png"
      class="note6 note-none"
      style="
        position: absolute;
        width: 305px;
        height: 193px;
        left: 1556px;
        top: 696px;
        z-index: 2;
      "
    />
    <!--note7 bed-->
    <img
      ref="myNode2"
      src="/Homepage-3/note7.png"
      class="note7 note-none"
      style="
        position: absolute;
        width: 479px;
        height: 73px;
        left: 359px;
        top: 155px;
        z-index: 2;
      "
    />
    <!--note8 balcony-->
    <img
      ref="myNode3"
      src="/Homepage-3/note8.png"
      class="note8 note-none"
      style="
        position: absolute;
        width: 350px;
        height: 73px;
        left: 712px;
        top: 471px;
        z-index: 2;
      "
    />
    <!--note9 mango-->
    <img
      ref="myNode4"
      src="/Homepage-3/note9-10.png"
      class="note9 note-none"
      style="
        position: absolute;
        width: 434px;
        height: 75px;
        left: 576px;
        top: 921px;
        z-index: 2;
      "
    />
    <!--ellips椭圆-->
    <img
      src="/Homepage-3/ellips.png"
      class="ellips"
      style="
        position: absolute;
        width: 1832.12px;
        height: 676px;
        left: 33px;
        top: 193px;
        z-index: 2;
      "
    />
    <!--tree-tree-->
    <img ref="myElementTree" src="/Homepage-3/tree.png" class="tree mp" style=" position:
    absolute; width: 441px; height: 481px; left: 0px; top: 599px; z-index: 2; "
    @mouseenter="setBig('tree')" @mouseleave="setOrigin('tree')" />
    <!--id6-cheese-note6-->
    <img
      ref="myElement1"
      src="/Homepage-3/id6.png"
      class="id6 mp"
      style="
        position: absolute;
        width: 675px;
        height: 462px;
        left: 1120px;
        top: 219px;
        z-index: 2;
      "
      @mouseenter="setBig(6)"
      @mouseleave="setOrigin(6)"
      @click="openModel(6)"
    />
    <!--id7-bed-note7-->
    <img
      ref="myElement2"
      src="/Homepage-3/id7.png"
      class="id7 mp"
      style="
        position: absolute;
        width: 230px;
        height: 144.77px;
        left: 120px;
        top: 239px;
        z-index: 2;
      "
      @mouseenter="setBig(7)"
      @mouseleave="setOrigin(7)"
      @click="openModel(7)"
    />
    <!--id8-balcony-note8-->
    <img
      ref="myElement3"
      src="/Homepage-3/id8.png"
      class="id8 mp"
      style="
        position: absolute;
        width: 235px;
        height: 133px;
        left: 430px;
        top: 375px;
        z-index: 2;
      "
      @mouseenter="setBig(8)"
      @mouseleave="setOrigin(8)"
      @click="openModel(8)"
    />
    <!--id9-mango-note9-->
    <img
      ref="myElement4"
      src="/Homepage-3/id9.png"
      class="id9 mp"
      style="
        position: absolute;
        width: 288px;
        height: 330px;
        left: 784px;
        top: 538px;
        z-index: 2;
      "
      @mouseenter="setBig(9)"
      @mouseleave="setOrigin(9)"
      @click="openModel(9)"
    />
    <!--id10-peach-note10-->
    <img
      ref="myElement5"
      src="/Homepage-3/id10.png"
      class="id10 mp"
      style="
        position: absolute;
        width: 279px;
        height: 280px;
        left: 546px;
        top: 577px;
        z-index: 2;
      "
      @mouseenter="setBig(10)"
      @mouseleave="setOrigin(10)"
      @click="openModel(10)"
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
