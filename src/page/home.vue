<template>
    <main>
        <ul>
            <li 
            :key="index"
            v-for="(item,index) in List">
                <div class="out"
                @click="clickpush(index)">
                    <div class="pic"><img :src="item.pic"></div>
                    <div class="name">{{item.name}}</div>
                </div>
            </li>
        </ul>
    </main>
</template>

<script>
export default {
    data () {
        return {
            List: [
                {
                    pic:'/static/dy.png',
                    name: '工 作'
                },
                {
                    pic: '/static/ei.png',
                    name: '出 国'
                },
                {
                    pic: '/static/pt.png',
                    name: '读 研'
                }
            ]
        }
    },
    methods: {
        clickpush (index) {
            this.$router.push(`/forum/${index + 1}`)
        }
    }
}
</script>
<style lang="less" scoped>
ul{
    margin-top:40px;
    margin-bottom:40px;
    padding: 0;
    display: flex;
    justify-content: space-between;
    list-style-type: none;
}
ul li{
    height:500px;
    width:350px;
    float: left;
    border-radius: 20px;
}
.pic{
    width:350px;
    height:400px;
    padding-left:50px;
    padding-top:25px;
}
img{
    width:250px;
    height:300px;
}
.name{
    text-align: center;
    font-size: 3em;
    color: #1990ff;
}
.out{
    box-shadow: 2px 2px 4px 4px gray;
}

</style>

