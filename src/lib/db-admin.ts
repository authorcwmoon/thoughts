<<<<<<< HEAD
const admin = require("firebase-admin");
const { join } = require("path");
const cert = join(__dirname, "../service-account.json");

let firebaseDb = null;

export default function getDb() {
  if (firebaseDb === null) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY,
      }),
      databaseURL: "https://cwmoon-cd3ec.firebaseio.com/",
    });

    firebaseDb = admin.database();
  }

  return firebaseDb;
}
=======

const admin = require('firebase-admin');

try {
  admin.initializeApp({
    credential: admin.credential.cert({
  
      client_email: process.env.FIREBASE_CLIENT_EMAIL,
      private_key: process.env.FIREBASE_PRIVATE_KEY,
      project_id: 'cwmoon-cd3ec'
    }),
    databaseURL: 'https://cwmoon-cd3ec.firebaseio.com/'
  });
} catch (error) {
  /*
   * We skip the "already exists" message which is
   * not an actual error when we're hot-reloading.
   */
  if (!/already exists/u.test(error.message)) {
    // eslint-disable-next-line no-console
    console.error('Firebase admin initialization error', error.stack);
  }
}

export const realtimeDb = admin.database();

>>>>>>> 30e104157c195a18ec52d2f794c6add046a407e0
