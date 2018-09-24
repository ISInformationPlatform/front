<template>
  <section>
    <h4 @click="click_title">
      {{item.post_title}}
    </h4>

    <VPin class="pin"
      :icon="icon"
      :username="item.post_author"
      @click="click_icon" />

    <ForumItemContent :content="item.post_content"/>

    <ForumItemFooter :tag_filter="item.post_tag"
      :content="item.post_title"
      :visited="item.visited"
      :tag_list="tag_list"

      :viewlogo="viewlogo"
      @click_tag="click_tag"/>
 </section>
</template>

<script>
import VPin from '@/components/VPin';
import ForumItemContent from '@/components/ForumItemContent';
import ForumItemFooter from '@/components/ForumItemFooter';

export default {
  name: 'ForumItem',
  props: ['item', 'ID', 'tag_list'],
  components: {
    'VPin': VPin,
    'ForumItemContent': ForumItemContent,
    'ForumItemFooter': ForumItemFooter
  },
  data () {
    return {
      viewlogo: '/static/viewLogo.png',
      icon: '/static/icon.jpg'
    };
  },
  methods: {
    click_title (payload) {
      payload.ID = this.ID;
      this.$emit('click_title', payload);
    },
    click_icon (payload) {
      this.$emit('click_icon', payload);
    },
    click_tag (payload) {
      this.$emit('click_tag', payload);
    }
  }
};
</script>

<style lang="less" scoped>
section {
  padding-bottom: 30px;
}
.pin {
  margin-top: 5px;
}

h4 {
  cursor: pointer;
  margin: 0;
  font-size: 1.1em;
  color: #1990ff;
}
</style>
