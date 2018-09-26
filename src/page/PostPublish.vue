<template>
  <main>
    <VEditor @input="updateHtml" class="editor">
      <input v-model="title" placeholder="请输入标题" slot="before" type="text">

      <div class="btn_cnt" slot="after">
        <VTextTagSelect @select="tagSelected" :menu="menu"/>

        <h4>发布位置</h4>

        <section>
          <VButton class="sticky"
            :title="'非置顶'"
            @click="click_sticky"/>
        </section>

        <VButton class="publish"
          @click="upload"
          :title="'发布'"/>
      </div>
   </VEditor>
  </main>
</template>

<script>
import config from '@/page/config';

import { submitPost } from '@/service/getData';

import VEditor from '@/components/VEditor';
import VButton from '@/components/VButton';
import VTextTagSelect from '@/components/VTextTagSelect';
import { mapState, mapActions } from 'vuex';

export default {
  data () {
    return {
      title: '',
      content: '',
      menu: [],
      tag: 0,
      sticky: false,
      sectionId: 1
    };
  },
  computed: {
    ...mapState([
      'username'
    ])
  },
  components: {
    'VEditor': VEditor,
    'VButton': VButton,
    'VTextTagSelect': VTextTagSelect
  },
  mounted () {
    let obj = this;
    this.sectionId = parseInt(this.$route.params.forumId);

    config.forum.forEach(item => {
      if (item.section_id !== obj.sectionId) {
        return;
      }

      obj.menu = item.type;
    });
  },
  methods: {
    ...mapActions([
      'jump'
    ]),
    click_sticky () {
      this.sticky = !this.sticky;
    },
    tagSelected (payload) {
      this.tag = payload.tag;
    },
    updateHtml (payload) {
      this.content = payload.html;
    },
    upload () {
      let promise = submitPost(this.sectionId, this.title, this.username, this.content, this.tag, {
        sticky: this.sticky
      });

      this.jump({
        message: '发布成功',
        obj: this,
        promise
      });
    }
  }
};
</script>

<style lang="less" scoped>
main{
  display: flex;
  justify-content: space-between;

.editor {
  width: 60%;
  margin: 20px 20%;
}

.left {
  h2{
    color: #1990ff;
  }

  padding: 10px 0 30px 0;
  width: 70%;
}

  .right {
    margin: 30px 0 30px 20px;
    width: 25%;
  }
}

input{
  border: none;
  outline: none;

  font-size: 2em;
  width: 100%;
}

.btn_cnt{
  text-align: center;

  h4 {
    text-align: left;
    color: #1990ff;
    font-weight: normal;

    font-size: 24px;
    margin: 20px 0;
  }

  section {
    display: flex;
  }

  .sticky {
    color:#1990ff;
    border: 1px solid #1990ff;
    border-radius: 3px;

    padding: 0 20px;
    width: 87px;
    height: 26px;
    margin: 0 5px 30px 0;
  }

  .active {
    background-color: #1990ff;
    color: white;
  }

  .publish {
    border: none;
    background-color: cornflowerblue;
    color: white;
    font-size: 1em;
    width: 50%;
    padding: 10px 20px;
    border-radius: 5px;
    margin-bottom: 20px;
  }
}
</style>
