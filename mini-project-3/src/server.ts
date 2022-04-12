import Server from "./serverClass";

const server = new Server(4000, "mongodb://localhost:27017/currency");

server.init();

server.listen();