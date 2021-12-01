module.exports = {
    index: (req, res) => {
        return res.render("index", { title: "Home" });
    },
    login: (req, res) => {
        return res.render("login", { title: "Login" });
    },
    register: (req, res) => {
        return res.render("register", { title: "Register" });
    },
    admin: (req, res) => {
        return res.send(`Hola Admin: ${req.query.user}`);
    },
};