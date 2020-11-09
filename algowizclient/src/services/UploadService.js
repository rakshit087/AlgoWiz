import Api from "@/services/Api";

export default {
  upload(file) {
    let formData = new FormData();
    formData.append('file', file);
    return Api().post("upload", formData,{
        headers: {
            'Content-Type':'multipart/form-data'
        }
    });
  }
};
