const express = require("express");
const session = require("express-session");
const path = require("path");

const app = express();

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(
  session({
    secret: "library-secret-key", // In real apps keep this secret safe
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 5 }, // session expires in 5 mins
  })
);

// Set EJS as template engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Home page
app.get("/", (req, res) => {
  res.render("home");
});

// Handle login
app.post("/login", (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.send("Please enter a name to log in.");
  }

  // Store session
  req.session.user = {
    name,
    loginTime: new Date().toLocaleString(),
  };

  res.redirect("/profile");
});

// Profile page
app.get("/profile", (req, res) => {
  if (!req.session.user) {
    return res.redirect("/");
  }
  res.render("profile", { user: req.session.user });
});

// Logout (destroy session)
app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.send("Error logging out.");
    }
    res.redirect("/");
  });
});

// Start server
app.listen(3000, () => {
  console.log("✅ Server running at http://localhost:3000");
});
