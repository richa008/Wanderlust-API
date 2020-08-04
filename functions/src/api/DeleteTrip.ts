import { Response, Request } from 'express';
import { Database } from "../util/Database";

const deleteTrip = (request: Request, response: Response<any>) => {
    const document = Database.doc(`/Trips/${request.params.tripId}`);

    document.get()
        .then((data) => {
            if (!data.exists) {
                response.status(404).json({ error: "Invalid trip id" });
            }
            return document.delete();
        })
        .then(() => {
            response.json("elete sucessful");
        })
        .catch((error) => {
            response.status(500).json(error);
        })
};

export default deleteTrip;