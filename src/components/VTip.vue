<template>
   <img v-show="isShow" :src="path">
</template>

<script>
const fail = '/static/false.png';
const success = '/static/right.png';

const stateMap = {
  // no value
  0: function () {
    this.isShow = false;
  },
  // validation fail
  1: function () {
    this.path = fail;
    this.isShow = true;
  },
  // validation success
  2: function () {
    this.path = success;
    this.isShow = true;
  }
};

export default {
  data () {
    return {
      path: fail,
      isShow: false
    };
  },
  props: ['state', 'fail', 'success'],
  watch: {
    'state': function () {
      let state = this.state;

      if (!stateMap[state]) {
        throw new Error('invalid tip state');
      }

      stateMap[state].call(this);
    }
  },
  NULL: 0,
  INVALID: 1,
  VALID: 2
};
</script>

<style lang="less" scoped>
</style>
