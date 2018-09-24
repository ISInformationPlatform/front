<template>
  <section>
    <router-link tag="p" :to="`/notification/${sectionId}/notice/${item._id}`">
      {{item.notice_title}}
    </router-link>

    <p class="date">{{date}}</p>
  </section>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'BillboardItem',
  props: ['item', 'sectionId'],
  computed: {
    date: function () {
      return dayjs(this.item.notice_time * 1000).format('YYYY-MM-DD');
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
  font-size: .9em;

  &:hover {
    color: blue;
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
