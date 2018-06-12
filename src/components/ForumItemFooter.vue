<template>
    <footer>
        <button @click="clickTag">
            {{tag}}
        </button>
        <ul>
            <li>
              <img :src="viewlogo">
                <span>{{view}}</span>
            </li>
        </ul>
        <button class="toggleContent"
          v-show="this.content.length > 99"
          @click="toggleContent" >
            {{btn}}
          </button>
    </footer>
</template>

<script>
export default {
  name: 'ForumItemFooter',
  props: ['tag', 'viewlogo', 'view', 'content', 'isToggle'],
  methods: {
    clickTag (event) {
      this.$emit('click-tag', { title: this.tag })
    },
    toggleContent () {
      this.$emit('click-toggle')
    }
  },
  computed: {
    btn: function () {
      if (this.isToggle) {
        return '展开'
      } else {
        return '隐藏'
      }
    }
  }
}
</script>

<style lang="less" scoped>
footer {
  height: 26px;
  button {
    float: left;
    cursor: pointer;
    padding: 3px 5px;
    color: #aaaaaa;
    background-color: white;
    border: 1px solid #aaaaaa;
    border-radius: 5px;
  }
  .toggleContent{
    float: right;
  }
  ul {
    li {
      list-style: none;
      margin-left: 5px;
      img {
        float: left;
        height: 24px;
      }
      span {
        height: 24px;
        line-height: 24px;
        float: left;
        color: #aaaaaa;
        font-size: 0.75em;
      }
    }
  }
}
</style>
