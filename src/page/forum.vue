<template>
  <main>
    <template>
      <TheForum class="left">
        <template slot="before">
          <TheNav :menu="menu"/>
          <h2>{{title}}板块</h2>
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
import TheNav from '@/components/TheNav'
import TheForum from '@/components/TheForum'
import TheBillboard from '@/components/TheBillboard'

const hash = [
  {
    title: '工作',
    type: [
      [
        {tag: '面试', id: 1},
        {tag: '笔试', id: 2},
        {tag: '实习经历', id: 3},
        {tag: '工作经历', id: 4}
      ]
    ]
  },
  {
    title: '出国',
    type: [
      [
        {tag: '全部', id: 1},
        {tag: '美国', id: 2},
        {tag: '英国', id: 3},
        {tag: '加拿大', id: 4},
        {tag: '澳大利亚', id: 5},
        {tag: '其他', id: 6}
      ],
      [
        {tag: '签证', id: 7},
        {tag: '语言考试', id: 8}
      ]
    ]
  },
  {
    title: '读研',
    type: [
      [
        {tag: '本校', id: 1},
        {tag: '外校', id: 2}
      ],
      [
        {tag: '保研', id: 3},
        {tag: '考验', id: 4}
      ]
    ]
  }
]

export default {
  data () {
    return {
      title: '',
      menu: []
    }
  },
  methods: {
    init (id) {
      this.title = hash[id].title
      this.menu = hash[id].type
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
    this.edit = false
    this.init(to.params.forumId - 1)

    next()
  },
  components: {
    'TheNav': TheNav,
    'TheForum': TheForum,
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
