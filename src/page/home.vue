<template>
  <main>
    <router-link :key="index"
      v-for="(item,index) in list"
      tag="button"
      :to="`/forum/${index + 1}`">

      <div class="out">
        <div class="pic"><img :src="item.pic"></div>
        <div class="name">{{item.name}}</div>
      </div>

    </router-link>
  </main>
</template>

<script>
export default {
  name: 'Home',
  data () {
    return {
      list: [
        {
          pic: '/static/work.png',
          name: '工 作'
        },
        {
          pic: '/static/abroad.png',
          name: '出 国'
        },
        {
          pic: '/static/graduate.png',
          name: '读 研'
        }
      ]
    };
  }
};
</script>
<style lang="less" scoped>
main {
  display: flex;
  justify-content: space-around;
}
button {
  width: 30%;
  margin: 1% 0;
  padding: 0;
  font-size: 20px;
  background-color: white;
  color: #1990ff;
  background: none;
  border: 2px solid #eeeeee;
  cursor: pointer;
}
.name {
  font-weight: bold;
  font-weight: 1.4em;
}
</style>
