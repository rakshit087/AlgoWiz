<template>
  <div class="container">
    <div id="canvas"></div>
    <p class="dText" v-if="!this.started">
      BogoSort also known as <span class="purple">permutation sort</span>,
      stupid sort, slow sort, shotgun sort or monkey sort is a particularly
      <span class="yellow">ineffective</span> algorithm based on generate and
      test paradigm. The algorithm successively
      <span class="purple">generates permutations</span> of its input until it
      finds one that is sorted.<br />
      <br />
    </p>
    <div class="inputContainer">
      <input
        v-if="!this.started"
        class="dInput"
        type="text"
        placeholder="Array Size"
        v-model="arraySize"
      />
      <input
        v-if="!this.started"
        class="dInput"
        type="text"
        placeholder="Frame Rate"
        v-model="frameRate"
      />
    </div>
    <button class="dBtn" @click="start()" v-if="!this.started">
      Start
    </button>
  </div>
</template>

<script>
import P5 from "p5";

export default {
  name: "Default",
  data() {
    return {
      started: false,
      frameRate: 1,
      arraySize: 5
    };
  },
  methods: {
    start: async function() {
      let frameRate = this.frameRate;
      let arraySize = this.arraySize;
      console.log(frameRate);
      let values = new Array(parseInt(arraySize, 10));
      function sketch(s) {
        let maxBarLength;
        let barWidth;
        let w = (70 * s.windowWidth) / 100;
        let h = (90 * s.windowHeight) / 100;
        maxBarLength = h - 50;
        barWidth = w / values.length;
        for (let i = 0; i < parseInt(arraySize, 10); i++) {
          values[i] = Math.floor(Math.random() * Math.floor(maxBarLength));
        }
        let attempts = 0;
        let isSortedBool = false;
        function shuffle(arr) {
          for (let i = arr.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [arr[i], arr[j]] = [arr[j], arr[i]];
          }
          return arr;
        }
        
        function displayBars() {
          for (let k = 0; k < values.length; k++) {
            if (!isSortedBool) s.fill("#E6DB74");
            else s.fill("#a6e22e");
            s.rect(k * barWidth, h - values[k], barWidth, values[k]);
          }
          s.textSize(20);
          s.fill("white");
          s.text("Attempts: " + attempts, 20, 20);
        }
        function isSorted() {
          for (let i = 1; i < values.length; i++) {
            if (values[i - 1] > values[i]) {
              return false;
            }
          }
          return true;
        }
        s.setup = function() {
          s.createCanvas(w, h);
        };
        s.draw = function() {
          s.background("#1e1f1c");
          s.noStroke();
          s.frameRate(parseInt(frameRate, 10));
          values = shuffle(values);
          attempts++;
          if (isSorted()) {
            isSortedBool = true;
            s.noLoop();
          }
          displayBars();
        };
      }
      await new P5(sketch, "canvas");
      this.started = true;
    }
  }
};
</script>

<style lang="scss" scoped>
.container {
  flex-direction: column;
}
.dBtn {
  width: 10%;
}
.inputContainer {
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;
  input {
    margin: 0.5rem;
  }
}
</style>
