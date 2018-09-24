<template>
  <section>
    <header>{{title}}</header>

    <BillboardItem v-for="(item,index) in list"
      :key="index"
      :item="item"
      :sectionId="sectionId"/>

    <VPagination
      @click_page="click_page"
      :totalNum="total_page_num"
      :currentPage="current_page"/>
 </section>
</template>

<script>
import { getNoticeList } from '@/service/getData';

import BillboardItem from '@/components/BillboardItem';
import VPagination from '@/components/VPagination';

export default {
  name: 'BillboardSection',
  props: ['sectionId', 'title'],
  components: {
    'BillboardItem': BillboardItem,
    'VPagination': VPagination
  },
  data () {
    return {
      list: '',
      total_page_num: 0,
      current_page: 0
    };
  },
  created () {
    getNoticeList(this.sectionId).then(data => {
      this.list = data.notice_list;
      this.total_page_num = data.total_page_num;
    });
  },
  methods: {
    click_page (payload) {
      getNoticeList(this.sectionId, payload.page_num).then(data => {
        this.list = data.notice_list;
        this.total_page_num = data.total_page_num;
      });
    }
  }
};
</script>

<style lang="less" scoped>
section {
  margin: 0;
  background-color: #f7f7fb;
}

header {
  font-size: 1.3em;
  padding: 10px 0;
  border-bottom: 1px solid #cccccc;
  color: black;
}
</style>
