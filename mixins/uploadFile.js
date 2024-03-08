import { getStorage, ref, uploadBytes } from "@firebase/storage";
import { initializeApp } from "firebase/app";
import {firebase} from '@/fb';
const storage = getStorage();
const storageRef = ref(storage, 'some-child');
 
// 'file' comes from the Blob or File API


export default {
    data() {
      return {
        // Your mixin data properties here
      };
    },
    methods: {
        updateFile(file){
            uploadBytes(storageRef, file).then((snapshot) => {
                console.log('Uploaded a blob or file!');
              }).catch(err => console.log('xin chao mn'));
        },
    },
    // Other options like computed properties, lifecycle hooks, etc.
  };