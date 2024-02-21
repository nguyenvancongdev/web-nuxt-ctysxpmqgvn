<template>
  <button @click="hanh" type="primary">hello</button>
</template>

<script>
import myMixin from '~/mixins/myMixin.js';
export default {
  mixins: [myMixin],
  name: 'IndexPage'
}
</script>
