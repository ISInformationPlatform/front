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
  name: 'ForumItemIcon',
  props: ['icon', 'username'],
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
  border-bottom: 1px solid #eeeeee;

  img {
    cursor: pointer;
    height: 18px;
    width: 18px;
    margin-top: 8px;

  }
  strong {
    cursor: pointer;

    font-size: 0.7em;
    line-height: 36px;
    color: #cccccc;
  }
}
</style>
