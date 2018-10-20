<template>
  <div id="app">
    <TheHeader>
    </TheHeader>

    <router-view id="Content"
      name="Content"></router-view>

    <TheFooter id="Footer">
    </TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader';
import TheFooter from '@/components/TheFooter';

import { isLogIn } from '@/service/API';
import { mapActions } from 'vuex';

export default {
  name: 'App',
  components: {
    'TheHeader': TheHeader,
    'TheFooter': TheFooter
  },
  methods: {
    ...mapActions([
      'logIn', 'logOut'
    ])
  },
  created () {
    isLogIn().then(data => {
      var id = data.id;
      var nickname = data.nickname;

      this.logIn({ id, nickname });
    }).catch(err => {
      this.logOut();
      err = null;
    });
  }
};
</script>

<style lang="less">
* {
  font-family: Arial, "Microsoft YaHei", sans-serif;
}
.w-e-text{
  overflow-y: auto;
  /*
   * 取消 wangeditor 的编辑框滚动条
   * 详见 https://github.com/wangfupeng1988/wangEditor/issues/1558
   */
}

html,
body {
  margin: 0;
  padding: 0;
}

#Content {
  margin: 0 10%;
}

a {
  text-decoration: none;
  outline: none;
  color: black;
}
</style>
