const shortid = require("shortid");
const Url = require("../models/urls");
async function handleNewUrlGenerator(req, res) {
  const body = req.body;
  if (!body)
    return res.status(400).json({ error: "A Completr URL is required" });

  const shortId = shortid();
  await Url.create({
    shortId: shortId,
    redirectUrl: body.url,
    visitHistory: [],
    createdBy : req.user._id,
  });
  return res.render("home", {
    id: shortId,
  });
}

async function handleRedirection(req, res) {
  const shortId = req.params.shortId;
  const entry = await Url.findOneAndUpdate(
    {
      shortId,
    },
    {
      $push: {
        visitHistory: {
          timestamp: Date.now(),
        },
      },
    }
  );
  res.redirect(entry.redirectUrl);
}

module.exports = {
  handleNewUrlGenerator,
  handleRedirection,
};
