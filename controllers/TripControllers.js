const db = require("../models");

const index = (req, res) => {
  console.log('salut')
  db.Trip.find({}, (err, foundTrips) => {
    console.log(foundTrips)
    if (err) return res.status(404).json({ status: 404, error: "Cannot find all trips"})

    return res.json(foundTrips);
  });
};

const show = (req, res) => {
  console.log(req.params.tripId)
  db.Trip.findById(req.params.tripId, (err, foundTrip) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find trip" })
    console.log(foundTrip)
    res.json(foundTrip);
  });
};

const create = (req, res) => {
  db.Trip.create(req.body, (err, newTrip) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot create new trip"})

    res.json(newTrip);
  });
};

const update = (req, res) => {
  db.Trip.findByIdAndUpdate(req.params.tripId, req.body, { new: true }, (err, updatedTrip) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot update trip" })

    res.json(updatedTrip);
  });
};

const destroy = (req, res) => {
  db.Trip.findByIdAndDelete(req.params.tripId, (err, deletedTrip) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot delete trip"})

    res.json(deletedTrip);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};