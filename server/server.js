import express from "express"
import userRoutes from "./routes/user.routes.js"
import authRoutes from "./routes/auth.routes.js"
import exploreRoutes from "./routes/explore.routes.js"
import dotenv from "dotenv"
import cors from "cors"
import connectDb from "./db/connectDb.js"
import session  from "express-session"
import passport from "passport"
import "./passport/github.auth.js"

dotenv.config();


const app = express();

const PORT =5000;

app.use(session({ secret: 'keyboard cat', resave: false, saveUninitialized: false }));
// Initialize Passport!  Also use passport.session() middleware, to support
// persistent login sessions (recommended).
app.use(passport.initialize());
app.use(passport.session());


app.use(cors())

app.get("/",(req,res)=>{
    res.json("Hello World")
})

app.use("/api/users",userRoutes);
app.use("/api/auth",authRoutes);
app.use("/api/explore",exploreRoutes);

app.listen(PORT,(req,res)=>{
    console.log(`Server Running ${PORT}`);
    connectDb()
})