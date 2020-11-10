<template>
  <div class="container">
    <h1>
      <span style="color:#F8F8F2">console.</span>
      <span style="color: #A6E22E">log</span>
      <span style="color:#66D9EF">(</span>
      <span style="color:#E6DB74">"{{ selected }}"</span>
      <span style="color:#66D9EF">)</span>
      <span style="color:#F8F8F2">;</span>
    </h1>
    <p id="welcomeMessage">
      Welcome to
      <span style="color:#FD971F">Algo Wiz</span>, select any
      <span style="color:#AE81FF">Algorithm</span>
      from
      <span style="color:#A6E22E">Sidebar</span>
      to start
    </p>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      keywords: [
        "Hello World", //English
        "हेलो वर्ल्ड", //Hindi
        "ਹੈਲੋ ਵਰਲਡ", //Punjabi
        "હેલો વર્લ્ડ", //Gujrati
        "ஹலோ வேர்ல்ட்", //Tamil
        "హలో వరల్డ్", //Telgu
        "හෙල්ලෝ වොර්ල්ඩ්",
        "ಹಲೋ ವರ್ಲ್ಡ್", //Kannada
        "ഹലോ വേൾഡ്", //Malyalam
      ],
      selected: ""
    };
  },
  async mounted() {
    for (var i = 0; i < 8; i++) {
      var selected = this.keywords[i];
      for (let c of selected) {
        this.selected = this.selected + c;
        await new Promise(r => setTimeout(r, 150));
      }
      await new Promise(r => setTimeout(r, 3000));
      this.selected = "";
      if (i == 5) {
        i = 0;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  h1 {
    font-size: 2.7rem;
    margin: 18% 0rem 0rem 0rem;
  }
  #welcomeMessage {
    position: absolute;
    top: 50%;
    color: #f8f8f2;
    font-size: 1.7rem;
  }
}
</style>
