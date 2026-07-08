import app from "./server/server.js";
import dotenv from "dotenv";
dotenv.config(
    {
        path: "./.env"
    }
);

app.listen(process.env.PORT, () => {
    console.log(`server is running on port http://localhost:${process.env.PORT}`);
});


//  nodemon index.js