<template>
  <article>
    <section class="top">
      <aside class="icon">
        <img :src="icon">
        <h2>{{nickname}}</h2>
      </aside>

      <form class="detail">
        <section>
          <h5>毕业去向</h5>
          <input type="text" v-model="employment">
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
          <VButton @click="save_detail" :title="'保存'"/>
        </footer>
      </form>
    </section>

    <section class="introduction">
      <h3>个人简介</h3>
      <p>{{introduction}}</p>
      <footer>
        <VButton @click="save_introduction" :title="'保存'"/>
      </footer>
    </section>
  </article>
</template>

<script>
import VButton from '@/components/VButton';
import { getPersonDetail, updatePersonDetail } from '@/service/API';
import { mapActions, mapState } from 'vuex';

export default {
  name: 'Person',
  components: {
    'VButton': VButton
  },
  data () {
    return {
      icon: '/static/icon.jpg',
      tel: '',
      employment: '',
      grade: '',
      introduction: ''
    };
  },
  computed: {
    ...mapState([
      'nickname'
    ])
  },
  methods: {
    ...mapActions([
      'jump'
    ]),
    save_detail () {
      let personId = this.$route.params.personId;

      let employment = this.employment;
      let grade = this.grade;
      let tel = this.tel;
      let introduction = this.introduction;

      var promise = updatePersonDetail(personId, {
        employment,
        grade,
        tel,
        introduction
      });

      this.jump({
        message: '保存成功',
        obj: this,
        promise
      });
    },
    save_introduction () {

    }
  },
  mounted () {
    let personId = this.$route.params.personId;
    let obj = this;

    getPersonDetail(personId).then(data => {
      obj.tel = data.tel;
      obj.employment = data.employment;
      obj.grade = data.grade;
      obj.introduction = data.introduction;
    });
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
