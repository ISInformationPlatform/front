<template>
  <button :class="{active:isActive}" @click="click">
    {{title}}
  </button>
</template>

<script>
export default {
  name: 'VButton',
  props: ['title', 'data'],
  data () {
    return {
      isActive: false
    }
  },
  methods: {
    click (event) {
      this.$emit('click', {
        title: this.title,
        data: this.data,
        event: event
      })
      this.isActive = !this.isActive
    }
  },
  beforeRouteUpdate (to, from, next) {
    alert('sdf')
    this.isActive = false
  }
}
</script>

<style lang="less" scoped>
button {
  cursor: pointer;
}
</style>
