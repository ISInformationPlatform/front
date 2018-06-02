<template>
    <form>
        <div class="outside">
            <div class="SUp">
                <span>用户名</span><br>
                <input type="text" value placeholder="请输入用户名"><br><br>
                <span>请输入密码</span><br>
                <input type="text" value placeholder="请输入不少于6位数的密码"><br><br>
                <span>再次输入密码</span><br>
                <input type="text" value placeholder="再次输入密码"><br><br>
                <span>请输入邮箱地址</span><br>
                <input type="text" value placeholder="请输入有效的邮箱地址"><br><br>
                <input type="button" value="注册">
            </div>
        </div>
    </form>
</template>
<script>
export default {
  name: 'TheSignUp'
}
</script>
<style>
.outside{
        margin:120px auto 100px;
        width: 500px;
        height:500px;
        box-shadow: 1px 1px 2px 2px gray;
        position: relative;
}
.SUp{
    width: 175px;
    height:350px;
    margin: 75px 162.5px;
    position: absolute;
    text-align: center;
    font-size:1.3em;
    color: #1990ff;
    font-weight: bold;
}
.SUp input[type="button"]{
    width:60px;
    height:40px;
    color:white;
    font-weight: bold;
    background-color: #3f89ec;
    border: none;
    box-shadow: 0.1px 0.1px 0.1px 0.1px black;
    cursor: pointer;
}
.SUp input[type="button"]:hover{
    background: #1990ff;
}

</style>
