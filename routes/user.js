
/*
 * GET users listing.
 */

exports.list = function(req, res){
  res.json(require("../web_root/data/users.json"));
};