
exports.list = function(req, res) {
  res.send('respond with a resource');
};

exports.authorization = function (req, res) {
    const {email, password} = req.body;
    if(email === 'qwe' && password === '123') res.sendStatus(200);
    else res.sendStatus(401);
};
