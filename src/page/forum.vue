<template>
  <main>
    <template>
      <TheForum :forumId="forumId" class="left">
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
import config from '@/page/config';

import TheFocus from '@/components/TheFocus';
import TheNav from '@/components/TheNav';
import TheForum from '@/components/TheForum';
import TheBillboard from '@/components/TheBillboard';

export default {
  data () {
    return {
      title: config[0].title,
      menu: config[0].type,
      forumId: 1
    };
  },
  methods: {
    init (id) {
      let num = id - 1;

      this.title = config[num].title;
      this.menu = config[num].type;
      this.forumId = id;
    },
    post () {
      this.$router.push(`/forum/${this.forumId}/post`);
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.init(to.params.forumId);

    next();
  },
  components: {
    'TheForum': TheForum,
    'TheNav': TheNav,
    'TheFocus': TheFocus,
    'TheBillboard': TheBillboard
  }
};
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
