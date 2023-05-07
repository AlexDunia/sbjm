<template>

  <br/>
  <br/>
  <br/>

<div class="catdiv">
<div className="pw">
  <div class="filterhead">
    <p> Showing results for: </p>
    <h1> Category - Tops </h1>
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
    fetch('http://localhost/tops.php?categories=Top')
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

.filterhead h1{
  font-size: 40px;
    font-weight: 300;
    color: rgb(97, 96, 96);
    line-height: 2.7rem;
}

.filterhead p{
  /* font-size: 10px; */
  margin-bottom:-22px;
  margin-left:5px;
  color:#81A695;
  /* color: rgb(97, 96, 96); */
}

@media (max-width: 700px){

  .catdiv{
    margin-top:70px;
  }

  .filterhead{
    width:60%;
    margin:auto;
  }

  .filterhead h1{
    font-size: 30px;
    font-weight: 300;
    color:red;
    color: rgb(97, 96, 96);
    line-height: 2.7rem;
}

.filterhead p{
  /* font-size: 10px; */
  margin-bottom:-18px;
  margin-left:5px;
  color:#81A695;
  /* color: rgb(134, 134, 134); */
}

}

</style>