<template>
  <ul class="container">
    <li :key="index" v-for="(item,index) in list">
      <icon class="icon"
        :icon="icon"
        :username="item.comment_author"
        @click="click_icon" />

      <div class="content">
        {{item.comment_content}}
      </div>

    </li>
  </ul>
</template>

<script>
import { getComment } from '@/service/getData';

import VPin from '@/components/VPin';

export default {
  props: ['forumId', 'postId'],
  components: {
    'icon': VPin
  },
  watch: {
    forumId: 'update',
    postId: 'update'
  },
  methods: {
    update () {
      let obj = this;

      getComment(this.forumId, this.postId)
        .then(data => {
          obj.list = data;
        });
    },
    click_icon (payload) {
      let personId = 1;
      this.$router.push(`/person/${personId}`);
    }
  },
  mounted () { this.update(); },
  data () {
    return {
      icon: '/static/icon.jpg',
      list: []
    };
  }
};
</script>

<style lang="less" scoped>
.container{
  padding: 20px;
}

ul {
  list-style: none;

  li{
    border-bottom: 1px solid #eeeeee;

    &:first-child{
      border-top: 1px solid #eeeeee;
    }
  }

  .icon {
    margin-top: 10px;
  }

  .content {
    padding: 10px 0;
  }
}
</style>
