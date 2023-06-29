// Modulos
import express from "express";
import message from "./config/message.js";
import enviroment from "./config/enviroments";
import allRoutes from "./routes/email.routes.js";
import allRoutesLaboratory from "./routes/laboratory.routes.js";
import allRoutesPQRS from "./routes/pqrs.routes.js";
import allRoutesAppointment from "./routes/appointment.routes.js";


const app = express();

app.get("/", (req, res) => {
    res.send({msg: "Hello World"});
});

// Se establece el puerto
app.set("PORT", process.env.PORT || 3000);

// Rutas
app.use(express.json());
app.use('/api',allRoutes);
app.use('/labApi', allRoutesLaboratory);
app.use('/PQRS', allRoutesPQRS);
app.use("/appointment", allRoutesAppointment);

export default app;