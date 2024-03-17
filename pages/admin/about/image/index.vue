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
    <v-btn @click="consoUrl">geturl</v-btn>
    <v-btn @click="pageTokenExample">get list </v-btn>

    
    </div>
</template>
<script>
// import {VFileInput} from 'vuetify-nuxt-module'
import { ref, uploadBytes,getDownloadURL,deleteObject, list } from "firebase/storage";
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
    
    async update(){
    if (this.chosenFile){
      const imageref = ref(storage,`eme/${this.chosenFile.name}`);
      uploadBytes(imageref, this.chosenFile).then((snapshot)=>{
        console.log('snaop', snapshot)
      })     
 
    }
    },
    consoUrl(){
      const imageref = ref(storage,`eme/favicon.png`);
      getDownloadURL(imageref).then(res => {
        console.log('res', res)
      })
    },
    delete(){
      const desertRef = ref(storage, 'images/desert.jpg');
      deleteObject(desertRef).then(() => {
  
        }).catch((error) => {
 
        });
    },
    
    async pageTokenExample(){
      try {
      const listRef = ref(storage, 'eme')
      const firstPage = await list(listRef, { maxResults: 100 });
      console.log('ffff')
        console.log('firstPage', firstPage)
      } catch ( err ) {console.log(err)}
    },
  }  
}
</script>