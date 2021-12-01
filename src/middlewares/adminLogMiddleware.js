let administradores = ['Ada', 'Greta', 'Vim', 'Tim'];

function adminMiddleware(req, res, next) {
    if (administradores.includes(req.query.user)) {
        next()
    }
    else {
        return res.send("No tienes los privilegios para ingresar.");
    }
}

module.exports = adminMiddleware;