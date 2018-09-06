<template>
  <aside>
    <BillboardSection v-for="(item,index) in list"
      :key="index"
      :sectionId="item.section_id"
      :title="item.title"/>

    <div class="submit">
      <router-link to="/notification/post">发帖</router-link>
    </div>
  </aside>
</template>

<script>
import config from '@/page/config';

import BillboardSection from '@/components/BillboardSection';

export default {
  name: 'TheBullet',
  components: {
    'BillboardSection': BillboardSection
  },
  data () {
    return {
      list: config.notice
    };
  }
};
</script>

<style lang="less" scoped>
aside {
  margin: 0;
  background-color: #f7f7fb;
  position: relative;
}

.submit {
  position: absolute;
  padding: 5px;
  bottom: 10px;
  right: 10px;
}

.submit > a{
  border: 2px solid #cccccc;
  background: none;
  height: 100%;
  width: 100%;

  padding: 5px 10px;
  color: #cccccc;
}
</style>
