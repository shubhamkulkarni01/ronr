const mongoose = require('mongoose');
const validator = require('validator');

const { ObjectId } = mongoose.Schema.Types;

const meetingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  host: {
    type: ObjectId,
    ref: 'User'
  },
  date: {
    type: Date, 
    default: Date.now
  }
}, { collection: 'Meetings' });

meetingSchema.index({
  name: 1,
  host: 1
}, {
  unique: true
})

const Meeting = mongoose.model('Meeting', meetingSchema);
module.exports = Meeting;
