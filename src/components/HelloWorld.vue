<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'; // 引入 useRouter 进行页面跳转
import objectImage from "@/assets/homepage/objectsimg.png";
import weight from "@/assets/homepage/weight.png";
import star from "@/assets/homepage/Star.png";
import texture from "@/assets/homepage/texture.png";

const router = useRouter(); // 使用 Vue Router
const count = ref(0)
// State variables
const isOverlayVisible = ref(false); // Controls overlay visibility
const clickCount = ref(0); // Tracks the number of clicks
const isFadingOut = ref(false); // 控制渐变状态
const showBlueRectangle = ref(false); // 控制蓝色矩形的显示状态
// Click handler
const handleClick = () => {
  console.log("handleClick called"); // Debug log

  // Show overlay
  if (!isOverlayVisible.value) {
    isOverlayVisible.value = true;
  }

    // Increment click count
    clickCount.value += 1;
  console.log(`Updated clickCount: ${clickCount.value}`);
  if (clickCount.value === 3) {
    console.log("Displaying blue rectangle...");
    showBlueRectangle.value = true; // 确保蓝色矩形显示
  }
  // Redirect to Homepage after 5 clicks
  if (clickCount.value === 4) {
    console.log('Redirecting to Homepage...');
   
    isFadingOut.value = true; // 开启渐变效果
    // 延迟动画完成后跳转
    setTimeout(() => {
      console.log("Redirecting to Homepage...");
      router.push("/homepage"); // 动画完成后跳转
    }, 500); // 延迟时间设置为动画持续时间
  }
};

const fullText = "The 'objects' on this website are all derived from planets created through drawings by children in Guangxi. Each child has a different perspective on 'objects,' turning them into a multi-layered, multi-angled collection of fragments.";

// 分割字符数组
const sentenceText = ref(fullText.split(""));



</script>
<template>
<div :class="{ fadeOut: isFadingOut }">   
   <div class="container">
   <img src="@/assets/homepage/finger.png" alt="Icon" class="icon" />
      <div class="radial-background"></div>
      <span class="function-text">FUNCTION</span>
      <span class="texture-text">TEXTURE</span>
      <span class="shape-text">SHAPE</span>
      <span class="color-text">COLOR</span>
      <span class="weight-text">WEIGHT</span>
      <img
    :src="objectImage"
    style="object-fit: cover; width: 665px"
    class="objects-image"
    alt="Objects Image"/>
     <img
    :src="weight"
    style="object-fit: cover; width: 98px"
    class="weight" />
    <img
    :src="star"
    style="object-fit: cover; "
    class="star" />
    <img
    :src="texture"
    style="object-fit: cover; "
    class="texture" />
  <div class="frame-46">
    <svg
      width="81"
      height="1080"
      viewBox="0 0 81 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_857_479)">
        <rect
          x="26"
          y="1080"
          width="1080"
          height="29.6977"
          transform="rotate(-90 26 1080)"
          fill="url(#paint0_radial_857_479)"
          fill-opacity="0.49"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_857_479"
          x="0.700001"
          y="-25.3"
          width="80.2973"
          height="1130.6"
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
          <feGaussianBlur
            stdDeviation="12.65"
            result="effect1_foregroundBlur_857_479"
          />
        </filter>
        <radialGradient
          id="paint0_radial_857_479"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(566 1094.85) scale(540 14.8488)"
        >
          <stop stop-color="#E8D4EB" />
          <stop offset="1" stop-color="#D9AEDF" />
        </radialGradient>
      </defs>
    </svg>
  </div>
  <div class="frame-44">
    <svg
      class="svg-graphic"
      width="65"
      height="1080"
      viewBox="0 0 65 1080"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g filter="url(#filter0_f_857_451)">
        <rect
          x="39"
          width="1074"
          height="34"
          transform="rotate(90 39 0)"
          fill="url(#paint0_linear_857_451)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_857_451"
          x="-20.3"
          y="-25.3"
          width="84.6"
          height="1124.6"
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
          <feGaussianBlur
            stdDeviation="12.65"
            result="effect1_foregroundBlur_857_451"
          />
        </filter>
        <linearGradient
          id="paint0_linear_857_451"
          x1="576"
          y1="0"
          x2="576"
          y2="34"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#E8D4EB" />
          <stop offset="1" stop-color="#D9AEDF" />
        </linearGradient>
      </defs>
    </svg>
  </div>  
  <!-- 点击触发 -->

  <div class="click" @click="handleClick">Click here</div>

  <div v-if="isOverlayVisible" class="overlay">
  <!-- 文字内容，根据点击次数叠加显示 -->
  <div class="rotated-text1" v-if="clickCount >= 1">WHAT IS AN</div>
  <div class="rotated-text2" v-if="clickCount >= 1">OBJECT?</div>
  </div>
  <div class="rotated-text3" v-if="clickCount >= 2">How should we perceive it?</div>
 </div>

<!-- 遮罩 -->

<!-- 蓝色矩形 -->
<div v-if="showBlueRectangle" class="blue-rectangle">
  <div class="sentence">
    <span
      v-for="(char, index) in sentenceText"
      :key="index"
      :style="{ animationDelay: `${index * 0.01}s` }"
    >
      {{ char }}
    </span>
  </div>
</div>
</div>
</template>

<style scoped>
/* 容器，确保没有滚动条 */
.container {
  
 width:100%;
height:100vh;
  min-height: 100vh; /* 确保容器的高度至少与视窗一致 */
  overflow: auto; /* 启用滚动 */
  margin:0;
  padding: 0;
  position:relative;
  overflow-y: auto; /* 启用上下滚动条 */
  overflow-x: hidden; /* 禁止水平滚动条 */
 
}
@media (max-width: 768px) {
  .radial-background {
    width: 40vw; /* 在小屏幕上元素宽度更大 */
    height: 40vw;
    line-height: 40vw;
    font-size: 0.8rem;
  }
}
/* 新文字样式 */
@font-face {
  font-family: 'Abhaya Libre ExtraBold';
  src: url('@/assets/front/abhaya.ttf') format('truetype');
  font-weight: 800;
}
@font-face {
  font-family: 'Able';
  src: url('@/assets/front/abhaya.ttf') format('truetype');
  font-weight: 800;
}
.rotated-text1{
  
position: absolute;
width: 726px;
height: 91px;
left: 62px;
top: 776px;

font-family: 'Abhaya Libre ExtraBold';
font-style: normal;
font-weight: 800;
font-size: 108px;
line-height: 127px;
letter-spacing: 0.15em;

color: #00A8FF;

text-shadow: 4px 6px 12.5px rgba(157, 149, 123, 0.37);
transform-origin: top left;
transform: rotate(-90deg);
  white-space: nowrap; /* 防止文字换行 */
}
.rotated-text2{
  /* OBJECT? */

position: absolute;
width: 528px;
height: 82px;
left: 173px;
top:773px;

font-family: 'Abhaya Libre ExtraBold';
font-style: normal;
font-weight: 800;
font-size: 108px;
line-height: 127px;
letter-spacing: 0.15em;

color: #00A8FF;

text-shadow: 2px 2px 20px rgba(47, 115, 245, 0.55);
transform-origin: top left;
transform: rotate(-90deg);
  white-space: nowrap; /* 防止文字换行 */

}
.rotated-text3{
  /* How should we perceive it? */

position: absolute;
width: 636px;
height: 33px;
right:6%;

top: 815px;

font-family: 'Abel';
font-style: normal;
font-weight: 360;
font-size: 30px;
line-height: 41px;
text-align: center;
letter-spacing: 0.3em;
text-transform: uppercase;

color: #A9A9A9;




  white-space: nowrap; /* 防止文字换行 */

}
.blue-rectangle {
  position: fixed;
  width: 100%; /* 宽度为整个视窗 */
  height: 110px;
  bottom: 0; /* 固定在底部 */
  background: #00A8FF;
  z-index: 12;
  animation: fadeIn 1s forwards; /* 淡入动画 */
}
.sentence {
  font-family: 'Abel';
  font-style: normal;
  font-weight: 310;
  font-size: 24px;
  line-height: 29px;
  color: #FFFFFF;
  text-align: left; /* 左对齐文字 */
  padding: 20px 66px; /* 上下内边距20px，左右内边距66px */
  width:100vw; /* 适配左右内边距 */
  box-sizing: border-box; /* 确保内边距不影响宽度 */
  z-index: 14;
}
.sentence span {
  opacity: 0; /* 初始不可见 */
  animation: fadeIn 0.3s ease forwards; /* 渐显动画 */
}

@keyframes fadeIn {
  0% {
    opacity: 0;
    transform: translateY(10px); /* 从下向上淡入 */
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
.fadeOut {
  animation: fadeOut 2s ease forwards; /* 确保动画时间为 1 秒 */
}

@keyframes fadeOut {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.click {
  position: absolute;
  width: 182px;
  height: 29px;
  left: 52%;
  top: 50%;
  transform: translateX(-50%);
  font-family: 'Abel';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  text-shadow: 0px 4px 7.7px rgba(110, 109, 109, 0.55);
  white-space: nowrap;
  z-index: 13;
  /* 添加动画 */

  cursor: pointer;

}
@keyframes bounce {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
}
.overlay {
  position: absolute;
  width: 606px;
  height: 1080px;
  left: 0px;
  top: 0px;
  background: linear-gradient(270deg, rgba(255, 255, 255, 0) 0%, #ffffff 103.46%);
  backdrop-filter: blur(4px); /* 背景模糊 */
  animation: fadeIn 1s forwards; /* 淡入动画 */
  z-index: 10;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
    backdrop-filter: blur(0px);
  }
  100% {
    opacity: 1;
    backdrop-filter: blur(4px);
  }
}
.objects-image {
  position: absolute;
width: 34.63%;
height: 1080px;
left: 0px;
top: 0px;
}
.icon{
  position: absolute;
  width: 30px;
  height: 30px;
  left: 53%; /* 水平居中 */
  top: 55%; /* 垂直居中 */
  transform: translate(-50%, -50%);
  background: url('your-icon-url.svg') no-repeat center;
  background-size: contain;
  z-index: 13;
  animation: bounce 0.8s infinite ease-in-out
}
@keyframes bounce {
  0%, 100% {
    transform: translate(-50%, -50%) translateY(0);
  }
  50% {
    transform: translate(-50%, -50%) translateY(-10px);
  }
}
.weight{
  position: absolute;
width: 98px;
height: 101px;
left: 75.4%;
top: 628px;
}
.star{
  position: absolute;
width: 56px;
height: 56px;
left: 66%;
top: 412px;

background: #ffffff00
}
.texture{
  position: absolute;
width: 45px;
height: 47px;
left: 75.1%;
top: 229px;

background: #ffffff00
}

/* 背景样式 */
.radial-background {
  background: radial-gradient(
    50% 50% at 50% 50%,
    #fad5e6 0%,
    #ede3f9 37.9%,
    #dee7ff 69.9%,
    #e5e4e7 82.9%,
    #ffffff 100%
  );
  width: 104.5%;
  height: 800.57px;
  position: absolute;
 
  transform: rotate(18.57deg); /* 保持旋转效果 */
  z-index: -1;
}
.function-text {
  position: absolute;
width: 62px;
height: 20px;
left: 59.4%;
top: 177px;

font-family: 'Abel';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;

color: #6C6E6D;
}
/* texture文字 */
.texture-text{
  position: absolute;
width: 56px;
height: 20px;
left: 78.6%;
top: 247px;

font-family: 'Abel';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;

color: #6C6E6D;
}
/* shape文字 */
.shape-text{
  /* Shape */

position: absolute;
width: 42px;
height: 20px;
left: 70%;
top: 430px;

font-family: 'Abel';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;

color: #6C6E6D;
}
/* colortext */
.color-text{
  /* Color */

position: absolute;
width: 41px;
height: 20px;
left: 92.4%;
top: 580px;

font-family: 'Abel';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;

color: #6C6E6D;
}
.weight-text{
  /* Weight */

position: absolute;
width: 49px;
height: 20px;
left:81%;
top: 678px;

font-family: 'Abel';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 20px;
text-align: center;
text-transform: uppercase;

color: #6C6E6D;
}

/* 第二个渐变的样式 */
.frame-46 {
  position: absolute;
  width: 100%; /* 确保宽度为指定值 */
  height: 2.75%; /* 确保高度为指定值 */
  left: 88.75%; /* 左边距 */
  top: 0px; /* 上边距 */
  mix-blend-mode: normal; /* 正常混合模式 */
  filter: blur(12.65px); /* 模糊效果 */
  
}
.frame-44 {
  position: absolute;
width: 1074px;
height: 34px;
left: 0px;
top: 0px;

mix-blend-mode: normal;
filter: blur(12.65px);
z-index: 11;
  
}



</style>







