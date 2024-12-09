<script setup>
import texture from "@/assets/homepage/texture.png";
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
    case 1:
      myElement1.value.classList.remove("ty-img-origin");
      myElement1.value.classList.add("ty-img-big");

      myNode4.value.classList.remove("note-none");
      break;
    case 2:
      myElement2.value.classList.remove("ty-img-origin");
      myElement2.value.classList.add("ty-img-big");

      myNode2.value.classList.remove("note-none");
      break;
    case 3:
      myElement3.value.classList.remove("ty-img-origin");
      myElement3.value.classList.add("ty-img-big");

      myNode2.value.classList.remove("note-none");
      break;
    case 4:
      myElement4.value.classList.remove("ty-img-origin");
      myElement4.value.classList.add("ty-img-big");

      myNode5.value.classList.remove("note-none");
      break;
    case 5:
      myElement5.value.classList.remove("ty-img-origin");
      myElement5.value.classList.add("ty-img-big");

      myNode1.value.classList.remove("note-none");
      myNode3.value.classList.remove("note-none");
      break;

    default:
      break;
  }
};

const setOrigin = (id) => {
  switch (id) {
    case 1:
      myElement1.value.classList.remove("ty-img-big");
      myElement1.value.classList.add("ty-img-origin");
      break;
    case 2:
      myElement2.value.classList.remove("ty-img-big");
      myElement2.value.classList.add("ty-img-origin");
      break;
    case 3:
      myElement3.value.classList.remove("ty-img-big");
      myElement3.value.classList.add("ty-img-origin");
      break;
    case 4:
      myElement4.value.classList.remove("ty-img-big");
      myElement4.value.classList.add("ty-img-origin");
      break;
    case 5:
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
  <div class="container">
    <!---right-column-->
    <img
      src="/Homepage-1/right-column.png"
      class="right-column"
      style="
        position: absolute;
        width: 710px;
        height: 1080px;
        left: 1209px;
        top: 0px;
        z-index: -2;
      "
    />
    <!---bottom-column-->
    <img
      src="/Homepage-1/bottom-column.png"
      class="bottom-column"
      style="
        position: absolute;
        width: 1273px;
        height: 199px;
        left: 0px;
        top: 882px;
        z-index: 0;
      "
    />
    <!---top-column-->
    <img
      src="/Homepage-1/top-column.png"
      class="top-column"
      style="width: 1444px; height: 883px; left: 0px; top: 0px; z-index: 2"
    />
    <!--pearl1-->
    <img
      src="/Homepage-1/pearl1.png"
      class="pearl1"
      style="
        position: absolute;
        width: 817px;
        height: 490px;
        left: 310px;
        top: 0px;
        z-index: 5;
      "
    />
    <!--pearl2-->
    <img
      src="/Homepage-1/pearl2.png"
      class="pearl2"
      style="
        position: absolute;
        width: 375px;
        height: 717px;
        left: 0px;
        top: 152px;
        z-index: 5;
      "
    />
    <!--pearl3-->
    <img
      src="/Homepage-1/pearl3.png"
      class="pearl3"
      style="
        position: absolute;
        width: 910px;
        height: 693px;
        left: 1009px;
        top: 118px;
        z-index: 5;
      "
    />
    <!--pattern-container（svg）-->
    <div class="pattern-container">
      <svg
        class="pattern"
        viewBox="0 0 1096 807"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
      >
        <!-- 定义一个填充图案 -->
        <defs>
          <pattern
            id="pattern0_1901_102"
            patternUnits="userSpaceOnUse"
            width="1076"
            height="737"
          >
            <!-- 通过 image 标签引用图片 -->
            <image href="/Homepage-1/pattern.png" x="0" y="0" width="1076" height="737" />
          </pattern>
        </defs>

        <!-- 使用定义的图案作为填充 -->
        <g style="mix-blend-mode: soft-light" opacity="0.42">
          <g filter="url(#filter0_d_1901_102)">
            <rect
              x="-15"
              y="14"
              width="1076"
              height="737"
              fill="url(#pattern0_1901_102)"
              shape-rendering="crispEdges"
            />
          </g>
        </g>
      </svg>
    </div>

    <!--chips-->
    <img
      src="/Homepage-1/chip.png"
      style="
        position: absolute;
        width: 337px;
        height: 520px;
        left: 1582px;
        top: 294px;
        z-index: 4;
      "
      class="chips"
    />
    <!--house-->
    <img
      src="/Homepage-1/house.png"
      style="
        position: absolute;
        width: 674px;
        height: 543px;
        left: 1061px;
        top: 540px;
        z-index: 4;
      "
      class="house"
    />
    <!--brunch(矢量图)-->

    <div class="brunch">
      <svg
        width="621"
        height="218"
        viewBox="0 0 621 218"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <rect
          width="683.468"
          height="22.9387"
          transform="matrix(0.959043 -0.283261 0.229242 0.973369 -54.0684 194.737)"
          fill="#7E695D"
        />
        <rect
          width="132.749"
          height="19.783"
          transform="matrix(0.952282 0.305221 -0.170099 0.985427 467.025 40.79)"
          fill="#7E695D"
        />
      </svg>
    </div>

    <!--sun(矢量图)-->
    <svg
      class="sun-svg"
      width="583"
      height="706"
      viewBox="0 0 583 706"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M135.5 21L150.694 63.7953L185.25 34.3305L177.011 78.9893L221.67 70.75L192.205 105.306L235 120.5L192.205 135.694L221.67 170.25L177.011 162.011L185.25 206.67L150.694 177.205L135.5 220L120.306 177.205L85.75 206.67L93.9893 162.011L49.3305 170.25L78.7953 135.694L36 120.5L78.7953 105.306L49.3305 70.75L93.9893 78.9893L85.75 34.3305L120.306 63.7953L135.5 21Z"
        fill="#E25E47"
      />
      <g style="mix-blend-mode: plus-lighter" filter="url(#filter0_f_1901_88)">
        <rect
          x="86"
          y="67"
          width="93"
          height="106"
          rx="34.8947"
          fill="white"
          fill-opacity="0.64"
        />
      </g>
      <path
        d="M44 269L49.4973 284.484L62 273.823L59.0189 289.981L75.1769 287L64.5163 299.503L80 305L64.5163 310.497L75.1769 323L59.0189 320.019L62 336.177L49.4973 325.516L44 341L38.5027 325.516L26 336.177L28.9811 320.019L12.8231 323L23.4837 310.497L8 305L23.4837 299.503L12.8231 287L28.9811 289.981L26 273.823L38.5027 284.484L44 269Z"
        fill="#E25E47"
      />
      <g style="mix-blend-mode: plus-lighter" filter="url(#filter1_f_1901_88)">
        <rect
          x="26.9082"
          y="285.728"
          width="33.6482"
          height="38.3518"
          rx="16.8241"
          fill="white"
          fill-opacity="0.64"
        />
      </g>
      <path
        d="M526.5 596L534.059 617.29L551.25 602.632L547.151 624.849L569.368 620.75L554.71 637.941L576 645.5L554.71 653.059L569.368 670.25L547.151 666.151L551.25 688.368L534.059 673.71L526.5 695L518.941 673.71L501.75 688.368L505.849 666.151L483.632 670.25L498.29 653.059L477 645.5L498.29 637.941L483.632 620.75L505.849 624.849L501.75 602.632L518.941 617.29L526.5 596Z"
        fill="#E25E47"
      />
      <g style="mix-blend-mode: plus-lighter" filter="url(#filter2_f_1901_88)">
        <rect
          x="503"
          y="619"
          width="46.2663"
          height="52.7337"
          rx="23.1332"
          fill="white"
          fill-opacity="0.64"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1901_88"
          x="19.4"
          y="0.400002"
          width="226.2"
          height="239.2"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="33.3" result="effect1_foregroundBlur_1901_88" />
        </filter>
        <filter
          id="filter1_f_1901_88"
          x="0.108204"
          y="258.928"
          width="87.2484"
          height="91.9516"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="13.4" result="effect1_foregroundBlur_1901_88" />
        </filter>
        <filter
          id="filter2_f_1901_88"
          x="469.4"
          y="585.4"
          width="113.467"
          height="119.934"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur stdDeviation="16.8" result="effect1_foregroundBlur_1901_88" />
        </filter>
      </defs>
    </svg>

    <!--note01（点击birdpng弹出）-->
    <div ref="myNode1" class="note01 note-none">
      <p class="note01-text">
        The owner of the treehouse is a little yellow bird who is a geographer.
        &quot;Fubao&quot; is a green parrot who loves to learn and often visits the
        treehouse as a guest.
      </p>
    </div>

    <!--note02（点击phoneobj弹出）-->
    <div ref="myNode2" class="note02 note-none">
      <div class="note02-background"></div>
      <div class="note02-text">
        The phone is filled with all sorts of games, perfect for playing while sipping on
        a big cup of milk tea.
      </div>
    </div>

    <!--note03（点击treehouseobj弹出）-->
    <div ref="myNode3" class="note03 note-none">
      <div class="note03-background"></div>
      <div class="note03-text">
        The house is built high up in a tall tree, and a ladder is needed as a tool to
        visit the treehouse.
      </div>
    </div>

    <!--note04（点击machineobj弹出）-->
    <div ref="myNode4" class="note04 note-none">
      <div class="note04-background"></div>
      <div class="note04-text">
        The Worry Filter absorbs the sadness and troubles, transforming them into large
        cups of milk tea, brimming with happiness.
      </div>
    </div>

    <!--note05（点击housepng弹出）-->
    <div ref="myNode5" class="note05 note-none">
      <div class="note05-background"></div>
      <div class="note05-text">
        The trees have star-shaped green canopies, and they bear delicious, golden french
        fries as their fruit.
      </div>
    </div>

    <!--ellip-->
    <img
      src="/Homepage-1/ellip.png"
      style="
        position: absolute;
        width: 1660px;
        height: 905px;
        left: 200px;
        top: 68px;
        z-index: 5;
      "
      class="ellip"
    />

    <!-- bird -->
    <img
      src="/Homepage-1/bird.png"
      style="
        position: absolute;
        width: 405px;
        height: 473px;
        left: 57px;
        top: 67px;
        z-index: 6;
      "
      class="bird"
    />

    <!--111 MEC-->
    <img
      ref="myElement1"
      src="/Homepage-1/MEC.png"
      style="
        position: absolute;
        width: 729px;
        height: 358px;
        left: 147px;
        top: 597px;
        z-index: 5;
      "
      class="MEC mp"
      @mouseenter="setBig(1)"
      @mouseleave="setOrigin(1)"
      @click="openModel(1)"
    />

    <!--222 MIL-->
    <img
      ref="myElement2"
      src="/Homepage-1/MIL.png"
      style="
        position: absolute;
        width: 225px;
        height: 259px;
        left: 1061px;
        top: 331px;
        z-index: 5;
      "
      class="MIL mp"
      @mouseenter="setBig(2)"
      @mouseleave="setOrigin(2)"
      @click="openModel(2)"
    />

    <!--333 PHO-->
    <img
      ref="myElement3"
      src="/Homepage-1/PHO.png"
      style="
        position: absolute;
        width: 202.6px;
        height: 187.4px;
        left: 1524.23px;
        top: 170.99px;

        z-index: 5;
      "
      class="PHO mp"
      @mouseenter="setBig(3)"
      @mouseleave="setOrigin(3)"
      @click="openModel(3)"
    />
    <!--444 STAR-->
    <img
      ref="myElement4"
      src="/Homepage-1/STAR.png"
      style="
        position: absolute;
        width: 193.86px;
        height: 275.21px;
        left: 1533px;
        top: 651px;
        z-index: 5;
      "
      class="STAR mp"
      @mouseenter="setBig(4)"
      @mouseleave="setOrigin(4)"
      @click="openModel(4)"
    />

    <!--555 TRE-->
    <img
      ref="myElement5"
      src="/Homepage-1/TRE.png"
      style="
        position: absolute;
        width: 243px;
        height: 299px;
        left: 668px;
        top: 195px;

        z-index: 5;
      "
      class="TRE mp"
      @mouseenter="setBig(5)"
      @mouseleave="setOrigin(5)"
      @click="openModel(5)"
    />

    <!--treehouse.obj-->

    <!--模型路径:/Homepage-1/model-01/treehouse.obj
  texture贴图路径:/Homepage-1/model-01/treehouse.png position: absolute; width: 235px;
  height: 381px; left: 528px; top: 30px;-->

    <!--mechine.obj-->

    <!--模型路径:/Homepage-1/model-01/mechine.obj
  texture贴图路径:/Homepage-1/model-01/mechine.png position: absolute; width: 729px;
  height: 358px; left: 729px; top: 451px;-->

    <!--milktea.obj-->

    <!--模型路径:/Homepage-1/model-01/milktea.obj
  texture贴图路径:/Homepage-1/model-01/milktea.png position: absolute; width: 225px;
  height: 259px; left: 914px; top: 176px;-->

    <!--phone.obj-->

    <!--模型路径:/Homepage-1/model-01/phone.obj texture贴图路径:/Homepage-1/model-01/phone.png
  position: absolute; width: 202.6px; height: 187.4px; left: 1545.42px; top: 9px;-->

    <!--startree.obj-->

    <!--模型路径:/Homepage-1/model-01/startree.obj
  texture贴图路径:/Homepage-1/model-01/startree.png position: absolute; width: 193.86px;
  height: 275.21px; left: 1386px; top: 516px;-->
  </div>
</template>

<style scoped>
/* brunch */

.brunch {
  position: absolute;
  width: 676.81px;
  height: 134.1px;
  left: -67.79px;
  top: 348px;
  transform: rotate(-7.08);
  z-index: 5;
}

.pattern-container {
  position: absolute;
  width: 1076px; /* 设置容器宽度 */
  height: 737px; /* 设置容器高度 */
  left: -50px;
  top: 208.5px;
  z-index: 3;
}
.pattern {
  mix-blend-mode: soft-light;
  opacity: 0.42;
}

.sun-svg {
  position: absolute;
  width: 568px;
  height: 674px;
  left: 1273px;
  top: 332px;
}

.note01 {
  box-sizing: border-box;
  position: absolute;
  width: 172px;
  height: 261px;
  left: 450.5px;
  top: 140.5px;
  background: linear-gradient(
    180deg,
    rgba(241, 86, 81, 0.59) 0%,
    rgba(255, 239, 190, 0.59) 8.07%,
    rgba(165, 242, 93, 0.59) 100%
  );
  border-bottom: 14px solid #fa5e43;
  transform: rotate(90deg);
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 5;
}

/* Note text styles */
.note01-text {
  text-align: center;
  color: #eb00c7;
  font-size: 0.875rem; /* text-sm */
  font-family: "Roboto", sans-serif;
  transform: rotate(-90deg); /* rotate the text */
}

.note02 {
  position: absolute;
  width: 459px;
  height: 75px;
  left: 1041px;
  top: 161px;
  z-index: 7;
}
.note02-background {
  background: linear-gradient(
    270deg,
    rgba(247, 109, 104, 0.59) 0%,
    rgba(255, 239, 190, 0.59) 5%,
    rgba(165, 242, 93, 0.59) 100%
  );
  left: 0;
  width: 459px;
  top: 0;
  height: 75px;
  border-left: 14px solid #fa5e43;
  position: absolute;
}
.note02-text {
  color: #eb00c7;
  font-size: 0.875rem; /* 1rem = 16px, so 0.875rem = 14px */
  font-family: "Roboto", sans-serif;
  position: absolute;
  left: 43px;
  width: 382px;
  top: 23px;
  height: 32px;
}
.note03 {
  position: absolute;
  width: 459px;
  height: 71px;
  left: 464px;
  top: 534px;
  z-index: 7;
}
.note03-background {
  background: linear-gradient(
    270deg,
    rgba(247, 109, 104, 0.59) 0%,
    rgba(255, 239, 190, 0.59) 3%,
    rgba(165, 242, 93, 0.59) 100%
  );
  left: 0;
  width: 459px;
  top: 0;
  height: 71px;
  border-left: 14px solid #fa5e43;
  position: absolute;
}
.note03-text {
  color: #eb00c7;
  font-size: 0.875rem; /* 1rem = 16px, so 0.875rem = 14px */
  font-family: "Roboto", sans-serif;
  position: absolute;
  left: 45px;
  width: 382px;
  top: 20px;
  height: 32px;
}

.note04 {
  position: absolute;
  width: 469px;
  height: 67px;
  left: 622px;
  top: 946px;
}
.note04-background {
  background: linear-gradient(
    270deg,
    rgba(247, 109, 104, 0.59) 0%,
    rgba(255, 239, 190, 0.59) 3%,
    rgba(143, 253, 39, 0.59) 100%
  );
  left: 0;
  width: 469px;
  top: 0;
  height: 67px;
  border-left: 14px solid #fa5e43;
  position: absolute;
}
.note04-text {
  color: #f91aef;
  font-size: 0.875rem; /* 1rem = 16px, so 0.875rem = 14px */
  font-family: "Roboto", sans-serif;
  position: absolute;
  left: 37px;
  width: 405px;
  top: 19px;
  height: 32px;
}
.note05 {
  position: absolute;
  width: 247px;
  height: 157px;
  left: 1524px;
  top: 461px;
  background: linear-gradient(
    -90deg,
    rgba(247, 109, 104, 0.59) 0%,
    rgba(255, 239, 190, 0.59) 7%,
    rgba(165, 242, 93, 0.59) 100%
  );

  border-left: 14px solid #fa5e43;
  z-index: 6;
}

.note05-text {
  color: #eb00c7;
  font-size: 0.875rem; /* 1rem = 16px, so
  0.875rem = 14px */
  font-family: "Roboto", sans-serif;
  position: absolute;
  width: 197px;
  height: 64px;
  left: 31px;
  top: 48px;
}



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
