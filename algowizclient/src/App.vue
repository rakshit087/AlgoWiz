<template>
  <div class="container">
    <Sidebar />
    <div class="mainContainer">
      <router-view />
    </div>
  </div>
</template>

<script>
import Sidebar from "@/components/Sidebar";
import AlgoService from "@/services/AlgoService";
export default {
  components: {
    Sidebar
  },
  async mounted() {
    var algoInfo = await AlgoService.getAlgoInfo();
    algoInfo = algoInfo.data;
    console.log(algoInfo);
    this.$store.dispatch("saveAlgorithmInfo", algoInfo);
  }
};
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

#app {
  height: 100vh;
  width: 100vw;
}

.container {
  display: flex;
  height: 100%;
  width: 100%;
  background-color: #272822;
}

.dBtn {
  width: 50%;
  height: 2rem;
  border: none;
  border-radius: 24px;
  outline: none;
  background-color: #f92672;
  color: #f8f8f2;
  background-position: center;
  transition: background 0.8s;
}
.dBtn:hover {
  background: #f92672 radial-gradient(circle, transparent 1%, #f92672 1%)
    center/15000%;
}
.dBtn:active {
  background-color: #f92673e3;
  background-size: 100%;
  transition: background 0s;
}
.mainContainer {
  height: 100vh;
  width: 80%;
}
.dText {
  color: #f8f8f2;
  font-size: 1.2rem;
  font-family: "Courier New", Courier, monospace;
  margin: 5rem;
}

.dInput {
  width: 50%;
  height: 2rem;
  border: 2.5px solid #e6db74;
  border-radius: 24px;
  outline: none;
  background: none;
  text-align: center;
  color: #f92673e3;
}

.dInput::placeholder {
  color: #bbb36ec2;
}

input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.red {
  color: #f92672;
}

.yellow {
  color: #e6db74;
}

.green {
  color: #a6e22e;
}

.purple {
  color: #ae81ff;
}

.blue {
  color: #66d9ef;
}
</style>
