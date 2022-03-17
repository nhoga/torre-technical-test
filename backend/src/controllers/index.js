const axios = require("axios");

const getStart = (req, res) => {
  res.send("torre.co technical-test");
};

const getResults = async (req, res) => {
  const name = req.query.query;
  await axios
    .get("https://bio.torre.co/api/bios/" + name)
    .then((response) => {
      res.status(200).send({
        name: response.data.person.name,
        links: response.data.person.links,
        headline: response.data.person.professionalHeadline,
        location: response.data.person.location.name,
        image: response.data.person.pictureThumbnail,
        skills: response.data.strengths,
      });
    })
    .catch((error) => console.log(error));
};

module.exports = {
  getStart,
  getResults,
};
