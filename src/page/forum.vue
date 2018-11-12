<template>
  <main>
    <template>
      <TheBillboard class="left"/>

      <TheForum class="right"
        :tag_filter="tag_filter"
        :person_post="person_post"
        :tag_list="menu"
        :forumId="forumId"
        :search_text="search_text">

        <input id="search" slot="aside"
            v-model="search_text"
            placeholder="搜索">

        <template slot="before">
          <h2>{{title}}</h2>

          <VTagSelect @select="tagSelected" :menu="menu"/>

          <TheFocus :tag_filter="tag_filter" :forumId="forumId"/>
        </template>

        <template slot="after">
          <div class="submit">
            <router-link :to="`/forum/${forumId}/post`">发帖</router-link>
            <a @click="click_my_post">我的帖子</a>
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

import { mapState } from 'vuex';

const forumMap = new Map();

config.forum.forEach(item => {
  forumMap.set(item.section_id, item);
});

export default {
  name: 'Forum',
  components: {
    'TheForum': TheForum,
    'VTagSelect': VTagSelect,
    'TheFocus': TheFocus,
    'TheBillboard': TheBillboard
  },
  data () {
    return {
      title: config.forum[0].title,
      menu: config.forum[0].type,
      forumId: config.forum[0].section_id,
      tag_filter: 0,
      person_post: null,
      search_text: ''
    };
  },
  computed: {
    ...mapState([
      'username'
    ])
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
    click_my_post () {
      this.person_post = this.username;
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.init(parseInt(to.params.forumId));

    next();
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

.submit > a {
  padding: 5px 10px;
  border: 2px solid #cccccc;
  background: none;
  color: #cccccc;

  cursor: pointer;
}

#search {
  position: absolute;
  right: 5px;
  top: 10px;
  width: 20%;

  border: none;
  border: 1px solid #cccccc;
  border-radius: 5px;
  text-decoration: none;
  outline: none;
}
</style>
