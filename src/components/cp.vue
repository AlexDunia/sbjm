<template>
    <h1> Hello </h1>
   <div v-for="(mycart, index) in items" :key="index">

<div v-for="(value, key) in mycart" :key="key">
     {{ value.nop }}
    </div>

</div>
</template>
<script>
export default{
    props: {
    items: {
      type: Array,
      required: true
    }
  }
}
</script>
<style>
</style>