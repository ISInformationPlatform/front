<template>
    <div class="container">
      <slot name="before"/>
      <div class="top" ref="toolbar"/>
      <div class="down" ref="editor"/>
      <slot name="after"/>
    </div>
</template>

<script>
import E from 'wangeditor'

export default {
  name: 'editor',
  data () {
    return {
      editorContent: ''
    }
  },
  methods: {
    getContent: function () {
      alert(this.editorContent)
    }
  },
  mounted () {
    var editor = new E(this.$refs.toolbar, this.$refs.editor)

    editor.customConfig.onchange = html => { this.editorContent = html }

    editor.customConfig.uploadImgShowBase64 = true
    editor.customConfig.menus = [
      'head',
      'bold',
      'italic',
      'underline',
      'link',
      'list',
      'justify',
      'quote',
      'image',
      'table',
      'code'
    ]
    editor.create()
  }
}
</script>

<style lang="less" scoped>
.top{
  width: 100%;
  margin-top: 20px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
}

.down{
  width: 100%;
  margin-bottom: 20px;
  min-height: 400px;
}
</style>
