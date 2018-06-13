<template>
  <ul class="container">
    <li :key="index" v-for="(item,index) in list">
      <icon class="icon" :icon="item.icon"
        :username="item.username"
        @click="click_icon" />

      <div class="content">
        {{item.content}}
      </div>

    </li>
  </ul>
</template>

<script>
import VPin from '@/components/VPin'

export default {
  name: 'TheForum',
  components: {
    'icon': VPin
  },
  methods: {
    click_icon (payload) {
      let personId = 1
      this.$router.push(`/person/${personId}`)
    }
  },
  data () {
    return {
      list: [
        {
          username: '张飞',
          content: ' 你见过这么整齐的15字 吗？',
          icon: '/static/icon.jpg'
        },
        {
          username: '牛顿',
          content: '太强了',
          icon: '/static/icon.jpg'
        },
        {
          username: '张飞',
          content: '牛逼',
          icon: '/static/icon.jpg'
        },
        {
          username: '刘备',
          content: '不知道你在说啥不知道你在说啥不知道你在说啥不知道你在说啥不知道你在说啥不知道你在说啥不知道你在说啥',
          icon: '/static/icon.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  padding: 20px;
}

ul {
  list-style: none;

  li{
    border-bottom: 1px solid #eeeeee;

    &:first-child{
      border-top: 1px solid #eeeeee;
    }
  }

  .icon {
    margin-top: 10px;
  }

  .content {
    padding: 10px 0;
  }
}
</style>
