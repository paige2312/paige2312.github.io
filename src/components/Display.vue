<script setup>
import texture from "@/assets/homepage/texture.png";
import { useRouter } from 'vue-router'
import Navbar from '@/components/Navbar.vue';

const router = useRouter()

const openModel = (id) => {
  router.push({ name: "homepage1.1", params: { id: id } });
};

</script>
<template>
  <Navbar />
<div class="container">
  <!---bg-->
  <img
    src="/Display/Display-bg.png"
    class="Display-bg"
    style="
      position: absolute;
      width: 100vw;
      height: 2042px;
      left:0px;
      top: 0px;
      z-index: 1;
    "
  />
 <!---id1-->
 <img
    src="/Display/mechine.gif"
    class="id1 mp"
    style="
      position: absolute;
      width: 622px;
      height: 274px;
      left:80px;
      top: 474px;
      z-index: 2;
    "

    @click="openModel(1)"
  />
   <!---id2-->
 <img
    src="/Display/milktea.gif"
    class="id2 mp"
    style="
      position: absolute;
      width: 257px;
      height: 287px;
      left:387px;
      top: 1131px;
      z-index: 2;
    "
    
    @click="openModel(2)"
  />
    <!---id3-->
 <img
    src="/Display/phone.gif"
    class="id3 mp"
    style="
      position: absolute;
      width: 227px;
      height: 210px;
      left:747px;
      top: 507px;
      z-index: 2;
    "
    @click="openModel(3)"
  />
     <!---id4-->
 <img
    src="/Display/startree.gif"
    class="id4 mp"
    style="
      position: absolute;
      width: 245px;
      height: 305px;
      left:40px;
      top: 861px;
      z-index: 2;
    "
    @click="openModel(4)"
  />
       <!---id5-->
 <img
    src="/Display/ladder.gif"
    class="id5 mp"
    style="
      position: absolute;
      width: 242px;
      height: 441px;
      left:41px;
      top: 1192px;
      z-index: 2;
    "
    @click="openModel(5)"
  />
        <!---id6-->
 <img
    src="/Display/cheese.gif"
    class="id6 mp"
    style="
      position: absolute;
      width: 411px;
      height: 304px;
      left:315px;
      top: 849px;
      z-index: 2;
    "
    @click="openModel(6)"
  />
          <!---id7-->
 <img
    src="/Display/bed.gif"
    class="id7 mp" 
    style="
      position: absolute;
      width: 326px;
      height: 230px;
      left:1110px;
      top: 769px;
      z-index: 2;
    "
    @click="openModel(7)"
  />
            <!---id8-->
 <img
    src="/Display/balcony.gif"
    class="id8 mp"
    style="
      position: absolute;
      width: 248px;
      height: 194px;
      left:825px;
      top: 794px;
      z-index: 2;
    "
    @click="openModel(8)"
  />
             
  <!---id9-->
 <img
    src="/Display/mango.gif"
    class="id9 mp"
    style="
      position: absolute;
      width: 166px;
      height: 151px;
      left:531px;
      top: 1482px;
      z-index: 2;
    "
    @click="openModel(9)"
  />              
  <!---id10-->
 <img
    src="/Display/peach.gif"
    class="id10 mp"
    style="
      position: absolute;
      width: 144px;
      height: 151px;
      left:375px;
      top: 1482px;
      z-index: 2;
    "
    
    @click="openModel(10)"
  />
 
 
   <!---id11-->
   <img
    src="/Display/chair.gif"
    class="id11 mp"
    style="
      position: absolute;
      width: 364px;
      height: 445px;
      left:759px;
      top: 1112px;
      z-index: 2;
    "
    @click="openModel(11)"
  />
    <!---id12-->
   <img
    src="/Display/robot.gif"
    class="id12 mp"
    style="
      position: absolute;
      width: 202px;
      height: 304px;
      left:372px;
      top:206px;
      z-index: 2;
    "
    @click="openModel(12)"
  />
    <!---id13-->
  <img
    src="/Display/cloudtree.gif"
    class="id13 mp"
    style="
      position: absolute;
      width: 203px;
      height: 305px;
      left:31px;
      top:1691px;
      z-index: 2;
    "
    @click="openModel(13)"
  />
    <!---id14-->
  <img
    src="/Display/pump.gif"
    class="id14 mp"
    style="
      position: absolute;
      width: 279px;
      height: 245px;
      left:743px;
      top:253px;
      z-index: 2;
    "
    @click="openModel(14)"
  />
    <!---id15-->
  <img
    src="/Display/rainbowtree1.gif"
    class="id15 mp"
    style="
      position: absolute;
      width: 227px;
      height: 328px;
      left:666px;
      top:1678px;
      z-index: 2;
    "
    
    @click="openModel(15)"
  />
    <!---id16-->
  <img
    src="/Display/mirror.gif"
    class="id16 mp"
    style="
      position: absolute;
      width: 196px;
      height: 232px;
      left:1012px;
      top:275px;
      z-index: 2;
    "
    @click="openModel(16)"
  />
    <!---id17-->
  <img
    src="/Display/rainbowtree2.gif"
    class="id17 mp"
    style="
      position: absolute;
      width: 227px;
      height: 328px;
      left:440px;
      top:1682px;
      z-index: 2;
    "
    @click="openModel(17)"
  />
    <!---id18-->
  <img
    src="/Display/tv.gif"
    class="id18 mp"
    style="
      position: absolute;
      width: 376px;
      height: 257px;
      left:976px;
      top:498px;
      z-index: 2;
    "
    @click="openModel(18)"
  />
    <!---id19-->
  <img
    src="/Display/rainbowhouse.gif"
    class="id19 mp"
    style="
      position: absolute;
      width: 249px;
      height: 289px;
      left:1177px;
      top:1336px;
      z-index: 2;
    "
    @click="openModel(19)"
  />
    <!---id20-->
  <img
    src="/Display/gaint.gif"
    class="id20 mp"
    style="
      position: absolute;
      width: 235px;
      height: 321px;
      left:1070px;
      top:1695px;
      z-index: 2;
    "
    @click="openModel(20)"
  />
    <!---id21-->
  <img
    src="/Display/galaxytree.gif"
    class="id21 mp"
    style="
      position: absolute;
      width: 196px;
      height: 328px;
      left:244px;
      top:1678px;
      z-index: 2;
    "
    @click="openModel(21)"
  />
    <!---id22-->
  <img
    src="/Display/galaxyhouse.gif"
    class="id22 mp"
    style="
      position: absolute;
      width: 249px;
      height: 261px;
      left:1177px;
      top:1075px;
      z-index: 2;
    "
    @click="openModel(22)"
  />
 
   
</div>
</template>



<style scoped>
.mp {
  cursor: pointer;
}
</style>


