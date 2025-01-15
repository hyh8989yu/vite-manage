<template>
  <div>
    <a-button type="primary" @click="changeMessage">点击修改message</a-button>
    <div>{{ message }}</div>
  </div>
</template>

<script setup lang="ts">
let message: string = "我是message"

const changeMessage = () => {
  message = '我才不是message'
}

</script>