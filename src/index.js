

import express from 'express';
import connectDatabase from './config.js';
import TouchSensor from './model/iot.js';

const app = express();



// AHJAHjahjAjhaJAH

const user = "appu";
app.get('/', (req, res) => {
  res.send('Hello World!');
});
async function startServer(){
    try {
        app.use(express.json());
        await connectDatabase()
        app.post('/postData',async (req,res)=>{
            const data = req.body;
            console.log(data.document)
            const payload = data.document
            const response = await TouchSensor.create(payload);
            res.status(201).json({
                "Status": "OK",
                "message": "Data posted successfully",
                "data": response
            });
        })

        app.listen(8080, () => console.log('Server is running on port 3000'));
    } catch (error) {
        console.log(error);
        console.log("something went wrong")
        process.exit(1);
    }
}



startServer()


