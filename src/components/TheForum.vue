<template>
  <article>
    <slot name="before"/>

    <div class="title">
      <span>帖子</span>
      <input v-model="search_text" placeholder="搜索">{{search_text}}
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
import { getPostList } from '@/service/API';
import ForumItem from '@/components/ForumItem';
import VPagination from '@/components/VPagination';

export default {
  name: 'TheForum',
  props: [
    'forumId',
    'tag_filter',
    'person_post',
    'tag_list',
    'search_text'
  ],
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
  watch: {
    forumId: 'getData',
    tag_filter: 'getData',
    person_post: 'getData',
    current_page: 'getData',
    search_text: 'getData'
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
      let personPost = this.person_post;
      let searchText = this.search_text;

      var opt = {
        tag_filter: tagFilter,
        page_num: pageNum
      };

      if (personPost) {
        opt.person_post = personPost;
      }

      if (searchText) {
        opt.search_text = searchText;
      }

      getPostList(this.forumId, opt).then(data => {
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
  input{
    position: absolute;
    right: 5px;
    top: 10px;
    width: 20%;

    text-decoration: none;
    outline: none;
  }
}
</style>
