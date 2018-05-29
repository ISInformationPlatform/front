<template>
  <section>

    <p @click="click_title">{{title}}</p>

    <footer class="date"
      @click="click_date">{{date}}</footer>

  </section>
</template>

<script>
export default {
  name: 'BillboardItem',
  props: ['title', 'date', 'url'],
  methods: {
    click_title (event) {
      this.$emit('click_title', { title: this.title })
    },
    click_date (event) {
      this.$emit('click_date', { title: this.date })
    }
  }
}
</script>

<style lang="less" scoped>
p {
  padding: 0;
  margin: 0 0 10px 0;
  cursor: pointer;

  color: black;
  background-color: white;
  font-family: Arial, "Microsoft YaHei", sans-serif;

  &:hover {
    color: blue;
    text-transform: capitalize;
  }
}
section {
  margin: 0;
  padding: 10px 0 10px 0;

  border-bottom: 1px solid #cccccc;
}
</style>
