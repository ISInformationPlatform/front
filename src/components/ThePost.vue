<template>
  <div class="container">
    <h2 class="title">{{article.title}}</h2>
    <article v-html="article.content"/>
  </div>
</template>

<script>
export default {
  name: 'ThePost',
  data () {
    return {
      article: {
        title: '挖草',
        content: '<p>啊打发二阿斯蒂芬安抚阿斯顿发e阿斯蒂</p><p>阿斯蒂芬阿斯顿f</p><p>阿斯蒂芬阿斯顿</p><p><br></p><p>阿斯顿发射点范德萨阿斯蒂芬</p><p><br></p><p>阿斯蒂芬阿斯顿发</p>'
      }
    }
  }
}
</script>

<style lang="less" scoped>
.title{
  text-align: center;
}
</style>
