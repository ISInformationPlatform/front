<template>
  <div class="container">
    <h2 class="title">{{title}}</h2>
    <article v-html="content"/>
  </div>
</template>

<script>
export default {
  name: 'ThePost',
  props: ['title', 'content']
}
</script>

<style lang="less" scoped>
.title{
  text-align: center;
}
</style>
