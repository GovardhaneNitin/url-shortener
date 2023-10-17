const express = require("express");
const mongoose = require("mongoose");
const ShortUrl = require("./models/shortUrl");
const shortUrl = require("./models/shortUrl");
const app = express();

mongoose.connect("mongodb://localhost/urlShortener", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.get("/", async (req, res) => {
  const shortUrl = await ShortUrl.find();
  res.render("index", { shortUrls: shortUrl });
});

app.post("/shortUrls", async (req, res) => {
  await shortUrl.create({ full: req.body.fullUrl });

  res.redirect("/");
});

app.get("/:shortUrl", async (req, res) => {
  const shortUrl = await ShortUrl.findOne({ short: req.params.shortUrl });
  if (shortUrl == null) return res.sendStatus(404);

  shortUrl.clicks++;
  shortUrl.save();

  res.redirect(shortUrl.full);
});

app.post("/delete/:id", async (req, res) => {
  const id = req.params.id;

  try {
    await ShortUrl.findByIdAndDelete(id);
    res.redirect("/");
  } catch (error) {
    res.sendStatus(500);
  }
});

app.listen(process.env.PORT || 3000);
