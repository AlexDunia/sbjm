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
   <br/>
   <br/>
   <br/>
    <br/>
   <br/>
   <br/>

      <h1>Search Results for "{{ query }}"</h1>
      <div v-for="result in results" :key="result.id">
  <p class="pname" @click="viewProduct(result.id)"> {{ result.title }} </p>
  <div class="catflex">
    <p class="pprice">{{ result.price }}</p>
    <p class="pprice" id="cat">Category</p>
  </div>
  <ul>
    <!-- The list of text lines comes from the result.description property,
        which is a string value that we want to split into multiple lines based
        on the "." character. We're using the split() function to split the
        result.description string into an array of text lines, where each line ends with a "."
        character. -->
    <li v-for="line in result.description.split('.')" :key="line">{{ line.trim() }}</li>
    <!-- Using line.trim() on each element of the array removes any extra whitespace characters, -->
  </ul>
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
    props: ['viewProduct'],
    data() {
      return {
        query: this.$route.query.q,
        results: []
      }
    },
    mounted() {
      this.fetchResults();
    },
    watch: {
      '$route.query.q': function(newQuery, oldQuery) {
        // The $route property is a special property provided by the Vue Router that represents the current route,
        // and query.q is a property of $route that gives you access to the q parameter in the query string. You can use
        //  either this.$route.query.q or '$route.query.q' in the watch function to watch for changes to the q parameter in the query string.
        this.query = newQuery;
        this.fetchResults();
      }
    //   The function function(newQuery, oldQuery) { ... } is a watcher function that gets executed every time the value of the this.$route.query.q property changes.
    // In this specific case, when the query property in the component's data object is updated, the watcher function triggers a call to this.fetchResults() method,
    //  which in turn makes an API request to fetch the new search results based on the updated query. The newQuery and oldQuery parameters of the watcher
    // function represent the new and old values of the this.$route.query.q property respectively, allowing you to compare the previous and current values and perform
    // any necessary actions based on the changes. Note that the watcher function is specific to vue js watch and takes two arguments:
    // the new value of the property and the old value of the property.
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
    },
  }

</script>

