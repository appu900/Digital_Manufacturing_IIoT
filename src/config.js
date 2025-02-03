
import mongoose from "mongoose";


async function connectDatabase(){
    await mongoose.connect("mongodb+srv://digital_manufacturing:Swarna@saneevsir.7z7pn.mongodb.net/?retryWrites=true&w=majority&appName=saneevsir")
    console.log("Database connected successfully");
}

// async function connectDatabase(){
//     await mongoose.connect("mongodb://localhost:27017/testDb", {
//         useNewUrlParser: true,
//         useUnifiedTopology: true
//       });
//     console.log("Database connected successfully");
// }

export default connectDatabase;