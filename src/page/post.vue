<template>
  <main>
    <ThePost
      :title="title"
      :content="content"/>

    <TheComment :list="list" class="comment"/>
  </main>
</template>

<script>
import ThePost from '@/components/ThePost'
import TheComment from '@/components/TheComment'
import VEditor from '@/components/VEditor'
export default {
  data () {
    return {
      title: '',
      content: '',
      list: []
    }
  },
  methods: {
    init (forumId, postId) {
      let obj = this

      this.$http.get(`/forum/${forumId}/post/${postId}`).then(response => {
        obj.title = response.body.data.post_title
        obj.content = response.body.data.post_content
        console.log(response.body.data)
        console.log(obj)
      }, err => {
        console.log(err)
      })

      this.$http.get(`/forum/${forumId}/post/${postId}/comment`).then(response => {
        obj.list = response.body.data
      }, err => {
        console.log(err)
      })
    },
    post () {
      let forumId = 1

      this.$router.push(`/forum/${forumId}/post`)
    }
  },
  mounted () {
    this.init(this.$route.params.forumId, this.$route.params.postId)
  },
  beforeRouteUpdate (to, from, next) {
    this.init(this.$route.params.forumId, this.$route.params.postId)

    next()
  },
  components: {
    'ThePost': ThePost,
    'TheComment': TheComment,
    'VEditor': VEditor
  }
}
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
