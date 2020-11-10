<template>
  <div class="container">
    <div id="canvas"></div>
    <p class="dText" v-if="!this.started">
      Bubble Sort is the simplest sorting algorithm that works by
      <span class="purple"> repeatedly swapping </span>the
      <span class="green">adjacent</span> elements if they are in wrong
      order.<br />
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
      frameRate: 5,
      arraySize: 20
    };
  },
  methods: {
    start: async function() {
      let frameRate = this.frameRate;
      let arraySize = this.arraySize;
      let values = new Array(parseInt(arraySize, 10));

      function sketch(s) {
        let maxBarLength;
        let barWidth;
        let w = (70 * s.windowWidth) / 100;
        let h = (90 * s.windowHeight) / 100;
        s.setup = function() {
          s.createCanvas(w, h);
          maxBarLength = h - 50;
          barWidth = w / values.length;
          for (let i = 0; i < parseInt(arraySize, 10); i++) {
            values[i] = Math.floor(Math.random() * Math.floor(maxBarLength));
          }
        };
        // let comparisons = 0;
        let i = 0;
        let j = 0;
        s.draw = function() {
          s.background("#1e1f1c");
          s.noStroke();
          s.frameRate(parseInt(frameRate, 10));
          //display all the bars

          if (i < values.length) {
            for (j = 0; j < values.length - i - 1; j++) {
              
              let a = values[j];
              let b = values[j + 1];
              if (a > b) {
                // comparisons++;
                swap(values, j, j + 1);
              }
            }
          } else {
            console.log("finished");
            s.noLoop();
          }
          s.clear();
          displayBars();
          i++;
        };
        function swap(arr, a, b) {
          let temp = arr[a];
          arr[a] = arr[b];
          arr[b] = temp;
        }

        function displayBars() {
          for (let k = 0; k < values.length; k++) {
            if (values.length - k <= i) {
              s.fill("#a6e22e");
            }else {
              s.fill("#E6DB74");
            }
            s.rect(k * barWidth, h - values[k], barWidth, values[k]);
          }
        }
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
