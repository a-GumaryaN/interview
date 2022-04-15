import Server from "./serverClass";
import { getAndScanAnalyst } from "./utils/decision";

const server = new Server(4000, "mongodb://localhost:27017/analyst");

server.init();

(async () => {
    const analyst_info = await getAndScanAnalyst();
    console.log(analyst_info);
})();

server.listen();