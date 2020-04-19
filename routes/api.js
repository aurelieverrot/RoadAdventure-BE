const express = require("express");
const verifyToken = require('../middleware/verification');
const router = express.Router();
const ctrl = require("../controllers");

// on api/v1/...

// USER routes
router.get("/users", verifyToken, ctrl.users.index);
router.get("/users/:id", verifyToken, ctrl.users.show);
router.put("/users/:id", verifyToken, ctrl.users.update);
router.post("/users", verifyToken, ctrl.users.create);
router.delete("/users/:id", verifyToken, ctrl.users.destroy);

// AUTH routes
router.post("/register", ctrl.auth.register);
router.post("/login", ctrl.auth.login);

// TRIP routes
router.get("/trips", ctrl.trips.index);
router.get("/trips/:tripId", ctrl.trips.show);
router.put("/trips/:tripId", verifyToken, ctrl.trips.update);
router.post("/trips/", verifyToken, ctrl.trips.create);
router.delete("/trips/:tripId", verifyToken, ctrl.trips.destroy);

// STOP routes
router.get("/stops", ctrl.stops.index);
router.get("/stops/:stopId", ctrl.stops.show);
router.put("/stops/:stopId", verifyToken, ctrl.stops.update); 
router.post("/stops/", verifyToken, ctrl.stops.create);
router.delete("/stops/:stopId", verifyToken, ctrl.stops.destroy);

// ----
module.exports = router;