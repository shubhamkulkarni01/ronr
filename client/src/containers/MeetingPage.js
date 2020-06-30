import React from 'react';
import { useHistory } from 'react-router-dom';

import socket from '../utils/socket';
 
import { PrimaryButton } from '../components/Button.js';
import { H1 } from '../components/Text.js';
import { Card, Layout, LayoutGroup } from '../components/Card.js';

const MeetingPage = props => {

  const history = useHistory();

  React.useEffect(() => {
    socket.on('meetingUpdate', meeting => {
      setMeeting(meeting)
    })
  }, [])

  const [ meeting, setMeeting ] = React.useState(props.location.state.meeting)

  return (
    <Layout>
      <LayoutGroup style={{height: '92vh', width: '21vw', padding: '0 2vw'}}>
        <Card elevation={5}>
          <H1>
            meeting code: {meeting.code}
          </H1>
        </Card>
        <Card elevation={5}>
          <H1>
            participants: 
          </H1>
          <ul>
            {
              meeting.participants.map((element, key) => 
                <li key={key}>{element.name} ({element.email})</li>
              )
            }
          </ul>
        </Card>
        <Card style={{margin: 'auto auto 3vh auto'}} elevation={5}>
          <H1>
            admin panel: 
          </H1>
          <ul>
            {
              meeting.participants.map((element, key) => 
                <li key={key}>{element.name} ({element.email})</li>
              )
            }
          </ul>
        </Card>
      </LayoutGroup>
      <LayoutGroup style={{height: '92vh', width: '58vw', padding: '0 2vw'}}>
        <H1>
        currently speaking: Shubham Kulkarni (VPF)
        </H1>
      </LayoutGroup>
      <LayoutGroup style={{height: '92vh', width: '21vw', padding: '0 2vw'}}>
        <Card elevation={5}>
          <H1 color='grey!important' style={{marginBottom: '0'}}>
          Speaker's List (closed)
          </H1>
          <hr style={{backgroundColor: 'grey', width: '85%'}}/>
        </Card>
      </LayoutGroup>
    </Layout>
  );
}

export default MeetingPage;
