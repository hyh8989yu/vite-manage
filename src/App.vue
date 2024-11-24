<script setup lang="ts">
  import Layout from "./Layout/index.vue"
</script>

<template>
  <Layout></Layout>
    
</template>

<style lang="scss" scoped>
@include b(test){
  color:red;
  font-size: 20px;

  @include e(inner){
    color: blue;
  }

  @include m(success){
    color: green;
  }
}
</style>
