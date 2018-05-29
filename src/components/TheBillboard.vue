<template>
    <aside>
        <BillboardTitle :title="title" />

        <BillboardItem v-for="(item,index) in content"
            :key="index"
            :title="item.title"
            :url="item.url"
            :date="item.date"
            @click_title="click_title"
            @click_date="click_date" />
    </aside>
</template>

<script>
import BillboardTitle from '@/components/BillboardTitle'
import BillboardItem from '@/components/BillboardItem'

export default {
  name: 'TheBullet',
  components: {
    'BillboardTitle': BillboardTitle,
    'BillboardItem': BillboardItem
  },
  methods: {
    click_title (payload) {
      alert(`你点了标题：${payload.title}`)
    },
    click_date (payload) {
      alert(`你点了时间：${payload.title}`)
    }
  },
  data () {
    return {
      content: [{
        title: '信软学院智创未来工作室学生团队斩获微软创新杯智能家居挑战赛金奖',
        date: '2018.04.11',
        url: 'http://www.baidu.com'
      },
      {
        title: '法国萨瓦-勃朗峰大学副校长一行访问我院',
        date: '2018.03.22',
        url: 'http://www.uestc.com'
      },
      {
        title: '我院召开人事人才组工作会议',
        date: '2018.03.22',
        url: 'http://www.uestc.com'
      }
      ],
      title: '公告'
    }
  }
}
</script>

<style lang="less" scoped>
aside {
  margin: 0;
}
</style>
