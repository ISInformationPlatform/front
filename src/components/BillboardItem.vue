<template>
  <section>
    <p @click="click_title">{{item.notice_title}}</p>

    <p class="date" @click="click_date">{{newdate}}</p>
  </section>
</template>

<script>
import dayjs from 'dayjs';

export default {
  name: 'BillboardItem',
  props: ['item', 'sectionId'],
  computed: {
    newdate: function () {
      return dayjs(this.item.notice_time * 1000).format('YYYY-MM-DD');
    }
  },
  methods: {
    click_title (payload) {
      let sectionId = this.sectionId;
      let noticeId = this.item._id;

      this.$router.push(`/notification/${sectionId}/notice/${noticeId}`);
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
