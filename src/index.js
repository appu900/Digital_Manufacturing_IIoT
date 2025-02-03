

import express from 'express';
import connectDatabase from './config.js';
import IoTData from './model/iot.js';

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
            const response = await IoTData.create(data);
            res.status(201).send(response);
        })

        app.listen(8080, () => console.log('Server is running on port 3000'));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



startServer()


