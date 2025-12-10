import mongoose from "mongoose"
import { DB_NAME } from "../constants.js"

const connectDB = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n MongoDB connected!!! DB HOST: ${connectionInstance.connection.host}`);
        // The line connectionInstance.connection.host if emphasizing that there are lot of different databases used in development, production, deployment so it's good to log which host we are connected to.
    }
    catch (error) {
        console.log("MONGODB connection error", error);
        process.exit(1) //Exit ongoing process
    }
}

export default connectDB