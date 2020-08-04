import { Response, Request } from 'express';
import { Database } from "../util/Database";

const editTrip = (request: Request, response: Response) => {
    let document = Database.collection("Trips").doc(`${request.params.tripId}`);
    document.update(request.body)
    .then(() => {
        response.json({message: "Updated"});
    })
    .catch((error) => {
        response.status(400).json(error);
    })
}

export default editTrip;