<template>
  <header>
    <div class="top">
      <img alt="picture"
        align="left"
        :src="logo">
    </div>

    <nav>
      <span class="left">
        <VButton class="navbar"
          v-for="(item,index) in links"
          :title="item.title"
          :key="index"
          @click="click_nav" />
      </span>
      <span class="right">
        <VButton class="navbar"
          :title="signIn"
          @click="click_signIn" />
        <VButton class="navbar"
          :title="signUp"
          @click="click_signUp" />
      </span>
    </nav>

  </header>
</template>

<script>
import VButton from '@/components/VButton'

export default {
  name: 'TheHeader',
  data () {
    return {
      signIn: '登陆',
      signUp: '注册',
      icon: '/static/icon.jpg',
      logo: '/static/icon.jpg',
      links: [{
        title: '小木虫',
        url: 'http://www.baidu.com'
      },
      {
        title: '哇哈哈',
        url: 'http://www.baidu.com'
      }
      ]
    }
  },
  methods: {
    click_nav (payload) {
      alert(`你点了导航按钮：${payload.title}`)
    },
    click_signIn (payload) {
      alert(`你点了登陆按钮：${payload.title}`)
      this.$http.get('/test').then(response => {
        console.log(response)
      }, response => {

      })
    },
    click_signUp (payload) {
      alert(`你点了注册按钮`)
    }
  },
  components: {
    'VButton': VButton
  }
}
</script>

<style lang="less" scoped>
nav {
  display: flex;
  justify-content: space-between;
}

header {
  margin: 0;
  border-bottom: 1px solid #cccccc;
  box-shadow: 1px 5px 5px #cccccc;
  padding: 10px 5%;
  .top {
    height: 60px;
    img {
      width: 60px;
      height: 60px;
    }
  }
}

.navbar {
  padding: 0 10px;
  margin: 10px 0;
  border: none;
  border-right: 1px solid #cccccc;
  outline: 0;
  font-size: 20px;
  background-color: white;
  color: #1990ff;
  &:last-child {
    border-right: none;
  }
}
</style>
