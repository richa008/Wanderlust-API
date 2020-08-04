import * as functions from 'firebase-functions';
import * as express from 'express';
import getTrips from "./api/GetTrips";
import editTrip from "./api/EditTrip";
import addTrip from "./api/AddTrip";
import deleteTrip from './api/DeleteTrip';

const app = express();

export const helloWorld = functions.https.onRequest((request, response) => {
    response.send("Hello from Firebase!");
});

app.get('/trips', getTrips);
app.put('/trip/:tripId', editTrip);
app.delete('/trip/:tripId', deleteTrip);
app.post('/trip', addTrip);
export const api = functions.https.onRequest(app);
