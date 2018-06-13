<template>
    <section>
        <ForumItemTitle :title="item.title"
          @click="click_title" />

        <VPin class="pin" :icon="item.icon"
          :username="item.username"
          @click="click_icon" />

        <ForumItemContent :content="item.content"
          :isToggle="isToggle"/>

        <ForumItemFooter :tag="item.tag"
           :viewlogo="viewlogo"
           :view="item.view"
           :isToggle="isToggle"
           :content="item.content"
           @click-tag="click_tag"
           @click-toggle="click_toggle"/>
    </section>
</template>

<script>
import VPin from '@/components/VPin'
import ForumItemTitle from '@/components/ForumItemTitle'
import ForumItemContent from '@/components/ForumItemContent'
import ForumItemFooter from '@/components/ForumItemFooter'

export default {
  name: 'ForumItem',
  props: ['item', 'viewlogo'],
  data () {
    return {
      isToggle: true
    }
  },
  components: {
    'VPin': VPin,
    'ForumItemTitle': ForumItemTitle,
    'ForumItemContent': ForumItemContent,
    'ForumItemFooter': ForumItemFooter
  },
  methods: {
    click_title (payload) {
      this.$emit('click_title', payload)
    },
    click_icon (payload) {
      this.$emit('click_icon', payload)
    },
    click_tag (payload) {
      this.$emit('click_tag', payload)
    },
    click_toggle () {
      this.isToggle = !this.isToggle
    }
  }
}
</script>

<style lang="less" scoped>
section {
  border-bottom: 1px solid #cccccc;
  padding: 20px 0;
}
.pin {
  margin-top: 20px;
}
</style>
