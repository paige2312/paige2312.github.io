<script setup>
import texture from "@/assets/homepage/texture.png";
import Navbar from "@/components/Navbar.vue";
import { useRouter } from "vue-router";
import { ref, onMounted, onUnmounted } from "vue";

const router = useRouter();

const myElement1 = ref(null);
const myElement2 = ref(null);
const myElement3 = ref(null);
const myElementM = ref(null);

const myNode1 = ref(null);
const myNode2 = ref(null);
const myNode3 = ref(null);
const myNode4 = ref(null);
const myNodeM = ref(null);

const setBig = (id) => {
  switch (id) {
    case 20:
      myElement1.value.classList.remove("ty-img-origin");
      myElement1.value.classList.add("ty-img-big");

      myNode1.value.classList.remove("note-none");
      break;
    case 21:
      myElement2.value.classList.remove("ty-img-origin");
      myElement2.value.classList.add("ty-img-big");

      myNode2.value.classList.remove("note-none");
      myNode3.value.classList.remove("note-none");
      break;
    case 22:
      myElement3.value.classList.remove("ty-img-origin");
      myElement3.value.classList.add("ty-img-big");

      myNode4.value.classList.remove("note-none");
      break;
    case "m":
      console.log(1234);
      myElementM.value.classList.remove("ty-img-origin");
      myElementM.value.classList.add("ty-img-big");

      myNodeM.value.classList.remove("note-none");
      break;

    default:
      break;
  }
};

const setOrigin = (id) => {
  switch (id) {
    case 20:
      myElement1.value.classList.remove("ty-img-big");
      myElement1.value.classList.add("ty-img-origin");
      break;
    case 21:
      myElement2.value.classList.remove("ty-img-big");
      myElement2.value.classList.add("ty-img-origin");
      break;
    case 22:
      myElement3.value.classList.remove("ty-img-big");
      myElement3.value.classList.add("ty-img-origin");
      break;
    case "m":
      myElementM.value.classList.remove("ty-img-origin");
      myElementM.value.classList.add("ty-img-big");
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
    <!---homepage5bg-->
    <img
      src="/Homepage-5/homepage5bg.png"
      class="homepage5bg"
      style="
        position: absolute;
        width: 1920px;
        height: 1080px;
        left: 0px;
        top: 0px;
        z-index: 0;
      "
    />

    <!--note20-->
    <img
      ref="myNode1"
      src="/Homepage-5/note20.png"
      class="note20 note-none"
      style="
        position: absolute;
        width: 426px;
        height: 63px;
        left: 169px;
        top: 201px;
        z-index: 2;
      "
    />

    <!--note21.1-->
    <img
      ref="myNode2"
      src="/Homepage-5/note21.1.png"
      class="note21.2 note-none"
      style="
        position: absolute;
        width: 433px;
        height: 87px;
        left: 1290px;
        top: 295px;
        z-index: 3;
      "
    />
    <!--note21.2-->
    <img
      ref="myNode3"
      src="/Homepage-5/note21.2.png"
      class="note21.2 note-none"
      style="
        position: absolute;
        width: 433px;
        height: 87px;
        left: 1404px;
        top: 430px;
        z-index: 3;
      "
    />
    <!--note22 -->
    <img
      ref="myNode4"
      src="/Homepage-5/note22.png"
      class="note22 note-none"
      style="
        position: absolute;
        width: 426px;
        height: 63px;
        left: 401px;
        top: 584px;
        z-index: 2;
      "
    />
    <!--noteM-->
    <img
      ref="myNodeM"
      src="/Homepage-5/noteM.png"
      class="note19 note-none"
      style="
        position: absolute;
        width: 306x;
        height: 228px;
        left: 836px;
        top: 695px;
        z-index: 2;
      "
    />
    <!--ellips椭圆-->
    <img
      src="/Homepage-5/ellips.png"
      class="ellips"
      style="
        position: absolute;
        width: 1466px;
        height: 825px;
        left: 174px;
        top: 135px;
        z-index: 1;
      "
    />

    <!--id20-gaint-note20-->
    <img
      ref="myElement1"
      src="/Homepage-5/id20.png"
      class="id20 mp"
      style="
        position: absolute;
        width: 218px;
        height: 298px;
        left: 215px;
        top: 349px;
        z-index: 2;
      "
      @mouseenter="setBig(20)"
      @mouseleave="setOrigin(20)"
      @click="openModel(20)"
    />
    <!--id21-galaxytree-note21-->
    <img
      ref="myElement2"
      src="/Homepage-5/id21.png"
      class="id21 mp"
      style="
        position: absolute;
        width: 229px;
        height: 347px;
        left: 1350px;
        top: 576px;
        z-index: 2;
      "
      @mouseenter="setBig(21)"
      @mouseleave="setOrigin(21)"
      @click="openModel(21)"
    />
    <!--id22-galaxyhouse-note22-->
    <img
      ref="myElement3"
      src="/Homepage-5/id22.png"
      class="id22 mp"
      style="
        position: absolute;
        width: 463px;
        height: 584px;
        left: 790px;
        top: 100px;
        z-index: 2;
      "
      @mouseenter="setBig(22)"
      @mouseleave="setOrigin(22)"
      @click="openModel(22)"
    />
    <!---m-noteM-->
    <img
      ref="myElementM"
      src="/Homepage-5/m.png"
      class="id18"
      style="
        position: absolute;
        width: 384px;
        height: 631px;
        left: 409px;
        top: 450px;
        z-index: 1;
      "
      @mouseenter="setBig('m')"
      @mouseleave="setOrigin('m')"
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
