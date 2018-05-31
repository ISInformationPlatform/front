<template>
  <aside>
    <img
      :src="icon"
      @click="click"/>

    <h3 @click="click">
      {{username}}
    </h3>
  </aside>
</template>

<script>
export default {
  name: 'PostUser',
  props: ['username'],
  methods: {
    click () {
      alert('你点了用户名，我要进入用户详情页面')
    }
  },
  data () {
    return {
      icon: '/static/icon.jpg'
    }
  }
}
</script>

<style lang="less" scoped>
img{
  cursor: pointer;
  width: 100px;
}

h3{
  cursor: pointer;
}

aside{
  background-color: #dddddd;
  text-align: center;
}
</style>
