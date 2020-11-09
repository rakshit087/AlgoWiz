const models = require("../models");
module.exports = {
  async sendAlgoInfo(req,res) {
    Category = models.Category
    await Category.find({ 'algos.approved': true },function (err, result) {
      if (err) {
        res.status(500).send({
          message: "Internal Server Error",
        });
      }
      if (!result) {
        res.status(500).send({
          message: "No Modules Found",
        });
      } else {
        res.status(200).send(JSON.stringify(result));
      }
    });
  },
  updateAlgoInfo(req,res){
    Category = models.Category;
    const category = req.body.category;
    const algo = req.body.algo;
    const newAlgo = {
      'name': algo,
      'approved':false
    };
    Category.findOne({'category':category},function(err,result){
      if(err){
        res.status(500).send({
          message:"Server Error"
        });
      }else if(!result){
        const NewCategory = new Category({
          category:category,
          algos:[newAlgo]
        })
        NewCategory.save(function(err){
          if(err){
            res.status(500).send({
              message:"Internal Server Error"
            })
          }else{
            res.status(200).send({
              message:"Algorithm Uploaded Successfully"
            })
          }
        })
      }
      else {
        Category.updateOne({'category':category},{ $push: { algos: newAlgo } },function(err){
          if(err){
            res.status(500).send({
              message:"Internal Server Error"
            })
          }
          else{
            res.status(200).send({
              message:"Algorithm Uploaded Successfully"
            })
          }
        })
      }
    })
  }
}
