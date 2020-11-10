<template>
<div>
  <div id="canvas"></div>
  <input type="text">
</div>
</template>

<script>

import P5 from 'p5'

export default {
 name:"Default",

  created(){
    function sketch(s) {
      let w = 500;
      let h = 500;

      s.setup = function() {
        s.createCanvas(w,h);
      };

      s.draw = () => {
            s.background(33, 33, 33);
            s.square(200,20,40);
            s.square(100,20,40);
            s.square(20,20,40);
        };
    }
    new P5(sketch, 'canvas');
  }

}
</script>

<style>

</style>