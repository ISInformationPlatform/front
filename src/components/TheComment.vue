<template>
  <ul class="container">
    <li :key="index" v-for="(item,index) in list">
      <icon class="icon" 
        :icon="icon"
        :username="item.comment_author"
        @click="click_icon" />

      <div class="content">
        {{item.comment_content}}
      </div>

    </li>
  </ul>
</template>

<script>
import VPin from '@/components/VPin'

export default {
  name: 'TheForum',
  props: ['list'],
  components: {
    'icon': VPin
  },
  methods: {
    click_icon (payload) {
      let personId = 1
      this.$router.push(`/person/${personId}`)
    }
  },
  data () {
    return {
      icon: '/static/icon.jpg'
    }
  }
}
</script>

<style lang="less" scoped>
.container{
  padding: 20px;
}

ul {
  list-style: none;

  li{
    border-bottom: 1px solid #eeeeee;

    &:first-child{
      border-top: 1px solid #eeeeee;
    }
  }

  .icon {
    margin-top: 10px;
  }

  .content {
    padding: 10px 0;
  }
}
</style>
