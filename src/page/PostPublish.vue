<template>
  <main>
    <VEditor @input="updateHtml" class="editor">
      <input v-model="title" placeholder="请输入标题" slot="before" type="text">

      <div class="btn_cnt" slot="after">
        <VPublishTagSelect @select="tagSelected" :menu="menu"/>
        <VButton
          @click="upload"
          :title="'发布'"/>
        <div class="line"></div>

        <input type="checkbox" v-model="sticky">
      </div>
   </VEditor>
  </main>
</template>

<script>
import config from '@/page/config';

import { submitPost } from '@/service/getData';

import VEditor from '@/components/VEditor';
import VButton from '@/components/VButton';
import VPublishTagSelect from '@/components/VPublishTagSelect';
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
    'VPublishTagSelect': VPublishTagSelect
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

  .line {
    border-top: 1px solid #cccccc;
    border-bottom: 1px solid #cccccc;
    margin: 20px 0;
  }

  button{
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
