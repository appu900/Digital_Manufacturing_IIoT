import mongoose from "mongoose";

const IoTDataSchema = new mongoose.Schema({
  deviceId: { type: String, required: true },
  eventDate: { type: Date, required: true },
  eventTime: { type: String, required: true }, // Alternatively, store as DateTime
  touchDetected: { type: Boolean, required: true },
  receivedAt: { type: Date, required: true }
});

const IoTData = mongoose.model('IoTData', IoTDataSchema);
export default IoTData;
