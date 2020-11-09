<template>
  <div>
    <div v-for="(names, category) in algoInfo" :key="category">
      <Expandable :Name="category" :Values="names" />
    </div>
  </div>
</template>

<script>
import Expandable from "@/components/Expandable";
export default {
  name: "SidebarElements",
  components: {
    Expandable
  },
  data() {
    return {
      algoInfo: this.$store.state.algos
    };
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
}
</style>
