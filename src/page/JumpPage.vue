<template>
  <main>
    <component :is="currentCom"></component>
    <button @click="TurnToHome">data</button>
  </main>
</template>

<script>

import JumpPageWaiting from '@/components/JumpPageWaiting';
import JumpPageFalse from '@/components/JumpPageFalse';
import JumpPageSuccess from '@/components/JumpPageSuccess';

export default{
  name: 'JumpPage',
  components: {
    'JumpPageWaiting': JumpPageWaiting,
    'JumpPageFalse': JumpPageFalse,
    'JumpPageSuccess': JumpPageSuccess
  },
  methods: {
    TurnToHome () {
      this.$router.push(`/forum/1/`);
    }
  },
  computed: {
    currentCom: function () {
      return 'JumpPage' + 'Waiting';
    }
  }
};
</script>
<style less="lang" scoped>
main{
  text-align: center;
}
  button{
    border: none;
    background-color: white;
    margin-bottom:9.5%;
    font-size: 2em;
  }
</style>
