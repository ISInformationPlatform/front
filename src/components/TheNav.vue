<template>
  <nav>
    <VButton v-for="(item,index) in links"
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
      alert(`你点了另一个导航栏：${payload.title}`)
    }
  },
  data () {
    return {
      links: [
        {
          title: '日程',
          url: 'www.baidu.com'
        },
        {
          title: '基础科学',
          url: 'www.baidu.com'
        }
      ]
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
