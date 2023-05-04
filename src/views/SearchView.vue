<template>

<!-- <div class="pgridoverlay" v-if="dboverlay">

<div  className="pgridcmargin">

<div className="pgridc">
  <div v-for="(row, index) in allData" :key="index">
  <p> <img :src="row.image"/> </p>
    <p className="pname"  @click="getProductDetails(row.id)"> {{row.title}}  </p>
    <div class="catflex">
  <p className="pprice"> {{row.price}}  </p>
  <p className="pprice" id="cat"> Category  </p>
  </div>
  </div>

  </div>

</div>
</div> -->
   <br/>
   <br/>
   <br/>

      <h1>Search Results for "{{ query }}"</h1>
      <div v-for="result in results" :key="result.id">
            <!-- <p> <img :src="result.image"/> </p> -->
    <p className="pname"> {{result.title}}  </p>
    <div class="catflex">
  <p className="pprice"> {{result.price}}  </p>
  <p className="pprice" id="cat"> Category  </p>
  </div>
  </div>

      <!-- <div  className="pgridcmargin">

       <div className="pgridc">
        <div v-for="result in results" :key="result.id">
            <p> <img :src="result.image"/> </p>
    <p className="pname"> {{result.title}}  </p>
    <div class="catflex">
  <p className="pprice"> {{result.price}}  </p>
  <p className="pprice" id="cat"> Category  </p>
  </div>
        </div>
    </div>


    </div> -->
  </template>

  <script>
  import axios from 'axios'
  export default {
    data() {
      return {
        query: this.$route.query.q,
        results: []
      }
    },
    mounted() {
      this.fetchResults();
    },
    methods: {
      fetchResults() {
        axios.post('http://localhost/s.php', {
          query: this.query
        }).then(response => {
          this.results = response.data;
          console.log(this.results)
        }).catch(error => {
          console.log(error);
        });
      }
    }
  }
  </script>
