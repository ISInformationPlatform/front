<template>
  <article>
    <h2>{{title}}</h2>
    <section class="item" :key="index" v-for="(item,index) in list">

      <PostUser class="left"
        :username="item.username"/>

      <PostArticle class="right"
        :content="item.content"/>

    </section>
  </article>
</template>

<script>
import PostUser from '@/components/PostUser'
import PostArticle from '@/components/PostArticle'

export default {
  name: 'TheForum',
  components: {
    'PostUser': PostUser,
    'PostArticle': PostArticle
  },
  methods: {
    click_type (payload) {
      alert(`你点了另一个导航栏：${payload.title}`)
      this.tag = false
    },
    click_title (payload) {
      alert(`你点了标题：${payload.title}`)
    },
    click_icon (payload) {
      alert(`你点了头像或者用户名：${payload.title}`)
      this.$router.push('information')
    },
    click_tag (payload) {
      alert(`你点了标签：${payload.title}`)
      this.tag = true
      this.$router.push('tag')
    }
  },
  data () {
    return {
      title: '讨论下电子科大',
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
          content: '不知道你在说啥',
          icon: '/static/icon.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
article{
  padding: 20px 0;
}

h2 {
  display: block;
  padding: 5px;
}

.item{
  display: flex;

  border-bottom: 1px solid #999999;

  &:nth-child(2){
    border-top: 1px solid #bbbbbb;
  }
}

.left{
  width: 25%;
  max-width: 200px;
}

.right{
  width: 70%;
}
</style>
