<template>
  <div>
    <ul class="container">
      <li :key="index" v-for="(item,index) in list">
        <icon :icon="icon"
          :username="item.comment_nickname"
          @click="click_icon" />

        <div>{{item.comment_content}}</div>
      </li>
    </ul>

    <VEditor @input="updateHtml" :type="'simple'" class="editor">
      <div class="btn_cnt" slot="after">
        <VButton
          @click="submit"
          :title="'发布'"/>
      </div>
   </VEditor>
  </div>
</template>

<script>
import { getComment, submitComment } from '@/service/API';

import VButton from '@/components/VButton';
import VEditor from '@/components/VEditor';
import VPin from '@/components/VPin';
import { mapActions } from 'vuex';

export default {
  name: 'TheComment',
  props: ['forumId', 'postId'],
  data () {
    return {
      icon: '/static/icon.jpg',
      list: [],
      content: ''
    };
  },
  components: {
    'icon': VPin,
    'VEditor': VEditor,
    'VButton': VButton,
    'comment': ''
  },
  watch: {
    forumId: 'update',
    postId: 'update'
  },
  methods: {
    ...mapActions([
      'jump'
    ]),
    update () {
      let obj = this;

      if (!this.forumId || !this.postId) { return; }

      getComment(this.forumId, this.postId)
        .then(data => {
          obj.list = data;
        });
    },
    updateHtml (payload) {
      this.comment = payload.html;
    },
    submit () {
      let promise = submitComment(this.forumId, this.postId, this.comment, this.postId);

      this.jump({
        message: '发布成功',
        obj: this,
        promise: promise
      });
    },
    click_icon (payload) {
      let personId = 1;
      this.$router.push(`/person/${personId}`);
    }
  },
  mounted () { this.update(); }
};
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

  icon {
    margin-top: 10px;
  }

  div {
    padding: 10px 0;
  }
}
.editor {
  width: 60%;
  margin: 20px 20%;
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
