<template>
    <form>
        <div class="outside">
            <div class="SUp">
                <span>用户名</span><br>
                <input type="text" v-model="NewUser.Name" value placeholder="请输入用户名">
                <img v-show="!validation.name" :src="fail">
                <img v-show="validation.name" :src="success"><br>
                <span>请输入密码</span><br>
                <input :type="disP.pwdType" v-model="NewUser.Password" value placeholder="请输入不少于6位数的密码">
                <img :src="eyesShow" @click="pwdDisplay" class="eyesShow">
                <img v-show="!validation.password" :src="fail">
                <img v-show="validation.password" :src="success"><br>
                <span>再次输入密码</span><br>
                <input :type="disP.isPwdType" v-model="NewUser.IsPassword" value placeholder="再次输入密码">
                <img :src="eyesShow" @click="pwdDisplay" class="eyesShow">
                <img v-show="!validation.ispassword" :src="fail">
                <img v-show="validation.ispassword" :src="success"><br>
                <span>请输入邮箱地址</span><br>
                <input type="text" v-model="NewUser.Email" value placeholder="请输入有效的邮箱地址">
                <img v-show="!validation.email" :src="fail">
                <img v-show="validation.email" :src="success"><br>
                <input type="button" value="注册">
            </div>
        </div>
    </form>
</template>
<script>
var emailRE = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/
export default {
  name: 'TheSignUp',
  data () {
    return {
      NewUser: {
        Name: '',
        Password: '',
        IsPassword: '',
        Email: ''
      },
      disP: {
        pwdType: 'password',
        isPwdType: 'password'
      },
      fail: '/static/false.png',
      success: '/static/right.png',
      eyesShow: '/static/viewLogo.png'
    }
  },
  methods: {
    pwdDisplay () {
      this.disP.pwdType = this.disP.pwdType === 'password' ? 'text' : 'password'
      this.disP.IsPwdtye = this.disP.IsPwdtye === 'password' ? 'text' : 'password'
    }
  },
  computed: {
    validation: function () {
      return {
        name: !!this.NewUser.Name.trim(),
        password: this.NewUser.Password.length > 5 ? 1 : 0,
        ispassword: this.NewUser.Password === this.NewUser.IsPassword && this.NewUser.IsPassword !== '' ? 1 : 0,
        email: emailRE.test(this.NewUser.Email)
      }
    }
  }
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
    width: 220px;
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
img{
  width:20px;
  height:20px;
}
.eyesShow{
  cursor: pointer;
}

</style>
