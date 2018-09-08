<template>
  <main>
    <VEditor @input="updateHtml" class="editor">
      <input v-model="title" placeholder="请输入标题" slot="before" type="text">

      <div class="btn_cnt" slot="after">
        <VButton
          @click="upload"
          :title="'发布'"/>
        <VTagSelect @select="tagSelected" :menu="menu"/>

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
import VTagSelect from '@/components/VTagSelect';

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
  components: {
    'VEditor': VEditor,
    'VButton': VButton,
    'VTagSelect': VTagSelect
  },
  methods: {
    tagSelected (payload) {
      this.tag = payload.tag;
    },
    updateHtml (payload) {
      this.content = payload.html;
    },
    upload () {
      submitPost(this.sectionId, this.title, 'hwfhc', this.content, this.tag, {
        sticky: this.sticky
      }).then(() => {
        alert('上传成功');
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
