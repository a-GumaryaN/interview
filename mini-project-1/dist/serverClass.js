"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const http_1 = require("http");
const mongoose_1 = require("mongoose");
const express_graphql_1 = require("express-graphql");
const graphql_1 = require("./graphql/graphql");
class server {
    constructor(portNumber, dbUrl) {
        this.portNumber = 4000;
        this.dbUrl = "mongodb://localhost:27017/mydb";
        this.init = () => __awaiter(this, void 0, void 0, function* () {
            this.app = express();
            this.server = (0, http_1.createServer)(this.app);
            yield (0, mongoose_1.connect)(this.dbUrl).then(() => {
                console.log(`successfully connected to the database...`);
            });
            this.app.use("/graphql", (0, express_graphql_1.graphqlHTTP)({
                schema: graphql_1.graphqlSchema,
                graphiql: true,
            }));
            this.app.use("", (req, res) => {
                res.send("route not found...");
            });
        });
        this.listen = () => __awaiter(this, void 0, void 0, function* () {
            yield this.server.listen(this.portNumber, () => {
                console.log(`listening on ${this.portNumber}`);
            });
        });
        this.dbUrl = dbUrl;
        this.portNumber = portNumber;
    }
}
exports.default = server;
