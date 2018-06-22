<template>
  <article>
    <slot name="before"/>

    <ForumItem
      :item="item"
      :viewlogo="viewlogo"
      :key="index"
      @click_title="click_title"
      @click_icon="click_icon"
      @click_tag="click_tag"
      v-for="(item,index) in list" />

    <slot name="after"/>

  </article>
</template>

<script>
import ForumItem from '@/components/ForumItem'
import TheNav from '@/components/TheNav'

export default {
  name: 'TheForum',
  components: {
    'ForumItem': ForumItem,
    'TheNav': TheNav
  },
  props: ['list'],
  mounted () {
      console.log(this)
  },
  methods: {
    click_title (payload) {
      let forumId = this.$route.params.forumId
      let postId = 1

      this.$router.push(`/forum/${forumId}/post/${postId}`)
    },
    click_icon (payload) {
      let personId = 1
      this.$router.push(`/person/${personId}`)
    },
    click_tag (payload) {
      alert(`你点了标签：${payload.title}`)
      this.tag = true
      this.$router.push('/tag')
    }
  },
  data () {
    return {
      links: [
        {
          title: '日程',
          url: 'www.baidu.com'
        },
        {
          title: '基础科学',
          url: 'www.baidu.com'
        }
      ],
      viewlogo: '/static/viewLogo.png',
      title: '分享'
    }
  }
}
</script>

<style lang="less" scoped>
button{
  margin: 20px 0;
}
</style>
