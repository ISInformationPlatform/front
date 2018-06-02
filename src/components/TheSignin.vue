<template>
    <form>
        <div class="outside">
            <div class="sig">
            <br><br>
            <span>用户名</span><br>
            <input type="text" value placeholder="请输入用户名"><br><br>
            <span>密码</span><br>
            <input type="text" value placeholder="请输入密码"><br><br>
            <input class="login" type="button" value="登陆" >
            <input class="forget" type="button" value="忘记密码" >
            </div>
        </div>
    </form>
</template>
<script>
export default {
  name: 'Signin'
}
</script>
<style lang="less" scoped>
.outside{
    margin: 150px auto 200px;
    width:500px;
    height:300px;
    box-shadow: 1px 1px 2px 2px gray;
}
.sig{
    font-size: 1.3em;
    text-align: center;
    font-weight: bold;
    color:#1990ff;
}
.sig .login{
    width: 50px;
    height:27px;
}
.sig .forget{
    width:73px;
    height:27px;
    margin-left: 30px;
}
.sig input[type="button"]{
    color:white;
    font-weight: bold;
    background-color: #3f89ec;
    border: none;
    box-shadow: 0.1px 0.1px 0.1px 0.1px black;
    cursor: pointer;
}
.sig input[type="button"]:hover{
    background: #1990ff;
}
</style>
