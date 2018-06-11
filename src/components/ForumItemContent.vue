<template>
  <p>
    {{contentCut}}
  </p>
</template>

<script>
export default {
  name: 'ForumItemContent',
  props: ['content', 'toggleValue'],
  computed: {
    contentCut: function () {
      if (this.content.length > 99 && this.toggleValue === '展开') {
        return this.content.substring(0, 99) + '......'
      } else {
        return this.content
      }
    }
  }
}
</script>S
