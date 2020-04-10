const db = require("../models");

const index = (req, res) => {
  db.Stop.find({}, (err, foundStops) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find all stops"})

    res.json(oundStops);
  });
};

const show = (req, res) => {
  db.Stop.findById(req.params.id, (err, foundStop) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot find stop" })

    res.json(foundStop);
  });
};

const create = (req, res) => {
  db.Stop.create(req.body, (err, newStop) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot create new stop"})

    res.json(newStop);
  });
};

const update = (req, res) => {
  db.Stop.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedStop) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot update stop" })

    res.json(updatedStop);
  });
};

const destroy = (req, res) => {
  db.Stop.findByIdAndDelete(req.params.id, (err, deletedStop) => {
    if (err) return res.status(404).json({ status: 404, error: "Cannot delete stop"})

    res.json(deletedStop);
  });
};

module.exports = {
  index,
  show,
  create,
  update,
  destroy
};