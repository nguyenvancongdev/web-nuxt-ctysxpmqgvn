<template>
    <div>danh sach anh</div>
</template>
<script>
export default {
  name: 'IndexPage',
  layout: 'admin',
  data() {
      return {
        test: ''
      };
  },
  methods: {
    hanh(){
        console.log('day la mixin')
    },
  },
}
</script>