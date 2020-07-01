import React from 'react';
import { useHistory } from 'react-router-dom';

import socket from '../utils/socket';
 
import { PrimaryButton } from '../components/Button.js';
import { H1 } from '../components/Text.js';
import { Input } from '../components/Form.js';

function JoinPage() {

  const history = useHistory();

  const [code, setCode] = React.useState('');

  const joinMeeting = () => {
    history.push('/meeting', {code: parseInt(code)})
  }

  const endMeeting = () => {
    socket.emit('meeting_end', parseInt(code), (response, error) => {
      error || history.push({pathname: '/home'})
    })
  }
  
  return (
    <>
        <div style={{margin: '20vh 0vw 7vh 0vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <H1>
            enter meeting code: 
          </H1>
          <Input value={code} onChange={e => setCode(e.target.value)} 
                 type='text' variant='outlined' label='code'/> 
        </div>
        <div style={{textAlign: 'center'}}>
          <PrimaryButton onClick={joinMeeting} style={{minWidth: '16vw', fontSize: '6vh'}}>
            join 
          </PrimaryButton>
        </div>
        <div style={{textAlign: 'center'}}>
          <PrimaryButton onClick={endMeeting} style={{minWidth: '16vw', fontSize: '6vh'}}>
            end 
          </PrimaryButton>
        </div>
    </>
  );
}

export default JoinPage;
