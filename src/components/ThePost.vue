<template>
  <div>
    <Article
      :title="article.title"
      :content="article.content"/>

    <section class="item" :key="index" v-for="(item,index) in list">

      <User class="left"
        :username="item.username"/>

      <Content class="right"
        :content="item.content"/>

    </section>

    <VEditor class="poster_body">
    </VEditor>

  </div>
</template>

<script>
import PostUser from '@/components/PostUser'
import PostContent from '@/components/PostContent'
import PostArticle from '@/components/PostArticle'
import VEditor from '@/components/VEditor'

export default {
  name: 'TheForum',
  components: {
    'User': PostUser,
    'Content': PostContent,
    'Article': PostArticle,
    'VEditor': VEditor
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
      ],
      article: {
        title: '挖草',
        content: '<p>啊打发二阿斯蒂芬安抚阿斯顿发e阿斯蒂</p><p>阿斯蒂芬阿斯顿f</p><p>阿斯蒂芬阿斯顿</p><p><br></p><p>阿斯顿发射点范德萨阿斯蒂芬</p><p><br></p><p>阿斯蒂芬阿斯顿发</p>'
      }
    }
  }
}
</script>

<style lang="less" scoped>
div{
  padding: 20px 20%;
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

.poster_body{
  margin: 20px 0;
}
</style>
