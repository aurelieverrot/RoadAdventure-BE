const express = require("express");
const router = express.Router();
const ctrl = require("../controllers");

// on api/v1/...

// USER routes
router.get("/users", ctrl.users.index);
router.get("/users/:id", ctrl.users.show);
router.put("/users/:id", ctrl.users.update);
router.post("/users", ctrl.users.create);
router.delete("/users/:id", ctrl.users.destroy);

// // AUTH routes
// router.post("/register", ctrl.auth.register);
// router.post("/login", ctrl.auth.login);
// router.delete("/logout", ctrl.auth.logout);
// router.get("/verify", ctrl.auth.verify);

// TRIP routes
router.get("/trips", ctrl.trips.index);
router.get("/trips/:tripId", ctrl.trips.show);
router.put("/trips/:tripId", ctrl.trips.update);
router.post("/trips/", ctrl.trips.create);
router.delete("/trips/:tripId", ctrl.trips.destroy);

// STOP routes
router.get("/stops", ctrl.stops.index);
router.get("/stops/:spotId", ctrl.stops.show);
router.put("/stops/:spotId", ctrl.stops.update); 
router.post("/stops/", ctrl.stops.create);
router.delete("/stops/:spotId", ctrl.stops.destroy);


// ----
module.exports = router;