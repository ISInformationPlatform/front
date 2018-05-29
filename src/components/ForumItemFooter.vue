<template>
    <footer>
        <button @click="click">
            {{tag}}
        </button>
        <ul>
            <li>
              <img :src="viewlogo">
                <span>{{view}}</span>
            </li>
        </ul>
    </footer>
</template>

<script>
export default {
  name: 'ForumItemFooter',
  props: ['tag', 'viewlogo', 'view'],
  methods: {
    click (event) {
      this.$emit('click', { title: this.tag })
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
