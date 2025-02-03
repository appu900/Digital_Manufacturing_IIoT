
import mongoose from "mongoose";


async function connectDatabase(){
    await mongoose.connect("mongodb+srv://audobookcmp:mERonz15DT220mZ3@audobookserverlessinsta.oa4gzac.mongodb.net/iotDb?retryWrites=true&w=majority&appName=audobookServerlessInstance0")
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