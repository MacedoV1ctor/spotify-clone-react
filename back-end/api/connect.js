import { MongoClient } from "mongodb"
import dotenv from "dotenv";

dotenv.config(); //carrega as variáveis do .env

const URI = process.env.MONGODB_URI


if (!URI) {
  throw new Error("A URI do MongoDB não foi definida nas variáveis de ambiente.");
}

const client = new MongoClient(URI);

await client.connect(); // Aguarda a conexão

export const db = client.db("SpotifyProject");

// const songsCollection = await db.collection("songs").find({}).toArray();

// console.log(songsCollection);
// await client.close(); // Fecha a conexão após a execução
  

/*

const client = new MongoClient(URI, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    }
  });

  async function run() {
    try {
      // Connect the client to the server	(optional starting in v4.7)
      await client.connect();
      // Send a ping to confirm a successful connection
      await client.db("admin").command({ ping: 1 });
      console.log("Pinged your deployment. You successfully connected to MongoDB!");
    } finally {
      // Ensures that the client will close when you finish/error
      await client.close();
    }
  }
  run().catch(console.dir); */