<template>
  <nav>
    <VButton v-for="(item,index) in list"
      :title="item.title"
      :key="index"
      @click="click" />
  </nav>
</template>

<script>
import VButton from '@/components/VButton'

export default {
  name: 'TheNav',
  props: ['list'],
  components: {
    'VButton': VButton
  },
  methods: {
    click (payload) {
      this.$emit('click', {
        title: payload.title
      })
    }
  }
}
</script>

<style lang="less" scoped>
button {
  margin: 10px 10px 10px 0;
  padding: 0;

  border: none;
  outline: 0;
  font-size: 20px;
  background-color: white;
  color: #1990ff;
}
</style>
