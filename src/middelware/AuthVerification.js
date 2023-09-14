const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    let token = req.header('token'); // Use parentheses instead of square brackets

    jwt.verify(token, 'ABc123', (err, decoded) => {
        if (err) {
            return res.status(401).json({
                success: false,
                message: 'Unauthorized'
            });
        } else {
            let email = decoded['email'];
            let id = decoded['id'];
            req.headers.email = email; // Use req.headers, not req.header
            req.headers.id = id;
            next();
        }
    });
};
