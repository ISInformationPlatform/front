<template>
  <section>
    {{content}}
  </section>
</template>

<script>
export default {
  name: 'PostArticle',
  props: ['content'],
  methods: {
    click () {
      alert('你点了用户名，我要进入用户详情页面')
    }
  },
  data () {
    return {
      icon: '/static/icon.jpg'
    }
  }
}
</script>

<style lang="less" scoped>
section{
  padding: 20px 10px;
}
</style>
