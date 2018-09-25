<template>
  <div>
    <span>标签选择</span>
    <div class="container" v-for="(list,i) in menu" :key="i">
     <PTSButton v-for="(item,q) in list"
     :key="q"
     :data="item.id"
     :title="item.title"
     @click="click">
     </PTSButton>
    </div>
    <span>发布位置</span>
    <div class="container">
      <button><p>置顶</p></button>
      <button><p>非置顶</p></button>
    </div>
 </div>
</template>

<script>

import PTSButton from '@/components/PTSButton';

export default {
  name: 'VPublishTagSelect',
  components: {
    'PTSButton': PTSButton
  },
  data () {
    return {
      tag: 0,
      isActive: []
    };
  },
  props: ['menu'],
  methods: {
    click (payload) {
      let id = payload.data;
      this.isActive.forEach(item => {
        if (item.id !== id) {
          return;
        }
        item.active = !item.active;
      });
      this.tag = 0;
      this.isActive.forEach(item => {
        if (item.active) { this.tag += 1 << (item.id - 1); }
      });
      this.$emit('select', {
        tag: this.tag
      });
    }
  },
  watch: {
    menu: function () {
      this.$children.forEach(item => { item.isActive = false; });
      let isActive = [];
      this.menu.forEach(item => {
        item.forEach(item => isActive.push(
          {active: false, id: item.id}
        ));
      });
      this.isActive = isActive;
    }
  },
  mounted () {
    this.$children.forEach(item => { item.isActive = false; });
    let isActive = [];
    this.menu.forEach(item => {
      item.forEach(item => isActive.push(
        {active: false, id: item.id}
      ));
    });
    this.isActive = isActive;
  }
};
</script>
<style lang="less" scoped>
span {
  text-align: left;
  color: #1990ff;
  display: block;
  font-size: 24px;
  margin: 20px 0;
  }
button{
  background: none;
  border: 1px solid #1990ff;
  border-radius: 3px;
  cursor: pointer;
  padding: 0 20px;
  width: 87px;
  height: 26px; 
  margin-left: 3%;
  margin-bottom: 30px;
  p{
    margin: 0;
    font-size: 15px;
    color: #1990ff;
  }
}
.container {
  flex-wrap: wrap;
  width: 100%;
  display: flex;
}
.active {
  background-color: #1990ff;
  color: white;
}
</style>
