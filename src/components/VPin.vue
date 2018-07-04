<template>
  <div>
    <img :src="icon" @click="click">
    <strong @click="click">
      {{username}}
    </strong>
  </div>
</template>

<script>
export default {
  props: ['icon', 'username'],
  name: 'ForumItemIcon',
  methods: {
    click (event) {
      this.$emit('click', { title: this.username });
    }
  }
};
</script>

<style lang="less" scoped>
div {
  display: flex;
  height: 36px;

  img {
    cursor: pointer;

    height: 100%;
  }
  strong {
    cursor: pointer;

    line-height: 36px;
    color: #cccccc;
  }
}
</style>
