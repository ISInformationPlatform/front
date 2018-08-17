<template>
  <button :class="{ active: isActive }" @click="click">
    <img :src="images" >
    <p>{{title}}</p>
  </button>
</template>

<script>
export default {
  name: 'IMButton',
  props: ['images', 'data', 'title'],
  data () {
    return {
      isActive: false
    };
  },
  methods: {
    click (event) {
      this.$emit('click', {
        title: this.title,
        data: this.data,
        event: event
      });
      this.isActive = !this.isActive;
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.isActive = false;
  }
};
</script>

<style lang="less" scoped>
button{
  background: none;
  border: 2px solid #eeeeee;
  cursor: pointer;

  padding: 0 20px;

  p{
    font-size: 15px;
  }
}

img {
  margin: 10px 0;
  width: 50px;
  height: 50px;
}
</style>
