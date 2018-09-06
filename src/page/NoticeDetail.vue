<template>
  <div class="container">
    <h2 class="title">{{title}}</h2>
    <p class="author">
      {{author}}
    </p>
    <article v-html="content"/>
    <footer v-show="ifShow" class="DT">
        {{newdate}}
    </footer>
  </div>
</template>

<script>
import { getNotice } from '@/service/getData';
import dayjs from 'dayjs';

export default {
  name: 'billboard',
  data () {
    return {
      title: '',
      author: '',
      notice_time: null,
      content: ''
    };
  },
  computed: {
    newdate: function () {
      return dayjs(this.notice_time * 1000).format('YYYY-MM-DD');
    },
    ifShow: function () {
      if (this.notice_time === null) {
        return false;
      } else {
        return true;
      }
    }
  },
  watch: {
    forumId: 'update',
    noticeId: 'update'
  },
  methods: {

    update () {
      let sectionId = this.$route.params.sectionId;
      let noticeId = this.$route.params.noticeId;

      let obj = this;

      if (!sectionId || !noticeId) { return; }

      getNotice(sectionId, noticeId)
        .then(data => {
          obj.title = data.notice_title;
          obj.author = data.notice_author;
          obj.notice_time = data.notice_time;
          obj.content = data.notice_content;
        });
    }
  },
  mounted () { this.update(); }
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
