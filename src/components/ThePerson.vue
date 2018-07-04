<template>
    <article>
        <header>
            <section class="top">
              <img :src="icon">
              <PersonDetail
                :username="username"/>
            </section>
        </header>

        <section class="content">
          <h3>个人签名</h3>
          {{message}}
        </section>
    </article>
</template>

<script>
import VButton from '@/components/VButton';
import PersonDetail from '@/components/PersonDetail';

export default {
  name: 'ThePerson',
  data () {
    return {
      icon: '/static/icon.jpg',
      username: 'hwfhc',
      message: '壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙'
    };
  },
  components: {
    'VButton': VButton,
    'PersonDetail': PersonDetail
  }
};
</script>

<style lang="less" scoped>
header {
  margin: 0;
  padding: 10px 5%;
  .top {
    display: flex;

    img {
      width: 200px;
      height: 200px;
    }
  }
}

.content {
    border-top: 1px solid #cccccc;
    padding: 20px 0;
}
</style>
