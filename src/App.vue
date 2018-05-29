<template>
  <div id="app">
    <TheHeader>
    </TheHeader>

    <router-view id="Nav"
      name="Nav"></router-view>

    <div id="container">
      <router-view id="Forum"
        name="Forum"></router-view>
      <router-view id="SideBar"
        name="SideBar"></router-view>
      <router-view id="Content"
        name="Content"></router-view>
    </div>

    <TheFooter>
    </TheFooter>
  </div>
</template>

<script>
import TheHeader from '@/components/TheHeader'
import TheFooter from '@/components/TheFooter'

export default {
  name: 'App',
  components: {
    'TheHeader': TheHeader,
    'TheFooter': TheFooter
  }
}
</script>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}

#Nav {
  margin: 20px 10% 0 10%;
}

#container {
  margin: 0 10%;

  display: flex;
  justify-content: space-between;
}
#Forum {
  padding: 10px 0 30px 0;
  width: 70%;
}
#SideBar {
  margin: 30px 0 30px 20px;
  width: 25%;
}
#Content {
  width: 100%;
}
</style>
