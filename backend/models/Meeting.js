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
  participants: [{
    type: ObjectId,
    ref: 'User'
  }],
  date: {
    type: Date, 
    default: Date.now
  }, 
  code: {
    type: Number,
    index: {
      unique: true,
      partialFilterExpression: {code: {$type: 'number'}}
    },
    validate(value) {
      if(value !== null && (value > 9999 || value < 0))
        throw new Error('Email is invalid');
    },
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
