<template>
  <div class="container">
    <Algorithm :algoName="name" />
  </div>
</template>

<script>
import Algorithm from "@/components/Algorithm";
export default {
  name: "AlgoContainer",
  components: {
    Algorithm
  },
  props: {
    name: {
      type: String
    }
  }
};
</script>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
