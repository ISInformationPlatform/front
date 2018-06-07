<template>
  <nav>
    <div v-for="(list,index) in menu" :key="index">
     <VButton v-for="(item,index) in list"
      :title="item.tag"
      :key="index"
      @click="click" />
    </div>
 </nav>
</template>

<script>
import VButton from '@/components/VButton'

export default {
  name: 'TheNav',
  components: {
    'VButton': VButton
  },
  props: ['menu'],
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
