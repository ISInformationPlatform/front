<template>
  <header>
    <div class="top">
      <img alt="picture"
        align="left"
        :src="logo">
    </div>

    <nav>
      <div>
        <VButton class="navbar"
          v-for="(item,index) in links"
          :title="item.title"
          :data="item.url"
          :key="index"
          @click="click_nav" />
      </div>

      <div>
        <VButton class="navbar"
          :title="signIn"
          @click="click_signIn" />
        <VButton class="navbar"
          :title="signUp"
          @click="click_signUp" />
      </div>
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
        title: '工作',
        url: '/forum/1'
      },
      {
        title: '出国',
        url: '/forum/2'
      },
      {
        title: '读研',
        url: '/forum/3'
      }]
    }
  },
  methods: {
    click_nav (payload) {
      this.$router.push(payload.data)
    },
    click_signIn (payload) {
      this.$router.push('/SignIn')
    },
    click_signUp (payload) {
      this.$router.push('/SignUp')
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
