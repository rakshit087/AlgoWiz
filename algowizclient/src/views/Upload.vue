<template>
  <div class="container">
    <p class="dText" v-if="!message">
      You can <span class="purple">Upload</span> Your own Algorithm from
      here,<br />
      PS - Please Wait Until Your Algorithm is <span class="red">Approved</span>
    </p>
    <p class="dText" v-if="message">
      {{ message }}
    </p>
    <form enctype="multipart/form-data" novalidate>
      <input
        class="dInput"
        placeholder="Algorithm Name"
        v-model="algoName"
        required
      />
      <input
        class="dInput"
        placeholder="Category"
        v-model="categoryName"
        required
      />
      <div class="dropbox">
        <input
          type="file"
          accept=".vue"
          ref="file"
          @Change="handleFileUpload()"
          required
        />
        <p v-if="isInitial">
          Drag your file here to begin<br />
          or click to browse
        </p>
        <p v-if="isSaving">{{ file.name }}</p>
      </div>
      <button type="button" class="dBtn" @click="handleUpload()">Upload</button>
      <button class="dBtn purpleBG" type="reset" @click="logout()">
        Log Out
      </button>
    </form>
  </div>
</template>

<script>
import AlgoService from "@/services/AlgoService";
import UploadService from "@/services/UploadService";
export default {
  data() {
    return {
      algoName: "",
      categoryName: "",
      isInitial: true,
      isSaving: false,
      file: "",
      message: ""
    };
  },
  methods: {
    handleFileUpload() {
      this.isSaving = true;
      this.isInitial = false;
      this.file = this.$refs.file.files[0];
    },
    async handleUpload() {
      const response = await UploadService.upload(this.file);
      if (response.data.message == "Uploaded") {
        const response = await AlgoService.updateAlgoInfo({
          algo: this.algoName,
          category: this.categoryName
        });
        this.message = response.data.message;
      } else {
        this.message = "Internal Server Error";
      }
      this.isSaving = false;
      this.isInitial = true;
    },
    logout() {
      localStorage.setItem("token", 0);
      this.$router.push("/authenticate");
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

  .dropbox {
    display: flex;
    justify-content: center;
    align-content: center;
    width: 50%;
    height: 5rem;
    border: 2.5px dashed #e6db74;
    border-radius: 24px;
    margin: 1rem 1rem;
    position: relative;

    cursor: pointer;
    input {
      margin: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      border-radius: 24px;
      opacity: 0;
      cursor: pointer;
    }
    p {
      color: #bbb36ec2;
      font-family: "Courier New", Courier, monospace;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
