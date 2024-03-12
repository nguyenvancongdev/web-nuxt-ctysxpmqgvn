<template>
    <div>danh sach anh

      <v-file-input
      accept="image/png, image/jpeg, image/bmp"
      label="tai anh len"
      v-model="chosenFile"
      show-size
      >
    </v-file-input>
    <v-btn @click="update">update</v-btn>
    </div>
</template>
<script>
// import {VFileInput} from 'vuetify-nuxt-module'
import { ref, uploadBytes } from "firebase/storage";
import { storage } from "@/fb"
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
    
  update(){
    console.log('rrrrr', this.chosenFile)
    const storageRef = ref(storage, 'some-child');
    uploadBytes(storageRef, this.chosenFile).then((snapshot) => {
      console.log('update right !!', snapshot)
    });
  }
  },
}
</script>