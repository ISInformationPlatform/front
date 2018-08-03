<template>
    <button
    :class="{active:isActive}" @click="click">
    <div>
      <img :src="images" ><p>{{title}}</p>
    </div>
  </button>
</template>

<script>
export default{
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
    alert('sdf');
    this.isActive = false;
  }
};
</script>

<style lang="less" scoped>
button{
  width: 23%;
  background: none;
  border: 2px solid #eeeeee;
  cursor: pointer;
  p{
    width: 15px;
    font-size: 15px;
    word-wrap: break-word;
    letter-spacing: 10px;
  }
}
div{
  display: inline-flex;
  justify-content: space-around;
}
</style>
