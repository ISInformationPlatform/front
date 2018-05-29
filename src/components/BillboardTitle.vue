<template>
  <header>{{title}}</header>
</template>

<script>
export default {
  name: 'BulletTitle',
  props: ['title']
}
</script>

<style lang="less" scoped>
header {
  font-size: 1.5em;
  padding: 20px 0;
  border-bottom: 1px solid #cccccc;
  color: blue;
}
</style>
