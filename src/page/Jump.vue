<template>
  <main>
    <div class="pic" >
      <img :src='path'>
    </div>

    <button>{{jump_message}}</button>
  </main>
</template>

<script>
import { mapState } from 'vuex';

export const JUMP_WAITING = 0;
export const JUMP_SUCCESS = 1;
export const JUMP_FAIL = 2;

export default {
  name: 'Jump',
  computed: {
    ...mapState([
      'jump_status', 'jump_message'
    ]),
    'path': function () {
      var path = '';

      switch (this.jump_status) {
        case 0:
          path = '/static/jump_waiting.png';
          break;
        case 1:
          path = '/static/jump_success.png';
          break;
        case 2:
          path = '/static/jump_fail.png';
          break;
        default:
          throw new Error('invalid jump_status');
      }

      return path;
    }
  }
};
</script>

<style less="lang" scoped>
main{
  text-align: center;
}

.pic{
   display: flex;
   justify-content: space-around;
   margin-top: 10%;
   margin-bottom: 2%;
 }

button{
  border: none;
  background-color: white;
  margin-bottom:9.5%;
  font-size: 2em;
}
</style>
