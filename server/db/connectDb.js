import mongoose from "mongoose";

const connectDb = async()=>{

    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log("Db connected")
        
    } catch (error) {
        console.log("Error Connecting to Db ",error.message
        )
    }

}

export default connectDb