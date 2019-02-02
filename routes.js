const mailer = require("./mailer");

const routes = function (app, data) {

    app.get("/personal", (req, res) => {
        res.render("personal", { data });
    })

    app.get("/identity", (req, res) => {
        res.render("identity", { data });
    })

    app.get("/business", (req, res) => {
        res.render("business", { data });
    })

    app.get("/benefits", (req, res) => {
        res.render("benefits", { data });
    })

    app.get("/team", (req, res) => {
        res.render("team", { data });
    })

    app.get("/training", (req, res) => {
        res.render("construction", { layout: "other", data: data });
    })

    app.get("/resources", (req, res) => {
        res.render("resources", { data });
    })

    app.get("/contact", (req, res) => {
        res.render("contact", { layout: "other", data: data });
    })

    app.post("/contact", (req, res) => {
        mailer(req.body.email, req.body.subject, req.body.name, req.body.company, req.body.phone, req.body.message, req.body.domain)
    })

    app.get("/", (req, res) => {
        res.render("index", { data });
    })

    app.get("*", (req, res) => {
        res.render("index", { data });
    })

}

module.exports = routes;

