<template>
  <div>
    <div class="container" v-for="(list,i) in menu" :key="i">
     <VImgButton v-for="(item,j) in list"
      :images="item.tag"
      :data="item.id"
      :title="item.title"
      :key="j"
      @click="click" />
    </div>
 </div>
</template>

<script>
import VImgButton from '@/components/VImgButton';
export default {
  name: 'VTagSelect',
  components: {
    'VImgButton': VImgButton
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
          { active: false, id: item.id }
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
        { active: false, id: item.id }
      ));
    });
    this.isActive = isActive;
  }
};
</script>

<style lang="less" scoped>
button {
  margin-bottom: 30px;
  padding: 0;
  font-size: 20px;
  background-color: white;
  color: #1990ff;
}
.active {
  background-color: #1990ff;
  color: white;
}
.container {
  flex-wrap: wrap;
  width: 100%;
  display: flex;
}
</style>
