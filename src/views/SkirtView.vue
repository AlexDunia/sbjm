<template>

    <br/>
    <br/>
    <br/>

  <div className="pw">
    <div class="filterhead">
      <h1> Category: Skirt </h1>
    </div>
  <div className="pgridc">
    <div v-for="(product, i) in  items" :key="i">
    <p> <img :src="product.image"/> </p>

      <p className="pname"  @click="viewProduct(product.id)"> {{product.title}}  </p>

      <!-- <p className="pname"> {{product.title}}  </p> -->
      <!-- <p className="pname"> <a> <router-link to="/product"> {{product.title}}  </router-link> </a> </p> -->

    <div class="catflex">

      <p class="pprice"> {{product.price}}  </p>



     <!-- <p className="pprice" @click="changePrice(product)"> {{product.price}}  </p> -->
     <!-- <p className="pprice" id="cat"> {{product.category}}  </p> -->

     <p className="pprice" id="cat"> Category  </p>

    </div>
    </div>

    </div>
  </div>


  </template>

  <script>
  export default {
    props: ['viewProduct'],
    data() {
      return {
        items: [],
      };
    },
    mounted() {
      fetch('http://localhost/tops.php')
        .then((response) => response.json())
        .then((data) => {
          this.items = data;
          console.log(this.items)
        })
        .catch((error) => {
          console.error('Error fetching items:', error);
        });
    },
  };
  </script>

  <style>

  </style>