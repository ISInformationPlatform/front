<template>
  <main>
    <TheForum class="left">
      <h2>{{title}}板块</h2>
    </TheForum>

    <TheBillboard class="right"/>
  </main>
</template>

<script>
import TheForum from '@/components/TheForum'
import TheBillboard from '@/components/TheBillboard'

const hash = [
  '工作',
  '出国',
  '读研'
]

export default {
  data () {
    return {
      title: ''
    }
  },
  mounted () {
    this.title = hash[this.$route.params.forumId - 1]
  },
  beforeRouteUpdate (to, from, next) {
    this.title = hash[to.params.forumId - 1]
    next()
  },
  components: {
    'TheForum': TheForum,
    'TheBillboard': TheBillboard
  }
}
</script>

<style lang="less">
h2{
  color: #1990ff;
}

main{
  display: flex;
  justify-content: space-between;
}

.left {
  padding: 10px 0 30px 0;
  width: 70%;
}

.right {
  margin: 30px 0 30px 20px;
  width: 25%;
}
</style>
