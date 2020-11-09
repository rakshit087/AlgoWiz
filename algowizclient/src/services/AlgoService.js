import Api from "@/services/Api";

export default {
  getAlgoInfo() {
    return Api().get("algo");
  },
  updateAlgoInfo(algoInfo) {
    return Api().post("algo",algoInfo)
  }
};