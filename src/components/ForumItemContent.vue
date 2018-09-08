<template>
  <div>
    <p>{{contentCut}}</p>
  </div>
</template>

<script>
export default {
  name: 'ForumItemContent',
  props: ['content'],
  computed: {
    contentCut: function () {
      if (this.content.length > 99) {
        return `${this.content.substring(0, 99)} ......`;
      } else {
        return this.content;
      }
    }
  }
};
</script>
<style lang="less" scoped>
p{
  margin-top:5px;
  font-size: .9em;
  word-wrap: break-word;
}
</style>
