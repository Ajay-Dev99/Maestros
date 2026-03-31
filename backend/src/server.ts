import http from "http";
import { env } from "./config/env";
import app from "./app";
import { initSocket } from "./config/socket";

const PORT = env.PORT;


const server = http.createServer(app);
initSocket(server);



server.listen(PORT, () => {
    console.log(`🚀  Maestros Server running on port ${PORT}`);
});