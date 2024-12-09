<template>
  <nav class="navbar">
    <span class="nav-text"> WHAT IS AN OBJECT? </span>
    <div class="navbar-content">
      <!-- Homepage -->
      <div
        class="nav-item homepage"
        :class="{ active: currentPage === 'homepage' }"
        @click="setCurrentPage('homepage')"
      >
        <span>Homepage</span>
      </div>
      <!-- Display -->
      <div
        class="nav-item display"
        :class="{ active: currentPage === 'display' }"
        @click="setCurrentPage('display')"
      >
        <span>Display</span>
      </div>
      <!-- World -->
      <div
        class="nav-item world"
        :class="{ active: currentPage === 'world' }"
        @click="setCurrentPage('world')"
      >
        <span>World</span>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();

const currentPage = ref("homepage"); // 默认在 homepage 页面

const url = router.options.history.location;
// console.log(router.options.history.location);
switch (url) {
  case "/world":
    currentPage.value = "world";
    break;
  case "/display":
    currentPage.value = "display";
    break;
}


const setCurrentPage = (page) => {
  currentPage.value = page; // 更新当前页面状态

  console.log(page);

  router.push({ name: page, params: {} });
};
</script>

<style scoped>
@font-face {
  font-family: "Abel"; /* 自定义字体名称 */
  src: url("@/assets/front/Abel-Regular.ttf") format("truetype"); /* 确保格式正确 */
  font-weight: normal;
  font-style: normal;
}
@font-face {
  font-family: "Abhaya Libre ExtraBold"; /* 自定义字体名称 */
  src: url("@/assets/front/abhaya-libre.regular.ttf") format("truetype"); /* 确保格式正确 */
  font-weight: normal;
  font-style: normal;
}

.navbar {
  position: fixed; /* 固定在页面顶部 */
  top: 0;
  left: 0;
  width: 100%; /* 使导航栏宽度占满整个页面 */
  height: 78px; /* 设置导航栏的高度 */
  background: linear-gradient(
    352deg,
    rgba(231, 231, 231, 0.8) 0%,
    #ced2e9 100%
  ); /* 渐变背景 */
  z-index: 100; /* 确保导航栏在其他内容之上 */
  display: flex;
  justify-content: space-between; /* 左对齐，右边靠边 */
  align-items: center;
  padding: 0 35px; /* 给左右边添加内边距 */
}
.nav-text {
  font-family: "Abhaya Libre ExtraBold", sans-serif; /* 字体 */
  font-size: 40px;
  color: #7085f3; /* 字体颜色 */
  font-weight: bold;
  text-shadow: 0px 1px 15px rgba(47, 115, 245, 0.8); /* 字体阴影 */
  text-align: center;
  letter-spacing: 6px; /* 字母间距 */
}
.navbar-content {
  display: flex; /* 水平排列导航项 */
  gap: 25px; /* 设置导航项之间的间距 */
  margin-right: 75px; /* 添加右边距 */
  width: auto; /* 确保宽度不被压缩 */
}
.nav-item {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 225px;
  height: 47px;
  border-radius: 50%;
  background: transparent;
  border: 2px solid #7085f3;
  position: relative;
  text-align: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s, border-color 0.3s;
}

.nav-item span {
  font-family: "Abel", sans-serif;
  font-size: 24px;
  color: #5d5d5d; /* 默认文字颜色 */
  font-weight: normal;
  text-shadow: 0px 1px 20px rgba(47, 115, 245, 0.5);
}

/* 激活状态：背景蓝色，文字白色 */
.nav-item.active {
  background: #7085f3;
}
.nav-item.active span {
  color: #fff !important;
  font-family: "Abel", sans-serif;
  font-size: 24px;
  font-weight: regular;
}
</style>
