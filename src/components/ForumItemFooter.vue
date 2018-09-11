<template>
  <footer>
    <div>
      <img :src="viewlogo">
      <span>{{visited}}</span>
    </div>

    <ul>
      <li v-for="(item, index) in display_tag" :key="index">
        <button @click="clickTag">
          {{item}}
        </button>
      </li>
    </ul>
  </footer>
</template>

<script>
export default {
  name: 'ForumItemFooter',
  props: ['tag_filter', 'viewlogo', 'visited', 'tag_list'],
  methods: {
    clickTag (event) {
      // this.$emit('click_tag', { title: this.tag });
    }
  },
  computed: {
    display_tag: function () {
      var tagMap = new Map();
      var tagFilter = this.tag_filter;
      var arr = [];

      this.tag_list.forEach(i => {
        i.forEach(j => {
          tagMap.set(parseInt(j.id), j.title);
        });
      });

      for (let i = 1; tagFilter > 0; i++) {
        if (tagFilter & 1) {
          arr.push(tagMap.get(i));
        }

        tagFilter = tagFilter >> 1;
      }

      return arr;
    }
  }
};
</script>

<style lang="less" scoped>
footer {
  display: flex;
 }

div {
  display: inherit;
  align-items: center;
  img {
    height: 20px;
  }
  span {
    display: inline-block;
    font-size: 12px;
    color: #cccccc;
    height: 20px;
    vertical-align: middle;
    line-height: 20px;
  }
}

ul {
  display: inherit;
  margin: 0 0 0 10px;
  padding: 0;

  li {
    list-style: none;
    margin: 0 0 0 5px;

    button {
      font-size: 12px;
      padding: 3px 3px;
      border-radius: 5px;
      border: 1px solid #aaaaaa;

      cursor: pointer;
      color: #aaaaaa;
      background-color: white;
    }
  }
}
</style>
