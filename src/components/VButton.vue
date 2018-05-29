<template>
  <button @click="click">
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'VButton',
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
button {
  cursor: pointer;
}
</style>
