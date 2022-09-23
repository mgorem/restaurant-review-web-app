import app from "./server.js";
import mongodb from "mongodb";
import dotenv from "dotenv"; // allows access to environment variables

dotenv.config(); // configure dotenv
const MongoClient = mongodb.MongoClient; // get access to MongoClient from mongodb

const port = process.env.PORT || 8000;

MongoClient.connect(process.env.RESTREVIEWS_DB_URI, {
  maxPoolSize: 50,
  wtimeoutMS: 2500,
  useNewUrlParser: true,
})
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  })
  .then(async (client) => {
    app.listen(port, () => {
      console.log(`Database Connected Successfully, listening on port ${port}`);
    });
  });
