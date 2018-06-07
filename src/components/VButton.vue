<template>
  <button @click="click">
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: ['title', 'data'],
  methods: {
    click (event) {
      this.$emit('click', {
        title: this.title,
        data: this.data
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
