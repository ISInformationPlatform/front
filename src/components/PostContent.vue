<template>
  <section>
    {{content}}
  </section>
</template>

<script>
export default {
  name: 'PostArticle',
  props: ['content']
}
</script>

<style lang="less" scoped>
section{
  padding: 20px 10px;
}
</style>
