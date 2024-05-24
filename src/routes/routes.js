import {studentRoutes} from './student.routes.js';    
import {messageRoutes} from './message.routes.js';
import {confessionRoutes} from './confession.routes.js';

export default function routes(app) {
    app.get("/healthz", (_, res) => {
        res.status(200).send("OK");
      });
    app.use("/student",studentRoutes);
    app.use("/message",messageRoutes);
    app.use("/confession",confessionRoutes);
}   
