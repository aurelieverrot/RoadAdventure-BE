const db = require("../models");

const index = (req, res) => {
  db.Trip.find({}, (err, foundTrips) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find all trips"})

    res.json(oundTrips);
  });
};

const show = (req, res) => {
  db.Trip.findById(req.params.id, (err, foundTrip) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find trip" })

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
  db.Trip.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedTrip) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot update trip" })

    res.json(updatedTrip);
  });
};

const destroy = (req, res) => {
  db.Trip.findByIdAndDelete(req.params.id, (err, deletedTrip) => {
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