import app from "./app.js";
import connectDB from "./db/connectDB.js";
import connectDBfrom from "./db/connectDB.js";

connectDB()
.then(()=>{ //DB sanga connect vai sake paxi matra server run hunxa..(.catch uta connectDB ma vai sakeko xa so yaha garnu pardaina)
    app.listen(3000, ()=>{
console.log("Server is up and running");
});
});
