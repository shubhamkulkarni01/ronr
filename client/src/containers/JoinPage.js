import React from 'react';
 
import { PrimaryButton } from '../components/Button.js';
import { H1 } from '../components/Text.js';
import { Input } from '../components/Form.js';

function JoinPage() {

  const [code, setCode] = React.useState('');
  
  return (
    <>
        <div style={{margin: '20vh 0vw 7vh 0vw', display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
          <H1>
            enter meeting code: 
          </H1>
          <Input value={code} onChange={e => setCode(e.target.value)} 
                 type='text' variant='outlined' label='name'/> 
        </div>
        <div style={{textAlign: 'center'}}>
          <PrimaryButton style={{minWidth: '16vw', fontSize: '6vh'}}>
            join 
          </PrimaryButton>
        </div>
    </>
  );
}

export default JoinPage;
