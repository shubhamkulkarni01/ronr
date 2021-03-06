import React from 'react';
import { useHistory } from 'react-router-dom';

import socket from '../utils/socket';
 
import { PrimaryButton } from '../components/Button.js';
import { H1 } from '../components/Text.js';
import { Input } from '../components/Form.js';

function CreatePage() {

  const history = useHistory();

  const createMeeting = () => {
    const meeting = {name}

    socket.emit('meeting_create', meeting, (response, error) => {
      error || history.push('/meeting', {code: response})
    })
  }

  const [name, setName] = React.useState('');
  
  return (
    <>
        <div style={{margin: '20vh 0vw 7vh 0vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <H1>
            meeting name: 
          </H1>
          <Input value={name} onChange={e => setName(e.target.value)} 
                 type='text' variant='outlined' label='name'/> 
        </div>
        <div style={{textAlign: 'center'}}>
          <PrimaryButton onClick={createMeeting} style={{minWidth: '16vw', fontSize: '6vh'}}>
            create 
          </PrimaryButton>
        </div>
    </>
  );
}

export default CreatePage;
