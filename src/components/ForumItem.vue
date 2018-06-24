<template>
    <section>
        <ForumItemTitle :title="item.post_title"
          @click="click_title" />

<<<<<<< HEAD
        <VPin class="pin" :icon="item.icon"
=======
        <VPin class="pin"
          :icon="icon"
>>>>>>> 708dbd01f63c21889a1adeb9dbd7c36e9b511ef3
          :username="item.author"
          @click="click_icon" />

        <ForumItemContent :content="item.post_content"
          :isToggle="isToggle"/>

        <ForumItemFooter :tag="item.tag"
           :viewlogo="viewlogo"
           :view="item.visited"
           :content="item.post_title"

           :isToggle="isToggle"
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
  props: ['item', 'ID'],
  data () {
    return {
      isToggle: true,
      viewlogo: '/static/viewLogo.png',
      icon: '/static/icon.jpg'
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
      payload.ID = this.ID
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
