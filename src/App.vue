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

export default {
  name: 'App',
  components: {
    'TheHeader': TheHeader,
    'TheFooter': TheFooter
  }
};
</script>

<style lang="less">
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
