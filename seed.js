require('dotenv').config()
const db = require("./models");

const trips = [
  {
    title: 'Trip 1',
    user: '5e98bdd2c95377b1861b14d1',
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
    user: '5e98bdd2c95377b1861b14d1',
    status: true,
    shortText: "magna eget est lorem. Faucibus scelerisque eleifend donec pretium vulputate sapien nec sagittis. Turpis"
  },
  {
    title: 'Trip 6',
    status: false,
    shortText: "egestas integer eget aliquet nibh praesent tristique. Consequat semper viverra nam libero justo laoreet sit"
  }
]

const users = [
  {
    username: 'Lili',
    email: 'lili@lili.com',
    password: '1234'
  },
  {
    username: 'Aurelie',
    email: 'aurelie@ga.com',
    password: '5678'
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


    // Delete All Users
    // console.log('Deleting all users...');

    // db.User.deleteMany({}, (err, result) => {
    //   if (err) {
    //     console.log(err);
    //     process.exit();
    //   }
    //   console.log(`Successfully deleted ${result.deletedCount} users.`);


      // Create New Trips
      console.log('Creating new trips...');
      db.Trip.create(trips, (err, newTrips) => {
        if (err) {
          console.log(err);
          process.exit();
        }
        console.log(`Successfully created ${newTrips.length} trips.`);
        

        // Create New Users
        // console.log('Creating new users...');
        // db.User.create(users, (err, newUsers) => {
        //   if (err) {
        //     console.log(err);
        //     process.exit();
        //   }
        //   console.log(`Successfully created ${newUsers.length} users.`);
        //   process.exit();
        });
      });
    // });
  // });
// });

