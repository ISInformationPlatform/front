<template>
  <article>
    <section class="top">
      <aside class="icon">
        <img :src="icon">
        <h2>{{username}}</h2>
      </aside>

      <form class="detail">
        <section>
          <h5>毕业去向</h5>
          <input type="text" v-model="graduate">
        </section>

        <section>
          <h5>年级</h5>
          <input type="text" v-model="grade">
        </section>

        <section>
          <h5>联系方式</h5>
          <input type="text" v-model="tel">
        </section>

        <footer>
          <button>保存</button>
        </footer>
      </form>
    </section>

    <section class="introduction">
      <h3>个人简介</h3>
      <p>{{message}}</p>
      <footer>
        <button>保存</button>
      </footer>
    </section>
  </article>
</template>

<script>
import VButton from '@/components/VButton';

export default {
  name: 'ThePerson',
  data () {
    return {
      icon: '/static/icon.jpg',
      username: 'hwfhc',
      tel: '156156156',
      graduate: '阿里',
      grade: '2018',
      message: '壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙。壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙壬戌之秋，七月既望，苏子与客泛舟游于赤壁之下。清风徐来，水波不兴。举酒属客，诵明月之诗，歌窈窕之章。少焉，月出于东山之上，徘徊于斗牛之间。白露横江，水光接天。纵一苇之所如，凌万顷之茫然。浩浩乎如冯虚御风，而不知其所止；飘飘乎如遗世独立，羽化而登仙'
    };
  },
  components: {
    'VButton': VButton
  }
};
</script>

<style lang="less" scoped>
.top {
  display: flex;
  margin: 0;
  padding: 10px 5%;
}

.icon {
  margin-right: 80px;
  display: flex;

  h2 {
    height: 100%;
  }

  img {
    width: 200px;
    height: 200px;
  }
}

.detail {
  h5 {
    color: #24292e;
    font-size: 14px;
    margin: 0 0 6px;
  }

  input {
    border-radius: 3px;
    outline: none;
    border: 1px solid #d1d5da;
    color: #24292e;
    padding: 6px 8px;
    font-size: 16px;
  }

  section {
    margin-top: 5px;
  }
}

footer {
  margin-top: 10px;

  button {
    outline: none;
    text-decoration: none;
    border: none;
    cursor: pointer;

    color: #fff;
    background-color: #34d058;
    padding: 6px 12px;
    font-size: 14px;
    border-radius: 3px;
    border: 1px solid rgba(27,31,35,0.2);

    &:hover {
      background-color: #28a745;
    }
  }
}

.introduction {
  border-top: 1px solid #cccccc;
  padding: 20px 0;
}
</style>
