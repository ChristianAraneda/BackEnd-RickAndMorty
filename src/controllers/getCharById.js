const axios = require("axios");
// Crea una constante llamada URL y guarda lo siguiente: "https://rickandmortyapi.com/api/character/".
const URL = "https://rickandmortyapi.com/api/character/";

// Crea una función con el nombre getCharById y expórtala. Recibe por parámetro a los objetos req y res.
async function getCharById(req, res) {
  const { idChar } = req.params; // req.params -> {id: 12}
  try {
    const apiRequest = await axios(`${URL}${idChar}`);
    const { data } = apiRequest;

    // Se pudo hacer OK la solicitud de axios pero la API no tiene info entonces me indica un error.
    if (data.error) {
      return res.status(404).send(data.error);
    }

    const { id, name, status, species, origin, image, gender } = data;
    const character = {
      id: Number(id),
      name,
      status,
      species,
      origin, // Enviamos el objecto "origin" porque el front lo espera
      image,
      gender,
    };
    return res.status(200).json(character);
  } catch (axiosError) {
    // Error en la solicitud de axios por ejemplo: "estaba mal la URL y no se pudo hacer el get"
    return res.status(500).send(axiosError.message);
  }
}

module.exports = { getCharById };
