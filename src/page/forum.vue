<template>
  <main>
    <template>
      <TheForum class="left">
        <template slot="before">
          <h2>{{title}}板块</h2>
          <TheNav :menu="menu"/>
          <TheFocus/>
        </template>

        <template slot="after">
          <button @click="post">发帖</button>
        </template>
      </TheForum>

      <TheBillboard class="right"/>
    </template>
  </main>
</template>

<script>
import config from '@/page/config'

import TheFocus from '@/components/TheFocus'
import TheNav from '@/components/TheNav'
import TheForum from '@/components/TheForum'
import TheBillboard from '@/components/TheBillboard'

export default {
  data () {
    return {
      title: '',
      menu: []
    }
  },
  methods: {
    init (id) {
      this.title = config[id].title
      this.menu = config[id].type
      let obj = this

      this.$http.get(`/forum/${id + 1}/post`).then(response => {
        obj.list = JSON.parse(response)
      }, response => {

      })
    },
    post () {
      let forumId = 1

      this.$router.push(`/forum/${forumId}/post`)
    }
  },
  mounted () {
    this.init(this.$route.params.forumId - 1)
  },
  beforeRouteUpdate (to, from, next) {
    this.init(to.params.forumId - 1)

    next()
  },
  components: {
    'TheNav': TheNav,
    'TheForum': TheForum,
    'TheFocus': TheFocus,
    'TheBillboard': TheBillboard
  }
}
</script>

<style lang="less" scoped>
main{
  display: flex;
  justify-content: space-between;

.editor {
  width: 60%;
  margin: 20px 20%;
}

.left {
  h2{
    color: #1990ff;
  }

  padding: 10px 0 30px 0;
  width: 70%;
}

  .right {
    margin: 30px 0 30px 20px;
    width: 25%;
  }
}

input{
  border: none;
  outline: none;

  font-size: 2em;
  width: 100%;
}

.btn_cnt{
  text-align: center;

  button{
    border: none;
    background-color: cornflowerblue;
    color: white;
    font-size: 1em;
    width: 50%;
    padding: 10px 20px;
    border-radius: 5px;
  }
}
</style>
