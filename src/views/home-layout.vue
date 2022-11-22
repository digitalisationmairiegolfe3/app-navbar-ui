<template>
  <div class="home">
    <app-navbar />
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import appNavbar from '../components/app-navbar/app-navbar.vue';
// import { Vue } from 'vue-property-decorator';

export default Vue.extend({
  name: 'homeLayout',
  components: {
    appNavbar
  },
});
</script>
