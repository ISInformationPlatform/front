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
