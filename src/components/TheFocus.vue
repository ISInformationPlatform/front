<template>
  <div class="focus">
    <div class="title">
      <h6>重要通知</h6>
    </div>
    <div class="list">
      <ul>
        <li v-for="(item,index) in list"
        :key="index"
        v-show="item.tag">
          <VButton
          :title="item.title"
          :data="item.url"/>
            <footer>
              {{item.date}}
            </footer>
        </li>
      </ul>
      <div class="grayr">
        <span>&lt;</span>
        <button  v-for="(item,index) in list"
          :key="index"
          @click="toggleFocus(index)">{{index + 1}}
        </button>
        <span>&gt;</span>
      </div>
    </div>
  </div>
</template>

<script>
import VButton from '@/components/VButton';
export default {
  name: 'TheFocus',
  components: {
    'VButton': VButton
  },
  methods: {
    toggleFocus: function (index) {
      for (var i = 0; i < 3; i++) {
        this.list[i].tag = false;
      }
      this.list[index].tag = true;
    }
  },
  data () {
    return {
      list: [{
        title: '重要通知啊啊啊',
        url: '/forum/1',
        date: '2018.7.10',
        tag: true
      },
      {
        title: '就是很重要',
        url: '/forum/2',
        date: '2018.04.11',
        tag: false
      },
      {
        title: '读很重要的通知',
        url: '/forum/3',
        date: '2017.02.02',
        tag: false
      }]
    };
  }
};
</script>

<style lang="less" scoped>
.focus{
  display: flex;
}
.list{
  width: 100%;
  position: relative;
}
.focus{
  border:2px solid #eeeeee;
}
h6{
  text-align: center;
}
ul {
  padding: 10px 10px;
  list-style: none;
  width: 85%;
}

li {
  margin: 10px 0;
}

button {
  font-size: 1.25em;
}
.title{
  width: 40px;
  font-size: 35px;
  word-wrap: break-word;
  background-color: rgb(235, 235, 235);
}
.grayr {
  position: absolute;
  width: 100%;
  bottom: 0px;
  text-align: center;
  PADDING-RIGHT: 2px;
  PADDING-LEFT: 2px;
  FONT-SIZE: 11px;
  PADDING-BOTTOM: 2px;
  PADDING-TOP: 2px;
  FONT-FAMILY: Tahoma, Arial,Helvetica, Sans-serif;
  BACKGROUND-COLOR: #c1c1c1
}
.grayr button {
  PADDING-RIGHT: 5px;
  PADDING-LEFT: 5px;
  PADDING-BOTTOM: 2px;
  MARGIN: 2px;
  COLOR: #000;
  PADDING-TOP: 2px;
  BACKGROUND-COLOR: #c1c1c1;
  TEXT-DECORATION: none;
  border:none;
  cursor: pointer;
}
.grayr > button:hover {
  COLOR: #000;
  BACKGROUND-COLOR: white;
}

footer{
  text-align: right;
}
</style>
