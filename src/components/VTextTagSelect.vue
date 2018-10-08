<template>
  <article>
    <h4>标签选择</h4>

    <section v-for="(list,i) in menu" :key="i">
      <VButton v-for="(item, j) in list"
      :key="j"
      :data="item.id"
      :title="item.title"
      @click="click_tag"/>
    </section>

  </article>
</template>

<script>
import VButton from '@/components/VButton';

export default {
  name: 'VTextTagSelect',
  components: {
    'VButton': VButton
  },
  data () {
    return {
      tag: 0,
      isActive: []
    };
  },
  props: ['menu'],
  methods: {
    click_tag (payload) {
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
    },
    click_sticky (payload) {
      console.log(54);
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
  created () {
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
h4 {
  text-align: left;
  color: #1990ff;
  font-weight: normal;

  font-size: 24px;
  margin: 20px 0;
}

button {
  color:#1990ff;
  border: 1px solid #1990ff;
  border-radius: 3px;

  padding: 0 20px;
  width: 87px;
  height: 26px;
  margin: 0 5px 30px 0;
}

section {
  flex-wrap: wrap;
  width: 100%;
  display: flex;
}

.active {
  background-color: #1990ff;
  color: white;
}
</style>
