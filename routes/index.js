
exports.index = function(req, res) {
  res.render('Index', {title: 'Express', foo: {bar: 'baz'}});
};

exports.test = function(req, res) {
    res.render('Authorization/SingIn');
};