function checkAuth(req, res, next) {
    const { password, username } = req.body;
    password === '123' && username === 'raul' ? next() : res.json({isError: true});
}

module.exports = { checkAuth };