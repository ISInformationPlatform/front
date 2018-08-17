<template>
  <main>
    <template>
      <TheBillboard class="left"/>

      <TheForum :tag_filter="tag_filter" :forumId="forumId" class="right">
        <template slot="before">
          <h2>{{title}}板块</h2>

          <VTagSelect @select="tagSelected" :menu="menu"/>

          <TheFocus/>
        </template>

        <template slot="after">
          <div class="submit">
            <button @click="post">发帖</button>
          </div>
        </template>
      </TheForum>

    </template>
  </main>
</template>

<script>
import config from '@/page/config';

import TheFocus from '@/components/TheFocus';
import VTagSelect from '@/components/VTagSelect';
import TheForum from '@/components/TheForum';
import TheBillboard from '@/components/TheBillboard';

const forumMap = new Map();

config.forum.forEach(item => {
  forumMap.set(item.section_id, item);
});

export default {
  data () {
    return {
      title: config.forum[0].title,
      menu: config.forum[0].type,
      forumId: config.forum[0].section_id,
      tag_filter: 0
    };
  },
  methods: {
    tagSelected (payload) {
      this.tag_filter = payload.tag;
    },
    init (id) {
      let item = forumMap.get(id);

      this.title = item.title;
      this.menu = item.type;
      this.forumId = id;
    },
    post () {
      this.$router.push(`/forum/${this.forumId}/post`);
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.init(parseInt(to.params.forumId));

    next();
  },
  components: {
    'TheForum': TheForum,
    'VTagSelect': VTagSelect,
    'TheFocus': TheFocus,
    'TheBillboard': TheBillboard
  }
};
</script>

<style lang="less" scoped>
main{
  display: flex;
  justify-content: space-around;

.editor {
  width: 60%;
  margin: 20px 20%;
}

.right {
  h2{
    color: #1990ff;
  }
  margin-left: 5%;
  padding: 10px 0 30px 0;
  width: 70%;
}

  .left {
    margin: 30px 0 30px 20px;
    width: 20%;
    padding:2%;
  }
}

input{
  border: none;
  outline: none;

  font-size: 2em;
  width: 100%;
}

.submit > button{
  border:2px solid #cccccc;
  background: none;
  color: #cccccc;
}
</style>
