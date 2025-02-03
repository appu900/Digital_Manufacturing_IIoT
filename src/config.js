
import mongoose from "mongoose";


async function connectDatabase(){
    await mongoose.connect("mongodb+srv://digital_manufacturing:Swarna@saneevsir.7z7pn.mongodb.net/?retryWrites=true&w=majority&appName=saneevsir")
    console.log("Database connected successfully");
}

export default connectDatabase;