const notFound = (req, res) => {
  res.status(404).send("We're sorry, route does not exist!!");
};

module.exports = notFound;
