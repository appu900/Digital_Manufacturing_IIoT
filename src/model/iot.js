import mongoose from 'mongoose';

const touchSensorSchema = new mongoose.Schema({
  device_id: {
    type: String,
    required: true,
    trim: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  touch_detected: {
    type: String,
    required: true,
    enum: ['YES', 'NO']  // Restricts values to only YES or NO
  }
}, {
  timestamps: true,  // Adds createdAt and updatedAt fields automatically
  collection: 'touch_sensors'  // Explicitly sets collection name
});

// Create indexes for common query patterns
touchSensorSchema.index({ device_id: 1 });
touchSensorSchema.index({ date: 1 });

// Create the model
const TouchSensor = mongoose.model('TouchSensor', touchSensorSchema);

export default TouchSensor;