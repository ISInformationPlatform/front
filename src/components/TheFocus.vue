<template>
  <ul>
    <li v-for="(item,index) in list" :key="index">
      <VButton :title="item.title" :data="item.url"/>
    </li>
  </ul>
</template>

<script>
import VButton from '@/components/VButton';

export default {
  name: 'TheFocus',
  components: {
    'VButton': VButton
  },
  data () {
    return {
      list: [{
        title: '重要通知啊啊啊',
        url: '/forum/1'
      },
      {
        title: '就是很重要',
        url: '/forum/2'
      },
      {
        title: '读很重要的通知',
        url: '/forum/3'
      }]
    };
  }
};
</script>

<style lang="less" scoped>
ul {
  border: 1px solid #eeeeee;
  padding: 10px 10px;
  list-style: none;
}

li {
  margin: 10px 0;
}

button {
  font-size: 1.25em;
}
</style>
