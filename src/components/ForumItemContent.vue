<template>
  <p>
    {{contentCut}}
  </p>
</template>

<script>
export default {
  name: 'ForumItemContent',
  props: ['content', 'isToggle'],
  computed: {
    contentCut: function () {
      if (this.content.length > 99 && this.isToggle) {
        return `${this.content.substring(0, 99)} ......`
      } else {
        return this.content
      }
    }
  }
}
</script>
