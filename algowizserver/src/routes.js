const AuthenticationController = require("./controllers/AuthenticationController");
const AlgoController = require("./controllers/AlgoController");
const multer = require("multer");
var storage = multer.diskStorage({
  destination: "./uploads/",
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

var upload = multer({ storage: storage });

module.exports = function (app) {
  app.post("/register", AuthenticationController.register);
  app.post("/login", AuthenticationController.login);
  app.get("/algo", AlgoController.sendAlgoInfo);
  app.post("/algo", AlgoController.updateAlgoInfo);
  app.post("/upload", upload.any(), (req, res) => {
    res.status(200).send({
      message: "Uploaded",
    });
  });
};
