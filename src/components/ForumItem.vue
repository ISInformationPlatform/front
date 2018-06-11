<template>
    <section>
        <ForumItemTitle :title="item.title"
            @click="click_title" />

        <ForumItemIcon :icon="item.icon"
            :username="item.username"
            @click="click_icon" />

        <ForumItemContent :content="item.content"
        :toggleValue="toggleValue"/>

        <ForumItemFooter :tag="item.tag"
            :viewlogo="viewlogo"
            :view="item.view"
            :content="item.content"
            :toggleValue="toggleValue"
            @click-tag="click_tag"
            @click-toggle="click_toggle"/>
    </section>
</template>

<script>
import ForumItemTitle from '@/components/ForumItemTitle'
import ForumItemIcon from '@/components/ForumItemIcon'
import ForumItemContent from '@/components/ForumItemContent'
import ForumItemFooter from '@/components/ForumItemFooter'

export default {
  name: 'ForumItem',
  props: ['item', 'viewlogo'],
  data () {
    return {
      toggleValue: '展开'
    }
  },
  components: {
    'ForumItemTitle': ForumItemTitle,
    'ForumItemIcon': ForumItemIcon,
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
      if (this.toggleValue === '展开') {
        this.toggleValue = '收起'
      } else {
        this.toggleValue = '展开'
      }
    }
  }
}
</script>

<style lang="less" scoped>
section {
  border-bottom: 1px solid #cccccc;
  padding: 20px 0;
}
</style>
