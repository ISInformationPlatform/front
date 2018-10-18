<template>
  <main>
    <h2 class="title">{{title}}</h2>

    <h4 class="author">
      {{author}}
    </h4>

    <article v-html="content"/>

    <footer class="DT">
      {{date}}
    </footer>
  </main>
</template>

<script>
import { getNotice } from '@/service/API';
import dayjs from 'dayjs';

export default {
  name: 'NoticeDetail',
  data () {
    return {
      title: '',
      author: '',
      notice_time: null,
      content: ''
    };
  },
  computed: {
    date: function () {
      if (!this.notice_time) {
        return '';
      }

      return dayjs(this.notice_time * 1000).format('YYYY-MM-DD');
    }
  },
  created () {
    let sectionId = this.$route.params.sectionId;
    let noticeId = this.$route.params.noticeId;

    if (!sectionId || !noticeId) { return; }

    getNotice(sectionId, noticeId).then(data => {
      this.title = data.notice_title;
      this.author = data.notice_author;
      this.notice_time = data.notice_time;
      this.content = data.notice_content;
    });
  }
};
</script>

<style lang="less" scoped>
.title{
  text-align: center;
}
.DT{
  text-align: right;
}
.author {
  text-align: center;
}
</style>
