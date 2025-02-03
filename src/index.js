

import express from 'express';
import connectDatabase from './config.js';
import IoTData from './model/iot.js';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});
async function startServer(){
    try {
        app.use(express.json());
        await connectDatabase()
        app.post('/postData',async (req,res)=>{
            const data = req.body;
            const result = new IoTData(data);
            const response = await result.save();
            console.log(response);
            res.status(201).send(response);
        })

        app.listen(8080, () => console.log('Server is running on port 3000'));
    } catch (error) {
        console.log(error);
        process.exit(1);
    }
}



startServer()


