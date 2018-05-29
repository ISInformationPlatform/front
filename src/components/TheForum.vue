<template>
    <article>
        <ForumItem :item="item"
            :viewlogo="viewlogo"
            :key="index"
            @click_title="click_title"
            @click_icon="click_icon"
            @click_tag="click_tag"
            v-for="(item,index) in list" />
    </article>
</template>

<script>
import ForumItem from '@/components/ForumItem'

export default {
  name: 'TheForum',
  components: {
    'ForumItem': ForumItem
  },
  methods: {
    click_title (payload) {
      alert(`你点了标题：${payload.title}`)
    },
    click_icon (payload) {
      alert(`你点了头像或者用户名：${payload.title}`)
    },
    click_tag (payload) {
      alert(`你点了标签：${payload.title}`)
      this.$router.push('tag')
    }
  },
  data () {
    return {
      list: [
        {
          title: '法国萨瓦大学',
          username: '张飞',
          content: '按生物类群划分学科，有利于从各个侧面认识某一个自然类群的生物特点和规律性。但无论具体对象是什么，研究课题都不外分类、形态、生理、生化、生态、遗传、进化等方面。为了强调按类型划分的学科已经不仅包括形态、分类等比较经典的内容，而且包括其他各个过程和各种层次的内容，人们倾向于把植物学称为植物生物学，把动物学称为动物生物学。',
          icon: '/static/icon.jpg',
          tag: '基础科学',
          view: '500'
        },
        {
          title: '剑桥大学',
          username: '牛顿',
          content: '法国萨瓦-勃朗峰大学副校长一行访问我院',
          icon: '/static/icon.jpg',
          tag: '日程',
          view: '200'
        },
        {
          title: '勃朗峰大学',
          username: '张飞',
          content: '相声一词，古作象声，原指模拟别人，又称隔壁相声。经华北地区民间说唱曲艺进一步演化发展，并融入了由摹拟口技等曲艺形式而形成，一般认为于清咸丰、同治年间形成。以说笑话或滑稽问答引起观众发笑的曲艺形式。至民国初年，象声逐渐从一个人摹拟口技发展为单口笑话，名称随之转变为相声。后逐步发展为单口相声、对口相声、群口相声，综合成为名副其实的相声。经过多年发展，对口相声最终成为最受观众喜爱的相声形式。晚清年间，相声就形成了现代的特色和风格。主要用北京话，各地也有“方言相声相声形成过程中广泛吸取口技、说书等艺术之长，寓庄于谐，以讽刺笑料表现真善美，以引人发笑为艺术特点；以“说、学、逗、唱”为主要艺术手段。',
          icon: '/static/icon.jpg',
          tag: '历史',
          view: '5600'
        },
        {
          title: '电子科大',
          username: '刘备',
          content: '《三国演义》是中国古典四大名著之一，是中国第一部长篇章回体历史演义小说，全名为《三国志通俗演义》（又称《三国志演义》），作者是元末明初的著名小说家罗贯中。《三国志通俗演义》成书后有嘉靖壬午本等多个版本传于世，到了明末清初，毛宗岗对《三国演义》整顿回目、修正文辞、改换诗文。 [1] 《三国演义》描写了从东汉末年到西晋初年之间近百年的历史风云，以描写战争为主，诉说了东汉末年的群雄割据混战和魏、蜀、吴三国之间的政治和军事斗争，最终司马炎一统三国，建立晋朝的故事。反映了三国时代各类社会斗争与矛盾的转化，并概括了这一时代的历史巨变，塑造了一群叱咤风云的三国英雄人物。全书可大致分为黄巾起义、董卓之乱、群雄逐鹿、三国鼎立、三国归晋五大部分。在广阔的历史舞台上，上演了一幕幕气势磅礴的战争场面。作者罗贯中将兵法三十六计融于字里行间，既有情节，也有兵法韬略。',
          icon: '/static/icon.jpg',
          tag: '文学',
          view: '500'
        }
      ],
      viewlogo: '/static/viewLogo.png',
      title: '分享'
    }
  }
}
</script>
