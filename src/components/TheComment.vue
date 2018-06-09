<template>
  <div class="container">
    <section class="item" :key="index" v-for="(item,index) in list">

      <User class="left"
        :username="item.username"/>

      <Content class="right"
        :content="item.content"/>

    </section>
  </div>
</template>

<script>
import User from '@/components/CommentUser'
import Content from '@/components/CommentContent'

export default {
  name: 'TheForum',
  components: {
    'User': User,
    'Content': Content
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

.item{
  display: flex;
  border-bottom: 1px solid #bbbbbb;

  &:first-child{
    border-top: 1px solid #bbbbbb;
  }

  .left{
    width: 10%;
    min-width: 100px;
  }
}
</style>
