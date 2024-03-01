<template>
    <div>danh sach anh

      <v-file-input
      accept="image/png, image/jpeg, image/bmp"
      label="tai anh len"
      v-model="chosenFile"
      show-size
      >
    </v-file-input>

    </div>
</template>
<script>
// import {VFileInput} from 'vuetify-nuxt-module'
import uploadFile from '@/mixins/uploadFile'
export default {
  name: 'IndexPage',
  layout: 'admin',
  mixins: [uploadFile],
  data() {
      return {
        test: '',
        chosenFile: null,
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