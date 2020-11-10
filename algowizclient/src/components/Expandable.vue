<template>
  <div>
    <button
      @click="
        () => {
          this.viewName = !this.viewName;
        }
      "
    >
      <p>{{ Name }}</p>
    </button>
    <template v-if="this.viewName">
      <div
        v-for="(name, index) in Values"
        :key="index"
        class="expandableContent"
      >
        <button type="button" @click="routeIt(name)">{{ name }}</button>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: "Expandable",
  data() {
    return {
      viewName: false
    };
  },
  props: {
    Name: {
      type: String,
      required: true
    },
    Values: {
      type: Array,
      required: true
    }
  },
  methods: {
     routeIt(name) {
      var nameClean = "";
      for (var i of name) {
        if (i != " ") {
          nameClean += i;
        }
      }
      console.log(nameClean);
      this.$router.push({ name: "visualize", params: { name: nameClean } });
    }
  }
};
</script>

<style lang="scss" scoped>
div {
  width: 100%;
  button {
    width: 100%;
    height: 3rem;
    outline: none;
    border: none;
    background: none;
    cursor: pointer;
    text-align: left;
    font-size: 1.2rem;
    padding-left: 2rem;
    border-top: 2px solid #e69f66;
    p {
      color: #f92672;
    }
  }
  .expandableContent {
    background-color: #2b2c28;
    button {
      padding: 1rem 2rem;
      color: #f8f8f2;
      font-weight: 500;
    }
  }
}
</style>
