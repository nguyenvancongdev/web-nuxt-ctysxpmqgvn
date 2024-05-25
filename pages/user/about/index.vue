
<template>
    <div @click="xinchao()">demo</div>
</template>
<script>
import {subject} from '@/rx/sevice'
export default {
  name: 'IndexPage',
  layout: 'user',
  data() {
      return {
        test: ''
      };
  },
  methods: {
    hanh(){
        console.log('day la mixin')
    },
    xinchao(){
      subject.next('rrr')
    }
  },
  created() {
    subject.subscribe((data) => {
      console.log('Subscriber A:', data);
    });
  }
}
</script>