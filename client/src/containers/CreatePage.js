import React from 'react';
import { useHistory } from 'react-router-dom';

import Socket from '../utils/socket';
 
import { PrimaryButton } from '../components/Button.js';
import { H1 } from '../components/Text.js';
import { Input } from '../components/Form.js';

function CreatePage() {

  const history = useHistory();
  const socket = React.useContext(Socket);

  const createMeeting = () => {
    const meeting = {name}

    socket.emit('create', meeting, ack => history.push('/home'));
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
