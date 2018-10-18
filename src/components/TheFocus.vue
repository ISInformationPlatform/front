<template>
  <div class="container">
    <aside>
      <h6>置顶</h6>
    </aside>

    <article>
      <ul class="content">
        <li v-for="(item,index) in list"
        :key="index">
          <VButton
          :title="item.post_title"
          :data="item._id"
          @click="click_title"/>
        </li>
      </ul>

      <VPagination class="pagination"
        @click_page="click_page"
        :totalNum="total_page_num"
        :currentPage="current_page"/>
    </article>
  </div>
</template>

<script>
import { getPostList } from '@/service/API';
import VButton from '@/components/VButton';
import VPagination from '@/components/VPagination';

export default {
  components: {
    'VButton': VButton,
    'VPagination': VPagination
  },
  data () {
    return {
      list: [],
      total_page_num: 0,
      current_page: 0
    };
  },
  mounted () {
    this.update();
  },
  props: ['forumId', 'tag_filter'],
  watch: {
    forumId: 'update',
    tag_filter: 'update'
  },
  methods: {
    update () {
      let obj = this;
      let tagFilter = this.tag_filter;

      getPostList(this.forumId, {
        tag_filter: tagFilter, sticky: true
      }).then(data => {
        obj.list = data.post_list;
        obj.total_page_num = data.total_page_num;
      });
    },
    click_title (payload) {
      let forumId = this.$route.params.forumId;
      let postId = payload.data;

      this.$router.push(`/forum/${forumId}/post/${postId}`);
    },
    click_page (payload) {
      let obj = this;
      let pageNum = payload.page_num;
      let tagFilter = this.tag_filter;

      getPostList(this.forumId, {
        page_num: pageNum, tag_filter: tagFilter, sticky: true
      }).then(data => {
        obj.list = data.post_list;
        obj.total_page_num = data.total_page_num;
      });
    }
  }
};
</script>

<style lang="less" scoped>
.container{
  display: flex;
  border: 2px solid #eeeeee;
}

aside {
  width: 40px;
  font-size: 35px;
  word-wrap: break-word;
  background-color: rgb(235, 235, 235);

  h6{
    text-align: center;
  }
}

article {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .content {
    padding: 5px 10px;
    list-style: none;
    width: 85%;

    li {
      margin: 5px 0;
    }

    button {
      font-size: 1.25em;
    }

    p {
      margin: 0;
      text-align: right;
    }
  }
}

.pagination {
  margin: 0;
  padding: 0;
  text-align: center;

  font-size: 0.75em;
  font-family: Tahoma, Arial,Helvetica, Sans-serif;
  background-color: #c1c1c1;

  button {
    padding: 2px 5px;
    color: #000;
    background-color: #c1c1c1;
    text-decoration: none;

    border: none;
    cursor: pointer;

    &:hover {
      color: #000;
      background-color: white;
    }
  }
}

</style>
