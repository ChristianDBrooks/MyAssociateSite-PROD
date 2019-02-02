const express = require("express");
const exphbs = require("express-handlebars");
const app = express();
const routes = require("./routes");
const axios = require("axios");



// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 9090;

function requireHTTPS(req, res, next) {
  // The 'x-forwarded-proto' check is for Heroku
  if (!req.secure && req.get('x-forwarded-proto') !== 'https' && process.env.NODE_ENV !== "development") {
    return res.redirect('https://' + req.get('host') + req.url);
  }
  next();
}

//SET ASSOCIATE ID HERE
const associateID = "5c53dd2bfb6fc064f733c2f9";
axios.get("https://myassociatesite-api.herokuapp.com/api/associate/id/" + associateID)
  .then(function (result) {

    let associateData = result.data;

    if (associateData.logoLink.length > 0) {
      const link = associateData.logoLink;
      associateData.logoLink = "<img style='width: 225px;' src=" + link + " alt='Image Not Found'>";
    } else {
      associateData.logoLink = "<div class='font-weight-light' style='color: rgb(115,71,136)'>" + associateData.companyName + "</div>";
    }

    if (!associateData.iconLink.length > 0) {
      associateData.iconLink = "./images/favicon.ico"
    }

    if (associateData.about.length <= 0) {
      associateData.about = associateData.companyName + " has been an independent associate for LegalShield and IDShield services since " + associateData.startYear + ". Our company has been able to help thousands of families and hundreds of businesses get the legal and identity theft protection they need. Every time we protect another family or business it makes us feel good knowing that we have given them a service that will help them in any legal matter and save them money. If you or someone you know is in need of affordable legal or identity theft protection give us a call. We would love the opportunity to meet you and discuss your needs. We are confident we can find an affordable solution that will work for you without breaking the bank.";
    }

    associateData.year = (new Date()).getFullYear()

    routes(app, associateData)
  })
  .catch(function (error) {
    console.log(error);
  });

// Sets up the Express app to handle data parsing
// app.use(requireHTTPS);
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'))

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

app.listen(PORT, function () {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
