<template>
    <footer>
        <div class="top">
            <div>{{top}}</div>
            <ul>
                <li v-for="(item,index) in links"
                    :key="index">
                    <a :href="item.url">
                        {{item.title}}
                    </a>
                </li>
            </ul>
        </div>

        <div class="bottom">{{bottom}}</div>
    </footer>
</template>

<script>
export default {
  name: 'TheFooter',
  data () {
    return {
      top: 'Copyright © 2001-2018 ',
      bottom: '京ICP备09032638号-13 京公安备11010800222153号 侵权举报 违法和不良信息举报：emuchnet@foxmail.com',
      links: [{
        title: '小木虫',
        url: 'http://www.baidu.com'
      },
      {
        title: '哇哈哈',
        url: 'http://www.baidu.com'
      }
      ]
    }
  }
}
</script>

<style lang="less" scoped>
footer {
  font-size: 100%;
  text-align: center;
  background-color: #1a1a1a;
  margin: 0;
  padding: 10px 0;
  .top {
    color: #8b8b8b;
    display: flex;
    justify-content: center;
    div {
      margin-right: 20px;
      justify-content: center;
    }
    ul {
      margin: 0;
      display: inline;
      justify-content: center;
      li {
        float: left;
        list-style: none;
        margin-right: 20px;
        a{
          text-decoration: none;
          color: #8b8b8b;
        }
      }
    }
  }
  .bottom {
    color: #8b8b8b;
    margin-top: 20px;
  }
}
</style>
