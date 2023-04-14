<template>


  <div class="no" v-if="shownavmobile">

    <div class="fnavvv">

      <div class="xmmobile">
      <i class="fa-solid fa-xmark fa-2x" @click="removenav()" id="iconcolor"></i>
      </div>

      <br/>
      <br/>
      <br/>

    <a> <router-link to="/"> Tops </router-link> </a>
    <a> <router-link to="/"> Pants </router-link> </a>
    <a> <router-link to="/"> Skirt </router-link> </a>
    <a> <router-link to="/"> Gown </router-link> </a>
    <a> <router-link to="/"> Bubu </router-link> </a>
    <a> <router-link to="/"> Jumpsuit </router-link> </a>
    <a> <router-link to="/"> Swim Wear </router-link> </a>
    <a> <router-link to="/"> Swim Cover </router-link> </a>
    <a> <router-link to="/contact"> Contact </router-link> </a>
    </div>

  </div>

  <div class="av">

  <div className="logobg">
    <img src="./assets/images/sbjwhite.png"/>
  </div>


  <div class="navbg">

  <nav className="navlinks">

    <div className="catlinks">
    <a class="nl"> <router-link to="/"> Tops </router-link> </a>
    <a class="nl"> <router-link to="/"> Pants </router-link> </a>
    <a class="nl"> <router-link to="/"> Skirt </router-link> </a>
    <a class="nl"> <router-link to="/"> Gown </router-link> </a>
    <a class="nl"> <router-link to="/"> Bubu </router-link> </a>
    <a class="nl"> <router-link to="/"> Jumpsuit </router-link> </a>
    <a class="nl"> <router-link to="/"> Swim Wear </router-link> </a>
    <a class="nl"> <router-link to="/"> Swim Cover </router-link> </a>
    <a class="nl"> <router-link to="/contact"> Contact </router-link> </a>
    </div>

    <i class="fa-solid fa-magnifying-glass fa-2x" id="iconcolor" @click="showmys"></i>
     <router-link to="/cart"> <img src="./assets/images/sb.png" class="cartimg"/> </router-link>
    <span class="dottwo"> {{ my.length }} </span>
    <i class="fa-solid fa-bars fa-2x" @click="navtoggle()" v-if="!shownav" id="iconcolor"> </i>
    <i class="fa-solid fa-xmark fa-2x" @click="navtoggle()" v-if="shownav" id="iconcolor"></i>


  </nav>
  </div>

  <div class="sbg" v-if="shows">

    <div class="sflex">

      <div class="smain">
      <i class="fa-solid fa-magnifying-glass fa-2x" id="iconcolortwo"> </i>
    </div>

    <div class="sinput">
      <input type="search" name="type" placeholder="Search">
    </div>

    <div class="scancelthree" @click="stopshowmys">
      <i class="fa-solid fa-xmark fa-2x" id="iconcolorthree"> </i>
    </div>

    </div>

  </div>



<div class="sbgg">

<div class="sflex">

  <!-- <div class="smain">
  <i class="fa-solid fa-magnifying-glass fa-2x" id="iconcolortwo"> </i>
</div> -->

<div class="sinput">
  <input type="search" name="type" placeholder="Search here">
</div>
<a> <router-link to="/cart"> <i class="fa-solid fa-cart-shopping" id="iconcolor"></i> </router-link> </a>
    <!-- <img src="./assets/images/sb.png" class="cartimg"/> -->
    <span class="dottwo">6</span>
    <i class="fa-solid fa-bars fa-2x" @click="navmobiletoggle()" id="iconcolor"> </i>

</div>

</div>



  <!-- <div className="secondfnavlinks" v-if="shownav">

    <a> <router-link to="/"> Tops </router-link> </a>
    <a> <router-link to="/"> Pants </router-link> </a>
    <a> <router-link to="/"> Skirt </router-link> </a>
    <a> <router-link to="/"> Gown </router-link> </a>
    <a> <router-link to="/"> Bubu </router-link> </a>
    <a> <router-link to="/"> Jumpsuit </router-link> </a>
    <a> <router-link to="/"> Swim Wear </router-link> </a>
    <a> <router-link to="/"> Swim Cover </router-link> </a>
    <a class="nl"> <router-link to="/contact"> Contact </router-link> </a>

</div> -->

</div>
  <router-view :atc="addtocart" :buttonz="buttons" :increasev="increasevalue" :decreasev="decreasevalue" :hdc="handleClick" :productlist="products" :selected="selectedProducts" :viewProduct="(id) => getProductDetails(id)"/>
</template>

<script>
import axios from 'axios'
import router from './router'

export default{

  data(){
    return{
     products:[],
     mycart:localStorage.getItem('cart'),
     my:[],
     shownavmobile:false,
     shownav:false,
     shows:false,
     selectedProducts:{},
     title: localStorage.getItem('title'),
     price: localStorage.getItem('price'),
        buttons: [
        { id: 1, label: "S" },
        { id: 2, label: "Medium" },
        { id: 3, label: "Large" },
        { id: 3, label: "XL" },
        { id: 3, label: "XXL" },
        { id: 3, label: "X" },
      ],

    }
  },

  mounted() {
    fetch("http://localhost/index.php")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
        console.log(this.products)
      });
    },

    computed: {
    myccc() {
      return JSON.parse(localStorage.getItem('cart')) || [];
    },
  },
  created() {
    this.my = this.myccc;
  },


    // methods: {
    //   viewProduct(productId) {
    //     // Send AJAX request to backend to retrieve product information
    //     axios.get(`/api/products/${productId}`).then((response) => {
    //       // Navigate to product details page with the product information
    //       this.$router.push({
    //         name: 'ProductDetails',
    //         params: { productId: productId },
    //         query: { ...response.data },
    //       });
    //     });


  //   methods: {
  // getProductDetails(productId) {
  //   console.log(productId);
  //   axios.post('http://localhost/gpd.php', { id: productId })
  //     .then(response => {
  //       this.selectedProducts = response.data
  //       console.log(this.selectedProducts);
  //       this.$router.push({
  //         name: 'productzz',
  //         params: { productId: this.selectedProducts },
  //         query: { ...response.data },
  //       });


   methods: {
//     addtocart() {
//     const newItem = { ...this.sizes };
//     let cart = JSON.parse(localStorage.getItem('cart')) || [];
//     cart.push(newItem);
//      localStorage.setItem('cart', JSON.stringify(cart));
//     this.cart = cart
//     console.log(this.cart);
// },
showmys(){
  this.shows = true;
},

stopshowmys(){
  this.shows = false;
},
    navmobiletoggle(){
         this.shownavmobile = true;
        },

        removenav(){
         this.shownavmobile = false;
        },

    navtoggle(){
          this.shownav = !this.shownav;
        },

     addtocart() {
      const newItem = {
        quantity: this.sizes.quantity,
      };
      let cart = JSON.parse(localStorage.getItem('cart')) || [];
      cart.push(newItem);
      localStorage.setItem('cart', JSON.stringify(cart));
      this.cart = cart;
      console.log(this.cart);
    },

      getProductDetails(productId) {
    console.log(productId);
    axios.post('http://localhost/gpd.php', { id: productId })
      .then(response => {
        this.selectedProducts = response.data
        console.log(this.selectedProducts);
        console.log(response.data); // Debugging line
        // this.$router.push(`/view/${productId}`);
        // localStorage.setItem('id', id.title);
        const {title} = response.data;
        const {price} = response.data;
        const {image} = response.data;
        this.$router.push(`/view/${productId}`);
        // Store the title value in the localStorage
        localStorage.setItem('title', title);
        localStorage.setItem('price', price);
        localStorage.setItem('image', image);
      })
      .catch(error => {
        console.log(error); // Debugging line
    })
}

    },

}
</script>

<style>

@import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

body{
  margin:0;
  padding:0;
  font-family:inter;
}

.no{
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 9999;
}

.logobg{
  background:#81A695;
  padding-top:8px;
  padding-bottom:8px;
}

.logobg img{
  margin:auto;
  align-items:center;
  display:flex;
  justify-content:center;
  width: 70px;
}

.navlinks{
    display: flex;
    justify-content: space-between;
    margin: auto;
    padding-top:13px;
    align-items: center;
    padding-bottom:16px;
}

.navlinks a{
  text-decoration:none;
  color:black;
  font-weight:400;
  font-size:13px;
}

.nl{
  margin-right:30px;
  color:black;
  font-weight:400;
  font-size:13px;
}

.navflexx{
  flex-basis: 20%;
  /* justify-content: flex-end; */
  justify-content: flex-end;
}

.navlinks{
  width:90%;
  margin:auto;
  align-items:center;
}

.catlinks{
  flex-basis: 100%;
}

.av{
  position:fixed;
  width:100%;
  z-index:50;
}

.navbg{
  padding-top:10px;
  /* margin-bottom:30px; */
  padding-bottom:30px;
  background: rgba(242, 255, 246, 0.7);
}

#iconcolor{
  color: rgb(145, 143, 143, 0.6);
  font-size:22px;
}

.fnav img{
  width:23px;
  margin-left:40px;
}

.dot {
    height: 20px;
    width: 20px;
    font-size: 12px;
    margin-right: 20px;
    background: #81A695;
    border-radius: 50%;
    display: inline-flex; /* Use inline-flex instead of inline-block */
    justify-content: center; /* Horizontally center the content */
    align-items: center; /* Vertically center the content */
    color: #fff;
    text-align: center;
    margin-right:40px;
}

/* #iconcolor #s{
  margin-left:30px;
} */

/* .navlinks{
  display:flex;
  justify-content:center;

} */

.shh {
    margin:  auto;
    display: block;
    width: 100%;
    left: 0;
    right: 0;
    /* position: absolute; */
    margin-bottom: 80px;
    /* margin-left:1px; */
}

.shh button {
    background: #F2F4F4;
    border: none;
    color: #c9b5b6;
    width: 7%;
    padding-right: 10px;
    padding-left: 15px;
    /* border-radius: 15px 0px 0px 15px; */
    position:relative;
    padding-top: 24px;
    padding-bottom: 24px;
    font-size: 19px;
    padding-left:80px;
    z-index:3;
}

.shh input {
    background: #F2F4F4;
    border: none;
    width: 85.5%;
    margin-left: -10px;
    color: white;
    /* border-radius: 0px 15px 15px 0px; */
    padding-top: 26px;
    padding-bottom: 26px;
    padding-left:70px;
    font-size: 16px;
}

.formbg {
  background-color: rgba(255, 255, 255, 0.8); /* replace with your desired color and opacity */
  backdrop-filter: blur(10px); /* change the value as per your requirement */
  position: relative;
  z-index:2px;
  width:100%;
}

.sbg{
  background: rgba(242, 255, 246, 0.7);
  width:100%;
  padding-top:30px;
  padding-bottom:30px;
  border-top:1px rgb(209, 208, 208) solid ;
}

.sbgg{
  background: rgba(242, 255, 246, 0.7);
  width:100%;
  padding-top:30px;
  padding-bottom:30px;
  border-top:1px rgb(209, 208, 208) solid ;
}

.sflex{
  display:flex;
  width:90%;
  margin:auto;
  justify-content:space-between;
}

/* .smain{
  flex-basis:10%;
} */

.sinput{
  flex-basis:100%;
}

.sinput input {
    border: none;
    width: 85%;
    margin: auto;
    align-items: center;
    color: black;
    padding-top: 5px;
    font-size: 16px;
    display:block;
}

#iconcolortwo{
  color: rgba(95, 94, 94, 0.6);
  font-size:22px;
}

#iconcolorthree{
  color: rgba(199, 195, 195, 0.6);
  font-size:23px;
}

/* mq */

.scancel img{
  width:23px;
}


.scancel{
  order: 3; /* Set the order of .scancel to be the last item in the container */
  flex-basis:20%;
  width:30%;
  align-items: end;
}

/* .scancel{
  flex-basis:20%;
  width:30%;
  align-items: end;
} */

input {
  border: none;
}

input:focus {
  outline: none;
}

.cartimg{
  width: 23px;
  margin-left:20px;
}

.dottwo {
    height: 20px;
    width: 23px;
    font-size: 12px;
    margin-right: 20px;
    background: #81A695;
    border-radius: 50%;
    display: inline-flex; /* Use inline-flex instead of inline-block */
    justify-content: center; /* Horizontally center the content */
    align-items: center; /* Vertically center the content */
    color: #fff;
    text-align: center;
    margin-right:20px;
}

.fnavvv {
    display: block;
    background-color: #fff;
    padding-top: 20px;
    z-index: 10;
    padding-bottom: 10px;
    padding-left: 50px;
    position: fixed;
    width: 60%;
    overflow-y: scroll;
    padding-top:60px;
    height: 100%; /* set the maximum height here */
}

.fnavvv a{
  text-decoration:none;
  display:block;
  font-size:14px;
  margin-bottom:50px;
  color:rgb(15, 15, 15);
  font-weight:500;
}

.xmmobile {
    float: right;
    margin-right: 35px;
}

.sbgg {
  display:none;
}

/* .scancel{
  flex-basis:20%;
  width:30%;
  align-items: end;
} */

@media (max-width: 1000px){
  #iconcolortwo {
    /* color: rgba(95, 94, 94, 0.6); */
    color:black;
    font-size: 18px;
}

#iconcolor{
  color:black;
    font-size: 18px;
    margin-top:5px;
}

.navbg {
    display:none;
}

.navlinks {
  display:none;
}


.sbgg {
  display:block;
}

.sbg {
  display:none;
}

.sinput input {
  /* background: transparant; */
  background: transparent;
    /* background: rgba(242, 255, 246, 0.7); */
    border: none;
    width: 100%;
    margin: auto;
    align-items: center;
    color: black;
    padding-top: 3px;
    font-size: 18px;
    display: block;
}

.cartimg{
  width: 23px;
  margin-left:0;
}

.dottwo {
    height: 20px;
    width: 23px;
    font-size: 12px;
    margin-right: 20px;
    background: #81A695;
    border-radius: 50%;
    display: inline-flex; /* Use inline-flex instead of inline-block */
    justify-content: center; /* Horizontally center the content */
    align-items: center; /* Vertically center the content */
    color: #fff;
    text-align: center;
    /* margin-right:20px; */
}

/* .scancel{
  flex-basis:40%;
  width:100%;
  justify-content: end;
} */


  }

  @media (max-width: 750px){
 .scancel{
  flex-basis:40%;
  width:100%;
  justify-content: end;
}

  }


</style>

