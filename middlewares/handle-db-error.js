const fs = require('fs');
function handleDbError(error, req, res, next) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
    if (req.file) {
        fs.unlink(req.file.path, (error) => {
            if (error) {
                console.error(error);
            }
        });
    }
}

module.exports = handleDbError
