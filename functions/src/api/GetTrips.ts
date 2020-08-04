import { Response, Request } from 'express';
import { Database } from "../util/Database";
import { Trip } from "../util/Common";

const getTrips = (request: Request, response: Response<Trip[]>) => {

    Database.collection('Trips')
        .orderBy('createdDate', 'desc')
        .get()
        .then((data) => {
            const trips: Array<Trip> = [];
            data.forEach((doc) => {
                const data = doc.data();
                const trip: Trip = {
                    tripId: doc.id,
                    city: data.city,
                    days: data.days,
                    createdDate: data.createdDate
                }

                trips.push(trip);
            });
            return response.json(trips);
        })
        .catch((error) => {
            console.error(error);
            return response.status(500).json(error)
        });
};

export default getTrips;

