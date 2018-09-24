<template>
  <main class="container">
    <form>
      <section>
        <h3>用户名</h3>
        <div>
          <input type="text" v-model="username" placeholder="请输入用户名">
          <VTip :state="state_username"/>
        </div>
      </section>

      <section>
        <h3>密码</h3>
        <div>
          <input :type="'password'" v-model="password" placeholder="请输入不少于6位数的密码">
          <VTip :state="state_password"/>
        </div>

        <div>
          <input :type="'password'" v-model="dup_password" placeholder="再次输入密码">
          <VTip :state="state_dup_password"/>
        </div>
     </section>

      <section>
        <h3>邮箱地址</h3>
        <div>
          <input type="text" v-model="email" placeholder="请输入有效的邮箱地址">
          <VTip :state="state_email"/>
        </div>
      </section>

      <footer>
        <button @click="signUp">注册</button>
      </footer>
    </form>
  </main>
</template>
<script>
import { signUp } from '@/service/getData';

import VTip, { TIP_NULL, TIP_INVALID, TIP_VALID } from '@/components/VTip';
import { mapActions } from 'vuex';

var emailReg = /^([a-zA-Z0-9_.-])+@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;

export default {
  name: 'TheSignUp',
  data () {
    return {
      username: '',
      password: '',
      dup_password: '',
      email: ''
    };
  },
  components: {
    'VTip': VTip
  },
  methods: {
    ...mapActions([
      'jump'
    ]),
    signUp () {
      let username = this.username;
      let password = this.password;

      let promise = signUp(username, password);

      this.jump({
        message: '发布成功',
        obj: this,
        promise
      });
    }
  },
  computed: {
    state_username: function () {
      if (!this.username) {
        return TIP_NULL;
      } else if (this.username.length <= 5) {
        return TIP_INVALID;
      } else {
        return TIP_VALID;
      }
    },
    state_password: function () {
      if (!this.password) {
        return TIP_NULL;
      } else if (this.password.length <= 5) {
        return TIP_INVALID;
      } else {
        return TIP_VALID;
      }
    },
    state_dup_password: function () {
      if (!this.dup_password) {
        return TIP_NULL;
      }

      if (this.password !== this.dup_password) {
        return TIP_INVALID;
      } else {
        return TIP_VALID;
      }
    },
    state_email: function () {
      if (!this.email) {
        return TIP_NULL;
      }

      if (!emailReg.test(this.email)) {
        return TIP_INVALID;
      } else {
        return TIP_VALID;
      }
    }
  }
};
</script>
<style lang="less" scoped>
.container {
  padding: 50px 100px;
}

form {
  padding: 50px;
  box-shadow: 1px 1px 2px 2px gray;

  text-align: center;
  color: #1990ff;
  font-weight: bold;

  div {
    position: relative;
    display: inline-block;
    height: 40px;
    margin: 0 25%;

    img {
      position: absolute;
      top: 10px;
      right: 10px;

      width: 20px;
      height: 20px;
    }

    input {
      border: none;
      text-decoration: none;
      outline: none;

      border-bottom: 1px solid #cccccc;

      padding: 10px 40px 10px 10px;
      font-size: 1em;
    }
  }

  h3 {
    font-size: 1.5em;
    margin: 40px 0 20px 0;
  }

  footer {
    margin-top: 40px;
  }

  button {
    padding: 10px 20px;

    color: white;
    font-weight: bold;
    box-shadow: 0.1px 0.1px 0.1px 0.1px black;
    border-radius: 4px;

    background-color: #3f89ec;
    border: none;
    cursor: pointer;
    outline: 0;

    &:hover {
      background: #1990ff;
    }
  }
}
</style>
