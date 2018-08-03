<template>
  <nav>
    <div v-for="(list,i) in menu" :key="i">
     <IMButton v-for="(item,j) in list"
      :images="item.tag"
      :data="item.id"
      :title="item.title"
      :key="j"
      @click="click" />
    </div>
 </nav>
</template>

<script>
import IMButton from '@/components/IMButton';

export default {
  name: 'TheNav',
  components: {
    'IMButton': IMButton
  },
  data () {
    return {
      tag: 0
    };
  },
  props: ['menu'],
  methods: {
    click (payload) {
      let id = payload.data;
      this.isActive[id].active = !this.isActive[id].active;

      this.isActive.forEach(item => {
        if (item.active) { this.tag += 1 << item.id; }
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
div{
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
}
</style>
