import { MongoClient } from "mongodb";
import env from "../env";

// Connect to database

const port = env('DATABASE_PORT', 27017);
const user = env('DATABASE_USERNAME');
const password = env('DATABASE_PASSWORD');

const url = `mongodb://localhost:${port}`;

const client = new MongoClient(url, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    auth: {
        user,
        password,
    }
});

function connect() {
    return new Promise((resolve, reject) => {
        client.connect((error) => {
            if (error) {
                reject(error)
            } else {
                resolve(client);
            }
        });
    })
}

// sync code
(async function () {
    await connect();
})();

export default client;