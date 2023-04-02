<template>
  <div class="hbg">
    <transition name="hero-fade" mode="out-in">
      <div class="hshow" :key="oneheroflex">
        <div v-for="(hero, index) in backgroundImageUrls" :key="index" v-show="oneheroflex === index + 1">
          <div class="hflex">
            <div class="himg">
              <img :src="hero.img" />
            </div>
            <div class="htext" :class="{ 'slide-up': oneheroflex === index + 1 }">
              <h1>{{ hero.name }}</h1>
              <p>{{ hero.more }}</p>
              <button class="wlbtn" :class="{ 'bounce': oneheroflex === index + 1 }">Shop Now</button>

            </div>
          </div>
        </div>
      </div>
    </transition>
  </div>

  <!-- <div   className="loopbg" :style="{ backgroundImage: backgroundStyle }"> -->
    <div class="herobg">
  <!-- <div class="navigate">

<div class="togglepagep" @click="showPrevImage">
    <i class="fas fa-chevron-left" id="right"></i>
</div>
<div class="togglepage" @click="showNextImage">
    <i class="fas fa-chevron-right"></i>
</div>
</div> -->

  <div className="bgcontainer">

    <div className="loopbg" :style="backgroundStyle">

  </div>

</div>


</div>
      <!-- </div> -->
  <!-- <div className="bgcontainer"> -->

  <!-- <div className="bgimage">
    <h1> Working </h1>
  </div> -->

<!-- </div> -->


  <!-- <div className="omo" v-for="(myimage, index) in allimages" :key="index"> -->
    <!-- <div v-show="myimg === currentImageIndex"> -->
      <!-- <div   className="loopbg" :style="{ backgroundImage: backgroundStyle }"> -->

      <!-- </div> -->
    <!-- <img :src="myimage.image"/> -->
    <!-- <div :style="{ backgroundImage: 'url(' + myimage.image + ')' }"> -->
  <!-- <div className="loopbg" :style="{ backgroundImage: 'url(' + myimage.image + ')' }" v-for="(image, index) in images" :key="index" > -->
<!--
  <div className="loopbg" :style="{ backgroundImage: 'url(' + image + ')' }" v-for="(image, index) in images" :key="index" v-show="index === currentImageIndex"> -->
    <!-- Your component content here -->
  <!-- </div> -->
  <!-- make an array of images down. -->
    <!-- <img src="../assets/images/fladylong2.jpg"/> -->
  <!-- </div> -->

  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div> -->

  <!-- <div className="allproducts" v-for="(product, i) in products" :key="i"> -->

    <!-- <div className="pw">

    <div className="pgridc">
  <div v-for="(product, i) in productlist" :key="i">
  <p> <img :src="product.image"/> </p>
    <p className="pname"  @click="viewProduct(product.id)"> {{product.title}}  </p>
  <p className="pprice"> {{product.price}}  </p>
  </div>

  </div>
  </div> -->

  <br/>
  <br/>

  <Footer></Footer>

</template>

<script>
import Oneimg from '../assets/images/nita.png'
import Twoimg from '../assets/images/fladycut.png'
import Threeimg from '../assets/images/fladylong2.jpg'
// Product images.
import Pone from '../assets/images/flady.jpg'
import Ptwo from '../assets/images/rubygown.jpg'
import Pthree from '../assets/images/aritop.jpg'
import Pfour from '../assets/images/bennybubu.jpg'
// @ is an alias to /src
import Counts from '@/components/Count.vue'
import Footer from '@/components/Footer.vue'
import { checkCompatEnabled } from '@vue/compiler-core'
import { getTransitionRawChildren } from 'vue'
import axios from 'axios'

export default {
  props: ['productlist', 'selected', 'viewProduct',],

  data(){
    return{
    //   backgroundImageUrls: [
    //   Oneimg,
    //   Twoimg,
    //   Threeimg
    // ],
    oneheroflex:1,
    intervalId: null,
    intervalTime: 7000, // in milliseconds,
    backgroundImageUrls:[
      {
        img: Oneimg,
        name: "Check out our brand new 2023 collection",
        more: "A collection of all our latest categories",
      },
      {
        img: Twoimg,
        name: "Check out our brand new 2023 collection",
        more: "A collection of all our latest categories",
      },
    ],

    currentImageIndex: 0,
    products:[],
    // selectedProducts:{},

      // products:[
      // {
      //   image: Pone,
      //   name: "BLACKTOP",
      //   price: "N30,000",
      // },

      // {
      //   image: Ptwo,
      //   name: "RUBYGOWN",
      //   price: "N30,000",
      // },

      // {
      //   image: Pthree,
      //   name: "ARITOP",
      //   price: "N30,000",
      // },

      // {
      //   image: Pfour,
      //   name: "BENNYBUBU",
      //   price: "N30,000",
      // },
      // {
      //   image: Pone,
      //   name: "BLACKTOP",
      //   price: "N30,000",
      // },
      // {
      //   image: Ptwo,
      //   name: "RUBYGOWN",
      //   price: "N30,000",
      // },
      // {
      //   image: Pthree,
      //   name: "ARITOP",
      //   price: "N30,000",
      // },
      // {
      //   image: Pfour,
      //   name: "BENNYBUBU",
      //   price: "N30,000",
      // },
      // ]

    }
  },
  components: {
    Counts,
    Footer
  },

  // computed: {
  //   backgroundStyle() {
  //     return {
  //       backgroundImage: `url(${this.backgroundImageUrls[this.currentImageIndex]})`,
  //     };
  //   },
  // },

  methods: {

    // getProductDetails(info){
    //  console.log(info.title)
    // },

    // getProductDetails(productId) {
    //   axios.get('http://localhost/gpd.php', {
    //       productId,
    //   })
    //   .then(response => {
    //     // this.selectedProduct = response.data;
    //     console.log(productId)
    //   })
    //   .catch(error => {
    //     console.error(error);
    //   });
    // },

//    getProductDetails(productId){
//   axios.post('http://localhost/gpd.php?selected=' + encodeURIComponent(productId))
//   axios.post('http://localhost/gpd.php', { id: productId })
//     .then(response => {
//       console.log(selected);
//     })
//     .catch(error => {
//       console.error(error);
//     });
// },


// getProductDetails(productId) {
//   console.log(productId);
//   axios.post('http://localhost/gpd.php', { id: productId })
//     .then(response => {
//       this.selectedProducts = response.data
//       console.log(this.selectedProducts);
//     })
//     .catch(error => {
//       console.error(error);
//       console.log(error.response.data);
//     });
// },


      showNextImage() {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImageUrls.length;
    },


    showPrevImage() {
      // this.contimg  = this.contimg.length
      // console.log(this.contimg)
      if(this.currentImageIndex == 0){
        this.currentImageIndex = 0
      }else{
        // if (this.currentImageIndex > 0) {
        // this.currentImageIndex--;
        // }
        // else{
        this.currentImageIndex = (this.currentImageIndex - 1) % this.backgroundImageUrls.length;
      }
      console.log(this.currentImageIndex)
      // this.currentImageIndex = (this.currentImageIndex - 1) % this.backgroundImageUrls.length;
      // console.log(this.currentImageIndex)
    },
  },

  // mounted(){
  //   console.log(this.backgroundImageUrls.length)
  // },

  // onMounted(()=>{
  //       // I can be so dumb sometimes.
  //       // we are aiming for the value of the variable we have already set, brah, then we select the class and make it the length.
  //      currentimagecount.value = document.querySelectorAll('.omo').length;
  //      console.log(currentimagecount.value)
  //   })

  // mounted() {
  //   console.log(this.backgroundImageUrls.length)
  //    currentimagecount.value = document.querySelectorAll('.hflex').length;
  //      console.log(currentimagecount.value)
  //   setInterval(() => {
  //     this.currentImageIndex = (this.currentImageIndex + 1) % this.backgroundImageUrls.length;
  //   }, 4000); // Change the interval as needed
  // },

  mounted() {
    this.intervalId = setInterval(() => {
      this.oneheroflex = (this.oneheroflex % this.backgroundImageUrls.length) + 1;
    }, this.intervalTime);
  },
  beforeUnmount() {
    clearInterval(this.intervalId);
  }

  // mounted() {
  //   fetch("http://localhost/index.php")
  //     .then((response) => response.json())
  //     .then((data) => {
  //       this.products = data;
  //       console.log(this.products)
  //     });
  //   }
}



</script>
<style>

.hflex{
  display:flex;
  justify-content:space-between;
  width:85%;
  margin:auto;
}

.hbg{
  background:#F1F2F4;
}

.himg img{
  /* width:100%; */
  width:400px;
}

.himg{
  flex-basis:40%;
}

.htext{
  flex-basis:40%;
  margin-top:70px;
  margin-right:150px;
}

.htext h1{
  font-weight:200;
  font-size:35px;
  line-height:1.4em;
  margin-bottom:-3px;
}

.htext p{
  font-weight:200;
  line-height:1.2em;
}

/* .htext button{

} */

.htext button {
    font-Weight: 500;
    /* width:50%; */
    font-size: 1.2em;
    color:white;
}

.wlbtn{
  /* margin-top:2px; */
    border-radius: 5px;
    background: rgba(129, 166, 149);
    align-items: center;
    padding: 10px 30px;
    border:none;
}

.hero-fade-enter-active {
  animation: hero-fade-in 1s ease-out both;
}
.hero-fade-leave-active {
  animation: hero-fade-out 1s ease-out both;
}

.slide-up {
  animation: slide-up 1.2s cubic-bezier(0.39, 0.575, 0.565, 1) both;
  opacity: 0;
  transform: translateY(100%);
  will-change: opacity, transform;
}

.slide-up-active {
  opacity: 1;
  transform: translateY(0);
}

.bounce-up {
  animation: bounce-up 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) 0.6s both;
  opacity: 0;
  transform: translateY(100%);
  will-change: opacity, transform;
}

.bounce-up-active {
  opacity: 1;
  transform: translateY(-70px);
}

@keyframes hero-fade-in {
  0% {
    opacity: 0;
    transform: translateY(-50px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes hero-fade-out {
  0% {
    opacity: 1;
    transform: translateY(0);
  }
  100% {
    opacity: 0;
    transform: translateY(50px);
  }
}

@keyframes slide-up {
  0% {
    opacity: 0;
    transform: translateY(60%);
  }
  100% {
    opacity: 1;
    transform: translateY(1%);
  }
  /* 80% {
    transform: translateY(10%);
  }
  100% {
    transform: translateY(0);
  } */
}

/* .herobg{
  background: rgba(242, 255, 246, 0.7);
} */

.heropic img{
  width:1000px;
}

.loopbg{
  background-size: cover;
    background-repeat: no-repeat;
    height: 10vh;
    -o-object-fit: cover;
    object-fit: cover;
    width: 100%;
}

.heropic{
  align-items:center;
  justify-content:center;
  display:flex;
  margin-top:50px;
  margin:auto;
}

.bgimage{
  background-image: url('../assets/images/orange.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  height: 70vh;
  object-fit: cover;
  /* padding-top:-50px; */
  width: 100%;
}

.bgcontainer{
  width:80%;
  object-fit: cover;
  margin:auto;
  padding-bottom:60px;
}

.navigate {
    position: absolute;
    justify-content: space-between;
    top: 350px;
    width: 90%;
    left: 0;
    right: 0;
    margin: 0 auto;
    display: flex;
    z-index: 3;
}

.pw {
    width: 90%;
    margin: auto;
}

.pgridc{
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: minmax(10px, 4fr);
  margin-bottom: 40px;
}

.pgridc img{
  width:250px;
}

.pname{
  color:#81A695;
  font-weight:500;
}

.pprice{
  font-size:13px;
  margin-top:-8px;
}

@media (max-width: 1200px){

  .hflex{
  display:block;
}

.hbg {
    background: #F1F2F4;
    padding-bottom:180px;
}

.htext{
  margin-top:-300px;
  color:rgb(69, 69, 69);
  flex-basis: 100%;
  width:90%;
}

.htext h1{
  font-weight:500;
  font-size:30px;
  line-height:1.4em;
  margin-bottom:-3px;
}

.htext p{
  font-weight:400;
  line-height:1.2em;
}

  .pgridc {
    grid-template-columns: repeat(3, 300px);
    align-items: center;
    margin: auto;
}

.pw {
    width: 90%;
    align-items: center;
    margin: auto;
}

}

@media (max-width: 1000px){

.pgridc {
  grid-template-columns: repeat(2, 300px);
  align-items: center;
  margin: auto;
}

.pw {
  width: 90%;
  align-items: center;
  margin: auto;
}

}


@media (max-width: 700px){
  .pgridc {
    /* grid-template-columns: repeat(1, 300px);
    align-items: center;
    margin: auto; */

    grid-template-columns: auto;
    justify-content: center;
    align-content: center;
    grid-gap: 10px;
}

.pw {
    width: 100%;
    /* align-items: center;
    margin: auto; */
}

}

</style>
