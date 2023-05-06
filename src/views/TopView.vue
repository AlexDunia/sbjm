<template>

  <br/>
  <br/>
  <br/>

<div className="pw">
  <div class="filterhead">
    <h1> Category: Tops </h1>
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

.filterhead h1{
  font-size: 40px;
    font-weight: 300;
    color: rgb(97, 96, 96);
    line-height: 2.7rem;
}

.cflex{
    display:flex;
    justify-content: space-between;
    width:75%;
    margin:auto;
    padding-top:200px;
}

.ci{
    flex-basis:40%;
    margin-top:100px;
    color: #727171;
}

.ci h1{
    font-size:30px;
    font-weight:600;
    line-height:2.7rem;
}

.ci p{
    font-size:14px;
    margin-top:25px;
}

.mycoformm{
    flex-basis:50%;
}

.mycoformm{
    /* flex-basis: 30%; */
    color: #727171;
}

.mycoformm h3{
    font-size:30px;
    font-weight:300;
    line-height:2.7rem;
    color: #727171;
    padding-bottom:15px;
}

.mycoformm form label {
    font-size: 14px;
    font-weight: 300;
    line-height: 1rem;
}

.mycoformm form input{
    /* border: 0.8px solid #504d4d; */
    border-bottom: 0.8px solid #504d4d;
    opacity: .5;
}

.formname{
    padding: 15px;
    /* width: 100%; */
    margin-bottom: 20px;
}

@media (max-width: 1000px){

.cflex {
    display: block;
    padding-top:140px;
}

.mycoformm h3 {
    font-size: 20px;
    font-weight: 300;
    line-height: 2.7rem;
    color: #727171;
    margin-top:60px;
    padding-bottom: 15px;
}

}

</style>