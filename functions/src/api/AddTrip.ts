import { Response, Request } from 'express';
import { Database } from "../util/Database";
import { Trip } from "../util/Common";

export interface AddTripParams {
    city: string,
    days: number,
    createdDate: string
}

const addTrip = (request: Request, response: Response<any>) => {

    const body = request.body;

    if (body.city.trim === "") {
        response.status(400).json({ "error": "City cannot be empty" });
    }

    const newTrip: AddTripParams = {
        city: body.city,
        days: body.days,
        createdDate: new Date().toISOString()
    }

    Database.collection("Trips")
        .add(newTrip)
        .then((doc) => {
            const addedTrip: Trip = {
                city: newTrip.city,
                days: newTrip.days,
                createdDate: newTrip.createdDate,
                tripId: doc.id
            }
            return response.json(addedTrip);
        })
        .catch((error) => {
            console.error(error);
            return response.status(500).json(error)
        });
}

export default addTrip;
