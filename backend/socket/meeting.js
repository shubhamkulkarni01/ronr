const Meeting = require('../models/Meeting');
const chalk = require('chalk');

const generateRandomNumber = async () => {
  let code = ''
  for(let i = 0; i < 4; i++)
    code += (Math.random() * 10) | 0

  const collision = await Meeting.findOne({code}) 

  if(!collision)
    return code 

  return generateRandomNumber()
}


module.exports = socket => {
  socket.on('meeting_create', async (data, ack) => {
    const meeting = new Meeting(data);
    meeting.host = socket.user;
    meeting.code = await generateRandomNumber();
    await meeting.save();

    socket.join(meeting.code, () => ack(meeting.code));
  });

  socket.on('meeting_join', async (code, ack) => {
    const meeting = await Meeting.findOneAndUpdate({code}, {$addToSet: {participants: socket.user._id}}, {new: true})
                                 .populate('participants')
    console.log(meeting)

    if(!meeting)
      return ack(false, new Error('No meeting exists with that code'))
    socket.join(code, () => { 
      ack(meeting);
      socket.to(code).emit('meeting_update', meeting)
    })
  });

  socket.on('meeting_leave', async (code, ack) => {
    const meeting = await Meeting.findOne({code})
    if(!meeting)
      return ack(false, new Error('No meeting exists with that code'))
    socket.leave(code, () => ack(true))
  });

  socket.on('meeting_end', async (code, ack) => {
    const meeting = await Meeting.findOne({code})
    if(!meeting)
      return ack(undefined, new Error('No meeting exists with that code'))

    meeting.code = null
    await meeting.save()
    socket.leave(code, () => ack(true))
  });
}
