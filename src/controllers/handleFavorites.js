var myFavorites = [];

function postFav(req, res) {
  myFavorites.push(req.body);
  return res.json(myFavorites);
}

function deleteFav(req, res) {
  const { id } = req.params;
  const noDelete = myFavorites.filter((pjFav) => pjFav.id !== Number(id));
  myFavorites = noDelete;

  return res.json(myFavorites);
}
function cleanFav(req, res) {
  myFavorites = [];

  return (
    res.status(200).send("Fav limpiado con exito"),
    console.log("Favoritos limpiados con exito")
  );
}

function getFav(req, res) {
  return res.json(myFavorites);
}

module.exports = {
  postFav,
  deleteFav,
  getFav,
  cleanFav,
};
