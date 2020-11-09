<template>
  <component :is="comp"></component>
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: "Algorithm",
  props: {
    algoName: {
      type: String,
      required: true
    }
  },
  computed: {
    comp() {
      return defineAsyncComponent(() =>
        import(`@/Algorithms/${this.algoName}.vue`)
      );
    }
  }
};
</script>

<style scoped></style>
