<template>
  <nav>
    <div v-for="(list,i) in menu" :key="i">
     <VButton v-for="(item,j) in list"
      :title="item.tag"
      :data="item.id"
      :key="j"
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
      let id = payload.data
      this.isActive[id].active = !this.isActive[id].active

      let tag = 0

      this.isActive.forEach(item => {
        if (item.active) tag += 1 << item.id
      })

      console.log(tag)
    }
  },
  watch: {
    menu: function () {
      this.$children.forEach(item => {
        item.isActive = false
      })

      let isActive = []

      this.menu.forEach(item => {
        item.forEach(item => isActive.push(
          { active: false, id: item.id }
        ))
      })

      this.isActive = isActive
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

.active {
  background-color: #1990ff;
  color: white;
}
</style>
