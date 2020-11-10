<template>
  <div class="container">
    <p class="dText message" v-if="message">{{ message }}</p>
    <form v-if="!signupButtonClicked">
      <input placeholder="Email" class="dInput" v-model="email" />
      <input
        type="password"
        placeholder="Password"
        class="dInput"
        v-model="password"
      />
      <button class="dBtn" type="button" @click="login()">Login</button>
      <p class="dText">---or---</p>
      <button
        class="dBtn bgPurple"
        @click="
          () => {
            this.signupButtonClicked = true;
          }
        "
      >
        Sign Up
      </button>
    </form>
    <form v-if="signupButtonClicked">
      <input placeholder="Name" class="dInput" v-model="name" required />
      <input placeholder="Email" class="dInput" v-model="email" required />
      <input
        type="password"
        placeholder="Password"
        class="dInput"
        v-model="password"
        required
      />
      <button class="dBtn" type="button" @click="signup()">Sign Up</button>
      <p class="dText">---or---</p>
      <button
        class="dBtn bgPurple"
        @click="
          () => {
            this.signupButtonClicked = false;
          }
        "
      >
        Login
      </button>
    </form>
  </div>
</template>

<script>
import AuthenticationService from "@/services/AuthenticationService";
export default {
  data() {
    return {
      signupButtonClicked: false,
      name: "",
      email: "",
      password: "",
      message: ""
    };
  },
  methods: {
    async signup() {
      if (this.name == "" || this.email == "" || this.password == "") {
        this.message = "Please Fill All the Details";
      } else {
        var response = await AuthenticationService.register({
          name: this.name,
          email: this.email,
          password: this.password
        });
        console.log(response);
        const message = response.data.message;
        this.message = message;
      }
    },
    async login() {
      if (this.email == "" || this.password == "") {
        this.message = "Please Fill All the Details";
      } else {
        var response = await AuthenticationService.login({
          email: this.email,
          password: this.password
        });
        console.log(response);
        if (response.data.error) {
          this.message = response.data.error;
        } else {
          localStorage.setItem("token", response.data.token);
          this.$router.push("/upload");
        }
      }
    }
  }
};
</script>

<style scoped lang="scss">
.container {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
}
.extraMargin {
  margin: 5rem !important;
}
.dText {
  margin: 1rem 0 0 0 !important;
}
.bgPurple {
  background-color: #ae81ff;
}
.message {
  position: relative;
  bottom: 2rem;
}
</style>
