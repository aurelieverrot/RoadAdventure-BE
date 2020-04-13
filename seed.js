require('dotenv').config()
const db = require("./models");

const trips = [
  {
    title: 'Trip 1',
    
    status: false
  },
  {
    title: 'Trip 2',
    
    status: true
  }
]








// Delete All Trips
console.log('Deleting all trips...');

db.Trip.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }

  console.log(`Successfully deleted ${result.deletedCount} trips.`);

  // // Delete All Stops
  // console.log('Deleting all stops...');
  // db.Stop.deleteMany({}, (err, result) => {
  //   if (err) {
  //     console.log(err);
  //     process.exit();
  //   }

  //   console.log(`Successfully deleted ${result.deletedCount} stops.`);

  //   // Delete All Users
  //   console.log('Deleting all users...');

  //   db.User.deleteMany({}, (err, result) => {
  //     if (err) {
  //       console.log(err);
  //       process.exit();
  //     };

  //     console.log(`Successfully deleted ${result.deletedCount} users.`);

      // Create New Trips
      console.log('Creating new trips...');
      db.Trip.create(trips, (err, newTrips) => {
        if (err) {
          console.log(err);
          process.exit();
        };

        console.log(`Successfully created ${newTrips.length} trips.`);
        process.exit();
      });
  //   });
  // });
});
