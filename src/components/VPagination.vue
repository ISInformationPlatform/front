<template>
  <ul>
    <li v-for="index in totalNum" :key="index">
      <button @click="click(index)">
          {{index}}
      </button>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'VPagination',
  props: ['totalNum', 'currentPage'],
  watch: {
    forumId: 'update'
  },
  methods: {
    click (num) {
      this.$emit('click_page', {
        page_num: num
      });
    }
  }
};
</script>

<style lang="less" scoped>
ul {
  list-style: none;

  display: flex;
  width: 100%;

  text-align: center;
  padding: 2px;

  button {
    font-size: 0.8em;
    font-family: Tahoma, Arial,Helvetica, Sans-serif;

    padding: 2px 5px;
    margin: 2px;
    color: #000;
    background-color: #c1c1c1;
    text-decoration: none;
    border:none;
    cursor: pointer;

    &:hover {
      color: #000;
      background-color: white;
    }
  }
}
</style>
