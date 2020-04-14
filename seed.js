require('dotenv').config()
const db = require("./models");

const trips = [
  {
    title: 'Trip 1',
    status: false,
    shortText: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"
  },
  {
    title: 'Trip 2',
    status: true,
    shortText: "magna aliqua. Sollicitudin tempor id eu nisl. Cras sed felis eget velit aliquet sagittis id. Et sollicitudin ac orci"
  },
  {
    title: 'Trip 4',
    status: false,
    shortText: "phasellus. Ultrices neque ornare aenean euismod. Metus dictum at tempor commodo ullamcorper. Hendrerit dolor"
  },
  {
    title: 'Trip 5',
    status: true,
    shortText: "magna eget est lorem. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Turpis"
  },
  {
    title: 'Trip 6',
    status: false,
    shortText: "egestas integer eget aliquet nibh praesent tristique. Consequat semper viverra nam libero justo laoreet sit"
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
