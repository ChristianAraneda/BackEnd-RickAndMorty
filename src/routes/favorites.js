const express = require("express");
const {
  postFav,
  deleteFav,
  getFav,
  cleanFav,
} = require("../controllers/handleFavorites");

const favoriteRouter = express.Router();

favoriteRouter.get("/", getFav);
favoriteRouter.post("/", postFav);
favoriteRouter.delete("/:id", deleteFav);
favoriteRouter.delete("/", cleanFav);

module.exports = favoriteRouter;
