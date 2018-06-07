<template>
  <section class="container">
    <h2 class="title">{{title}}</h2>
    <article v-html="content"/>
  </section>
</template>

<script>
export default {
  name: 'PostArticle',
  props: ['content', 'title']
}
</script>

<style lang="less" scoped>
.container {
  padding: 20px 0;
}

.title {
  text-align: center;
  margin: 20px 0;
}
</style>
