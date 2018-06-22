<template>
  <main>
    <ThePost/>

    <TheComment class="comment"/>
  </main>
</template>

<script>
import ThePost from '@/components/ThePost'
import TheComment from '@/components/TheComment'
import VEditor from '@/components/VEditor'
export default {
  data () {
    return {
      edit: false,
      title: '',
      menu: []
    }
  },
  methods: {
    init (forumId, postId) {
      let obj = this

      this.$http.get(`/forum/${forumId}/post/${postId}`).then(response => {
        console.log(response)
        obj.list = response.body.data
      }, err => {

      })
    },
    post () {
      let forumId = 1

      this.$router.push(`/forum/${forumId}/post`)
    }
  },
  mounted () {
    this.init(this.$route.params.forumId,this.$route.params.postId)
  },
  beforeRouteUpdate (to, from, next) {
    this.init(this.$route.params.forumId,this.$route.params.postId)

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
