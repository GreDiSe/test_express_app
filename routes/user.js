
exports.list = function(req, res) {
  res.send('respond with a resource');
};

exports.authorization = function (req, res) {
    console.log(req.body);
    res.sendStatus(200);
};
