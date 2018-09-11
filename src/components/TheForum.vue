<template>
  <article>
    <slot name="before"/>

    <div class="title">
      <span>帖子</span>
    </div>

    <div class="postContainer">

      <ForumItem
        :ID="item._id"
        :item="item"
        :tag_list="tag_list"
        :key="index"
        @click_title="click_title"
        @click_icon="click_icon"
        v-for="(item,index) in list" />
    </div>

    <VPagination
      @click_page="click_page"
      :totalNum="total_page_num"
      :currentPage="current_page"/>

    <slot name="after"/>

  </article>
</template>

<script>
import { getPostList } from '@/service/getData';
import ForumItem from '@/components/ForumItem';
import VPagination from '@/components/VPagination';

export default {
  components: {
    'ForumItem': ForumItem,
    'VPagination': VPagination
  },
  data () {
    return {
      list: [],
      total_page_num: 0,
      current_page: 0
    };
  },
  props: ['forumId', 'tag_filter', 'tag_list'],
  watch: {
    forumId: 'getData',
    tag_filter: 'getData',
    current_page: 'getData'
  },
  created () {
    this.getData();
  },
  methods: {
    getData () {
      this.list = [];

      let obj = this;
      let pageNum = this.current_page;
      let tagFilter = this.tag_filter;

      getPostList(this.forumId, {
        tag_filter: tagFilter, page_num: pageNum
      }).then(data => {
        obj.list = data.post_list;
        obj.total_page_num = data.total_page_num;
      });
    },
    click_title (payload) {
      let forumId = this.$route.params.forumId;
      let postId = payload.ID;

      this.$router.push(`/forum/${forumId}/post/${postId}`);
    },
    click_icon (payload) {
      let personId = 1;
      this.$router.push(`/person/${personId}`);
    },
    click_page (payload) {
      this.current_page = payload.page_num;
    }
  }
};
</script>

<style lang="less" scoped>
.comment{
  border:2px solid #eeeeee;
}
button{
  margin: 20px 0;
}
.title{
  position: relative;
  margin-top: 30px;
  height:40px;
  background-color: rgb(235,235,235);
  font-size: 1em;
  font-weight: bold;
  span{
    position: absolute;
    top: 10px;
  }
}
</style>
