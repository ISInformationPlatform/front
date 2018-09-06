<template>
  <main>
    <ThePost
      :forumId="forumId"
      :postId="postId"/>

    <TheComment class="comment"
      :forumId="forumId"
      :postId="postId"/>
  </main>
</template>

<script>
import ThePost from '@/components/ThePost';
import TheComment from '@/components/TheComment';
import VEditor from '@/components/VEditor';

export default {
  data () {
    return {
      forumId: null,
      postId: null
    };
  },
  mounted () {
    this.forumId = this.$route.params.forumId;
    this.postId = this.$route.params.postId;
  },
  components: {
    'ThePost': ThePost,
    'TheComment': TheComment,
    'VEditor': VEditor
  }
};
</script>

<style lang="less" scoped>
.poster_body {
  width: 200px;
}

main{
  padding: 0 20%;
}

.comment{
  padding: 0 20%;
}

</style>
