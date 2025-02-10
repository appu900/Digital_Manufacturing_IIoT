import express from "express";
import { createServer } from "http";
import { Server } from "socket.io";
import connectDatabase from "./config.js";
import TouchSensor from "./model/iot.js";
import cors from "cors";

const app = express();
const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

// Middleware
app.use(cors());
app.use(express.json());

// WebSocket Connection Handler
io.on("connection", (socket) => {
  console.log(`🔗 Client connected: ${socket.id}`);

  socket.on("disconnect", () => {
    console.log(`❌ Client disconnected: ${socket.id}`);
  });
});

// POST endpoint for adding data
app.post("/postData", async (req, res) => {
  try {
    const data = req.body; 
    console.log(req.body)
    if (!data.document) {
      return res.status(400).json({
        status: "ERROR",
        message: "Invalid request: 'document' field is required",
      });
    }
    const response = await TouchSensor.create(data.document);

    // Emit real-time update
    io.emit("new-data", response);

    res.status(201).json({
      status: "OK",
      message: "Data posted successfully",
      data: response,
    });
  } catch (error) {
    console.error("❌ Error posting data:", error);
    res.status(500).json({
      status: "ERROR",
      message: error.message,
    });
  }
});

// GET endpoint for fetching all data
app.get("/getData", async (req, res) => {
  try {
    const allData = await TouchSensor.find();
    res.status(200).json({
      status: "OK",
      data: allData,
    });
  } catch (error) {
    console.error("❌ Error fetching data:", error);
    res.status(500).json({
      status: "ERROR",
      message: error.message,
    });
  }
});

// Start Server
async function startServer() {
  try {
    await connectDatabase(); // Ensure database is connected

    httpServer.listen(8080, () => {
      console.log("🚀 Server is running on port 8080");
      console.log("🔗 WebSocket server is ready for real-time updates");
    });
  } catch (error) {
    console.error("❌ Server startup error:", error);
    process.exit(1);
  }
}

startServer();
