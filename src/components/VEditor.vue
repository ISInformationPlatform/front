<template>
    <div>
        <div ref="editor" style="text-align:left"></div>
        <button @click="getContent">查看内容</button>
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
    var editor = new E(this.$refs.editor)
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
div{
    margin: 20px 0;
}

</style>
