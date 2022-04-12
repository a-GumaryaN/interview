import * as express from "express";
import { createServer } from "http";
import { connect } from "mongoose";
import { graphqlHTTP } from "express-graphql";
import { graphqlSchema } from "./graphql/graphql";

class server {
    public app: any;
    private server: any;
    private portNumber: number = 4000;
    private dbUrl = "mongodb://localhost:27017/mydb";

    constructor(portNumber: number, dbUrl: string) {
        this.dbUrl = dbUrl;
        this.portNumber = portNumber;
    }

    public init = async () => {
        this.app = express();
        this.server = createServer(this.app);

        await connect(this.dbUrl).then(() => {
            console.log(`successfully connected to the database...`);
        });

        this.app.use(
            "/graphql",
            graphqlHTTP({
                schema: graphqlSchema,
                graphiql: true,
            })
        );

        this.app.use("", (req, res) => {
            res.send("route not found...");
        });
    };

    public listen = async () => {
        await this.server.listen(this.portNumber, () => {
            console.log(`listening on ${this.portNumber}`);
        });
    };


}

export default server;