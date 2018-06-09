<template>
  <main>
    <ThePost/>
  </main>
</template>

<script>
import ThePost from '@/components/ThePost'
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
</style>
