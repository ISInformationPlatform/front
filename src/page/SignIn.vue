<template>
  <main class="container">
    <form>
      <section>
        <h3>用户名</h3>
        <div>
          <input type="text" v-model="username" placeholder="请输入用户名">
        </div>
      </section>

      <section>
        <h3>密码</h3>
        <div>
          <input :type="'password'" v-model="password" placeholder="请输入密码">
        </div>
      </section>

      <footer>
        <button class="login" @click="click_signIn">登陆</button>
        <button class="forget">忘记密码</button>
      </footer>
    </form>
  </main>
</template>
<script>
import { signIn } from '@/service/getData';
import { mapActions } from 'vuex';

export default {
  name: 'SignIn',
  data () {
    return {
      username: '',
      password: ''
    };
  },
  methods: {
    ...mapActions([
      'logIn', 'jump'
    ]),
    click_signIn () {
      let username = this.username;
      let password = this.password;

      let promise = signIn(username, password).then((result) => {
        this.logIn({ id: result.id, username: result.username });
      });

      this.jump({
        message: '登录成功',
        obj: this,
        promise
      });
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
    margin: 0 20px;

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
