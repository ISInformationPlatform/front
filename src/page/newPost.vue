<template>
  <main>
    <VEditor class="editor"/>
  </main>
</template>

<script>
import VEditor from '@/components/VEditor'

export default {
  components: {
    'VEditor': VEditor
  }
}
</script>

<style lang="less">
.editor{
  width: 100%;
}
</style>
