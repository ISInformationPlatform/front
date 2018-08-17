<template>
    <aside>
        <BillboardTitle :title="title" />

        <BillboardItem v-for="(item,index) in list"
          :key="index"
          :item="item"
          @click_title="click_title"
          @click_date="click_date" />

        <VPagination
          @click_page="click_page"
          :totalNum="total_page_num"
          :currentPage="current_page"/>

        <div class="submit">
          <button @click="newBill">发帖</button>
        </div>
    </aside>
</template>

<script>
import config from '@/page/config';

import { getNoticeList } from '@/service/getData';

import BillboardTitle from '@/components/BillboardTitle';
import BillboardItem from '@/components/BillboardItem';
import VPagination from '@/components/VPagination';

const noticeMap = new Map();

config.notice.forEach(item => {
  noticeMap.set(item.section_id, item);
});

export default {
  name: 'TheBullet',
  watch: {
    sectionId: 'update'
  },
  mounted () {
    this.update();
  },
  components: {
    'BillboardTitle': BillboardTitle,
    'BillboardItem': BillboardItem,
    'VPagination': VPagination
  },
  data () {
    return {
      list: '',
      total_page_num: 0,
      current_page: 0,
      title: config.notice[0].title,
      sectionId: config.notice[0].section_id
    };
  },
  methods: {
    update () {
      let obj = this;

      getNoticeList(this.sectionId).then(data => {
        obj.list = data.notice_list;
        obj.total_page_num = data.total_page_num;
      });
    },
    init (id) {
      let item = noticeMap.get(id);

      this.title = item.title;
      this.sectionId = id;
    },
    newBill (payload) {
      this.$router.push(`/notice`);
    },
    click_date (payload) {
      alert(`你点了时间：${payload.title}`);
    },
    click_page (payload) {
      let obj = this;

      getNoticeList(this.sectionId, payload.page_num).then(data => {
        obj.list = data.notice_list;
        obj.total_page_num = data.total_page_num;
      });
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.init(parseInt(to.params.sectionId));

    next();
  }
};
</script>

<style lang="less" scoped>
aside {
  margin: 0;
  background-color: #f7f7fb;
}

.submit > button{
  border:2px solid #cccccc;
  background: none;
  color: #cccccc;
}
</style>
