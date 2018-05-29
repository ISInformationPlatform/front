<template>
    <h4 @click="click">
        {{title}}</h4>
</template>

<script>
export default {
  name: 'ForumItemTitle',
  props: ['title'],
  methods: {
    click (event) {
      this.$emit('click', {
        title: this.title
      })
    }
  }
}
</script>

<style lang="less" scoped>
h4 {
  cursor: pointer;
  margin: 0;
  font-size: 1.25em;
  color: blue;
}
</style>
