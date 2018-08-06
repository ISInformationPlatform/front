<template>
  <section>

    <p @click="click_title">{{item.notice_title}}</p>

    <footer class="date"
      @click="click_date">{{item.notice_time}}</footer>

  </section>
</template>

<script>
export default {
  name: 'BillboardItem',
  props: ['item'],
  methods: {
    click_title (event) {
      this.$emit('click_title', { title: this.title });
    },
    click_date (event) {
      this.$emit('click_date', { title: this.date });
    }
  }
};
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0 0 10px 0;
  cursor: pointer;

  color: black;
  font-family: Arial, "Microsoft YaHei", sans-serif;
  font-size: .9em;

  &:hover {
    color: blue;
    text-transform: capitalize;
  }
}
section {
  margin: 0;
  padding: 10px 0 10px 0;
}
.date{
  text-align: right;
}
</style>
