<template>
  <div class="container">
    <h2 class="title">{{title}}</h2>
    <article v-html="content"/>
  </div>
</template>

<script>
import { getPost } from '@/service/getData';

export default {
  name: 'ThePost',
  props: ['forumId', 'postId'],
  data () {
    return {
      title: '',
      content: ''
    };
  },
  watch: {
    forumId: 'update',
    postId: 'update'
  },
  methods: {
    update () {
      let obj = this;

      if (!this.forumId || !this.postId) { return; }

      getPost(this.forumId, this.postId)
        .then(data => {
          obj.title = data.post_title;
          obj.content = data.post_content;
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
</style>
