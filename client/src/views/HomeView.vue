<template>
  <div class="home">
    <Calculate />
  </div>
</template>

<script lang="ts">
import { Options, Vue } from 'vue-class-component';
import Calculate from '@/components/Calculate.vue';

@Options({
  components: {
    Calculate,
  },
})
export default class HomeView extends Vue {}
</script>
