<template>
  <main>
    <VEditor @input="updateHtml" class="editor">
      <input v-model="title" placeholder="请输入标题" slot="before" type="text">
      <div class="btn_cnt" slot="after">
        <form>
          <select v-model="sectionId">
            <option  v-for="(item,index) in list"
              :key="index"
              :value="item.section_id">
              {{item.title}}
            </option>
          </select>
        </form>
        <VButton
          @click="upload"
          :title="'发布'"/>
      </div>
   </VEditor>
  </main>
</template>

<script>
import config from '@/page/config';
import { submitNotice } from '@/service/getData';
import VEditor from '@/components/VEditor';
import VButton from '@/components/VButton';

export default {
  components: {
    'VEditor': VEditor,
    'VButton': VButton
  },
  mounted () {
    this.sectionId = this.$route.params.sectionId;
  },
  data () {
    return {
      title: '',
      content: '',
      sectionId: '',
      list: config.notice
    };
  },
  methods: {
    updateHtml (payload) {
      this.content = payload.html;
    },
    upload () {
      submitNotice(this.sectionId, this.title, 'hwfhc', this.content)
        .then(() => {
          alert('发布成功');
        });
    }
  }
};
</script>

<style lang="less" scoped>
main{
  display: flex;

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
  }
}
</style>
