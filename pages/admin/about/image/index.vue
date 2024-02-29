<template>
    <div>danh sach anh

      <v-file-input label="File input"></v-file-input>

    </div>
</template>
<script>
// import {VFileInput} from 'vuetify-nuxt-module'
export default {
  name: 'IndexPage',
  layout: 'admin',
  data() {
      return {
        test: ''
      };
  },
  // components: {
  //   VFileInput
  // },
  methods: {
    hanh(){
        console.log('day la mixin')
    },
  },
}
</script>