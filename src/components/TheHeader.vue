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

      <div v-show="!username">
        <router-link class="navbar" :to="'/sign/in'">登录</router-link>
        <router-link class="navbar" :to="'/sign/up'">注册</router-link>
      </div>

      <div v-show="!!username">
        <VButton class="navbar"
          :title="username"
          @click="click_user" />
        <VButton class="navbar"
          :title="'注销'"
          @click="click_logOut" />
      </div>
    </nav>

  </header>
</template>

<script>
import config from '@/page/config';
import { logOut } from '@/service/API';

import { mapState, mapActions } from 'vuex';
import VButton from '@/components/VButton';

var arr = [];

config.forum.forEach(item => {
  arr.push({
    title: item.title,
    url: `/forum/${item.section_id}`
  });
});

export default {
  name: 'TheHeader',
  components: {
    'VButton': VButton
  },
  data () {
    return {
      icon: '/static/icon.jpg',
      logo: '/static/icon.jpg',
      links: arr
    };
  },
  computed: {
    ...mapState([
      'user_id',
      'username'
    ])
  },
  methods: {
    ...mapActions([
      'logOut', 'jump'
    ]),
    click_logOut () {
      let promise = logOut().then(() => {
        this.logOut();
      });

      this.jump({
        message: '注销成功',
        obj: this,
        promise: promise
      });
    },
    click_nav (payload) {
      this.$router.push(payload.data);
    },
    click_user (payload) {
      this.$router.push(`/person/${this.user_id}`);
    }
  }
};
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

div {
  display: inherit;
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
