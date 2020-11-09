<template>
  <div class="sidebarContainer">
    <div class="title">
      <a href="/"> AlgoWiz </a>
      <button class="dBtn" @click="goToUpload">Upload</button>
    </div>
    <div class="menu">
      <SidebarElements />
    </div>
  </div>
</template>

<script>
import SidebarElements from "./SidebarElements.vue";

export default {
  name: "Sidebar",
  components: {
    SidebarElements
  },
  methods: {
    goToUpload() {
      this.$router.push("/upload");
    }
  }
};
</script>

<style lang="scss" scoped>
.sidebarContainer {
  width: 20%;
  background-color: #1e1f1c;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  .title {
    width: 100%;
    margin: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    a {
      margin-bottom: 2rem;
      color: #e6db74;
      text-decoration: none;
      font-weight: 500;
      font-size: 45px;
    }
  }
  .menu {
    margin-top: 3rem;
    width: 100%;
  }
}
</style>
