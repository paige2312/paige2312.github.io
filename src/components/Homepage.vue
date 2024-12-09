<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

import skybg from "@/assets/planetpage/sky-bg.png";
import Navbar from "@/components/Navbar.vue";
import Planet from "@/components/Planet.vue";

const router = useRouter();

const planets = [
  {
    name: "Planet 1",
    description: "This is the description for Planet 1.",
    class: "planet1-content", // Add the class to bind to the element
    title: "Planet Of\nPeace",
    nameTitle: "ShuTong Zhao",
    subtitle1: "/She",
    subtitle2: "/11",
    quote:
      "“The Worry Filter absorbs the sadness and troubles, transforming them into large cups of milk tea, brimming with happiness.”",
    img: "/planetpage/planet01.png",
  },
  {
    name: "Planet 2",
    description: "This is the description for Planet 2.",
    class: "planet1-content", // Add the class to bind to the element
    title: "Planet Of\nMachinery",
    nameTitle: "ZhaoJing  Huang",
    subtitle1: "/He",
    subtitle2: "/10",
    quote:
      '"The air-purifying trees absorb polluted air, and after it is processed in the containers within the trunks and canopies, they release fresh, clean air upward."',
    img: "/planetpage/planet02.png",
  },
  {
    name: "Planet 3",
    description: "This is the description for Planet 2.",
    class: "planet1-content", // Add the class to bind to the element
    title: "Planet Of\nWisdom",
    nameTitle: "YuYan Wang",
    subtitle1: "/She",
    subtitle2: "/11",
    quote:
      '"The planet is shaped like a yellow triangle of cheese, with a pair of wings and round, grape-like little feet that allow it to move around whenever it pleases."',
    img: "/planetpage/planet03.png",
  },
  {
    name: "Planet 4",
    description: "This is the description for Planet 2.",
    class: "planet1-content", // Add the class to bind to the element
    title: "Planet Of\nRainbow",
    nameTitle: "YuYan Wang",
    subtitle1: "/She",
    subtitle2: "/10",
    quote:
      '"The mirror is bright and shiny, and when a rainbow meets the mirror, it colors the entire planet in vibrant hues"',
    img: "/planetpage/planet04.png",
  },
  {
    name: "Planet 5",
    description: "This is the description for Planet 2.",
    class: "planet1-content", // Add the class to bind to the element
    title: "Planet Of\nGalaxy",
    nameTitle: "NianPu Lu",
    subtitle1: "/He",
    subtitle2: "/10",
    quote:
      '"My planet is called Galaxy Planet. The trees on the planet are called Galaxy Trees, and their bark flows with the colors of the galaxy"',
    img: "/planetpage/planet05.png",
  },
];

const currentIndex = ref(0); // 当前星球索引

// 选择星球
const selectPlanet = (index) => {
  currentIndex.value = index; // 更新当前星球
};

const goBack = () => {
  currentIndex.value = (currentIndex.value - 1 + planets.length) % planets.length; // 循环到上一个星球
};
// 前进到下一个星球
const goNext = () => {
  currentIndex.value = (currentIndex.value + 1) % planets.length; // 循环到下一个星球
};

const enterPlanet = () => {
  let name = "homepage1";
  switch (currentIndex.value - 0) {
    case 0:
      name = "homepage1";
      break;
    case 1:
      name = "homepage2";
      break;
    case 2:
      name = "homepage3";
      break;
    case 3:
      name = "homepage4";
      break;
    case 4:
      name = "homepage5";
      break;
  }
  router.push({ name: name, params: { id: 0 } });
};
</script>
<template>
  <div class="container">
    <img
      :src="skybg"
      style="object-fit: cover; width: 100vw"
      class="sky-bg"
      alt="sky-bg"
    />
    <!-- 生成6个矩形，每个都有不同的渐变背景 -->

    <!-- 蓝色矩形 -->
    <div class="rectangle">
      <span class="rectangle span">
        The "objects" on this website are all derived from planets created through
        drawings by children in Guangxi. Each child has a different perspective on
        "objects," turning them into a multi-layered, multi-angled collection of
        fragments.
      </span>
    </div>
  </div>
  <!-- Enter 按钮，根据 currentIndex 跳转到对应的星球页面 -->
  <div @click="enterPlanet" class="enter-button mp">
    <span class="enter-text">Enter</span>
  </div>
  <!-- 传递currentIndex给子组件 -->
  <Planet :currentIndex="currentIndex" :modelData="planets" class="threecss" />

  <!-- 星球导航小圆 -->
  <div class="circle-nav">
    <svg
      width="152"
      height="52"
      viewBox="0 0 152 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <!-- 动态改变颜色的小圆 -->
      <g v-for="(planet, index) in planets" :key="planet.name">
        <circle
          :cx="26 + index * 25"
          cy="22"
          r="9"
          :fill="currentIndex === index ? '#7085F3' : '#E9E9DB'"
          fill-opacity="0.8"
          shape-rendering="crispEdges"
        />
      </g>
    </svg>
  </div>

  <!-- 返回按钮 -->
  <div class="button-container back-button" @click="goBack">
    <svg
      width="69"
      height="69"
      viewBox="0 0 79 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="39.5" cy="39.5" r="39.5" fill="#E9E9DB" fill-opacity="0.6" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M27.0338 41.4441L47.0075 61L52 56.1119L34.5226 39L52 21.8881L47.0075 17L27.0338 36.5559C26.3718 37.2042 26 38.0833 26 39C26 39.9167 26.3718 40.7958 27.0338 41.4441Z"
        fill="#7085F3"
      />
    </svg>
  </div>

  <!-- 前进按钮 -->
  <div class="button-container next-button" @click="goNext">
    <svg
      width="69"
      height="69"
      viewBox="0 0 79 79"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="39.5" cy="39.5" r="39.5" fill="#E9E9DB" fill-opacity="0.6" />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M50.9662 41.4441L30.9925 61L26 56.1119L43.4774 39L26 21.8881L30.9925 17L50.9662 36.5559C51.6282 37.2042 52 38.0833 52 39C52 39.9167 51.6282 40.7958 50.9662 41.4441Z"
        fill="#7085F3"
      />
    </svg>
  </div>

  <!-- 根据 currentIndex 显示对应的 planet 图像 -->
  <img :src="planets[currentIndex].img" alt="planet" class="planet-image" />
  <!-- 默认显示的图片 -->

  <div class="content-box" :class="planets[currentIndex].class">
    <div class="planet-title">{{ planets[currentIndex].title }}</div>
    <div class="planet-name">{{ planets[currentIndex].nameTitle }}</div>
    <div class="planet-subtitle1">{{ planets[currentIndex].subtitle1 }}</div>
    <div class="planet-subtitle2">{{ planets[currentIndex].subtitle2 }}</div>
    <div class="planet-quote">{{ planets[currentIndex].quote }}</div>
    <!-- 根据currentIndex动态渲染不同的星球 -->
  </div>

  <Navbar />
</template>

<style scoped>
.threecss {
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
}

.sky-bg {
  width: 100%;
  height: 100%;
  /* 设置为视口高度 */
  overflow: auto;
  /* 启用滚动 */
  margin: 0;
  padding: 0;
  position: relative;
  overflow-y: auto;
  /* 启用上下滚动条 */
  overflow-x: hidden;
  /* 禁止水平滚动条 */
}

.rectangle {
  width: 100%;
  height: 57px;
  position: absolute;
  /* 使用固定定位 */
  top: 1020px;
  /* 紧贴页面底部 */
  background: #7085f3;
  z-index: 12;
}
.rectangle span {
  position: absolute;
  width: 1788px;
  height: 25.53px;
  left: calc(50% - 1788px / 2);
  top: 16px;

  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;

  color: #ffffff;
}
.circle-nav {
  position: absolute;
  width: 118px;
  height: 18px;
  left: 1336px;
  top: 117px;
}

/* 按钮容器样式 */

.back-button {
  position: absolute;
  width: 79px;
  height: 79px;
  left: 904px;
  top: 476px;
  z-index: 30;
}

.next-button {
  position: absolute;
  width: 79px;
  height: 79px;
  left: 1792px;
  top: 476px;
  z-index: 30;
}

/* 按钮悬停时放大 */
.button-container:hover {
  transform: scale(1.1);
  cursor: pointer;
  z-index: 30;
}

.planet1-content {
  position: absolute;
  width: 602.06px;
  height: 307px;
  left: 81px;
  top: 147px;
  color: white;
  font-size: 24px;
}

@font-face {
  font-family: "Audiowide";
  /* 自定义字体名称 */
  src: url("@/assets/front/Audiowide-Regular.ttf") format("truetype");
  /* 确保格式正确 */
  font-weight: normal;
  font-style: normal;
}

.planet-title {
  /* Planet Of Peace */

  position: absolute;
  width: 602px;
  height: 126px;
  left: 0px;
  top: 0px;

  font-family: "Audiowide";
  font-style: normal;
  font-weight: 400;
  font-size: 64px;
  line-height: 70px;
  /* or 109% */

  color: #ffffff;
  white-space: pre-line;
  /* This will respect the newline character */
}

.planet-name {
  /* ShuTong Zhao */

  position: absolute;
  width: 302.23px;
  height: 40.97px;
  left: 4px;
  top: 178px;

  font-family: "Abhaya Libre ExtraBold";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
}

.planet-subtitle1 {
  /* /She */

  position: absolute;
  width: 80px;
  height: 79px;
  left: 522px;
  top: 140px;

  font-family: "Abhaya Libre ExtraBold";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
}

.planet-subtitle2 {
  /* /11 */

  position: absolute;
  width: 80.06px;
  height: 31.54px;
  left: 522px;
  top: 178px;

  font-family: "Abhaya Libre ExtraBold";
  font-style: normal;
  font-weight: 800;
  font-size: 36px;
  line-height: 42px;
  color: #ffffff;
}

.planet-quote {
  position: absolute;
  width: 460px;
  height: 58px;
  left: calc(50% - 460px / 2 - 67.03px);
  top: 249px;

  font-family: "Abhaya Libre ExtraBold";
  font-style: normal;
  font-weight: 800;
  font-size: 20px;
  line-height: 20px;
  /* or 100% */
  text-align: right;
  letter-spacing: 0.1em;
  color: #ffffff;
}

.planet-image {
  position: absolute;
  width: 956px;
  height: 1080px;
  left: 0px;
  top: 0px;
  object-fit: cover;
}
.threecss {
  top: 80px;
  left: 950px;
  z-index: 30;
}
.enter-button {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 68px;
  gap: 10px;

  position: absolute;
  width: 180px;
  height: 48px;
  left: 1250px;
  top: 880px;

  background: #e9e9db;
  box-shadow: 0px 4px 22.8px 2px #98a8ff, 0px 0px 13.2px 1px rgba(249, 249, 230, 0.52);
  border-radius: 41px;

  z-index: 1000;
}
.enter-text {
  position: relative;
  width: 105px;
  height: 41px;
  font-family: "Abel";

  font-weight: 500;
  font-size: 32px;
  line-height: 41px;
  display: flex;
  align-items: center;
  text-align: center;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: #7085f3;

  flex: none;
  order: 0;
  flex-grow: 0;
}

.mp {
  cursor: pointer;
}
</style>
