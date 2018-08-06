<template>
    <aside>
        <BillboardTitle :title="title" />

        <BillboardItem v-for="(item,index) in list"
            :key="index"
            :item="item"
            @click_title="click_title"
            @click_date="click_date" />

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

const noticeMap = new Map();

config.notice.forEach(item => {
  noticeMap.set(item.section_id, item);
});

export default {
  name: 'TheBullet',
  watch: {
    noticeId: 'update'
  },
  mounted () {
    this.update();
  },
  components: {
    'BillboardTitle': BillboardTitle,
    'BillboardItem': BillboardItem
  },
  data () {
    return {
      list: '',
      title: config.notice[0].title,
      noticeId: config.notice[0].section_id
    };
  },
  methods: {
    update () {
      let obj = this;

      getNoticeList(this.noticeId).then(data => {
        obj.list = data;
      });
    },
    init (id) {
      let item = noticeMap.get(id);

      this.title = item.title;
      this.noticeId = id;
    },
    newBill (payload) {
      this.$router.push(`/notice/${this.noticeId}`);
    },
    click_date (payload) {
      alert(`你点了时间：${payload.title}`);
    }
  },
  beforeRouteUpdate (to, from, next) {
    this.init(parseInt(to.params.noticeId));

    next();
  }
};
</script>

<style lang="less" scoped>
aside {
  margin: 0;
  background-color: rgb(235, 235, 235);
}
</style>
