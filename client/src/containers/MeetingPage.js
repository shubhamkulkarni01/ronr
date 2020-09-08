import styled from 'styled-components';

import React from 'react';
import { useHistory } from 'react-router-dom';

import socket from '../utils/socket';
 
import { H1 } from '../components/Text.js';
import { CancelButton } from '../components/Button.js';
import { Card, SwipeableLayout, LayoutGroup } from '../components/Card.js';

import Auth from '../utils/auth';

const AdminPanel = styled(Card)`
  margin: 3vh auto 3vh auto;
`;

const MeetingPage = props => {

  const history = useHistory();

  const { user } = React.useContext(Auth)

  const [ meeting, setMeeting ] = React.useState(null)

  React.useEffect(() => {

    console.log(user)

    if(user)
    socket.emit('meeting_join', props.location.state.code, (response, error) => {
      setMeeting(response)
    })

    socket.on('meeting_update', meeting => {
      setMeeting(meeting)
    })
  }, [props.location.state.code, user])

  if(meeting)
  return (
    <>
      <SwipeableLayout>
        <LayoutGroup width='21vw'>
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
          <AdminPanel elevation={5}>
            <H1>
              admin panel
            </H1>
            <CancelButton onClick={event => history.push('/home', {code: props.location.state.code})}>
              leave meeting
            </CancelButton>
          </AdminPanel>
        </LayoutGroup>
        <LayoutGroup width='58vw'>
          <Card elevation={5}>
            <H1>
            currently speaking: Shubham Kulkarni (VPF)
            </H1>
          </Card>
        </LayoutGroup>
        <LayoutGroup width='21vw'>
          <Card elevation={5}>
            <H1 color='grey!important' style={{marginBottom: '0'}}>
            Speaker's List (closed)
            </H1>
            <hr style={{backgroundColor: 'grey', opacity: 0.5, width: '85%'}}/>
          </Card>
        </LayoutGroup>
      </SwipeableLayout>
    </>
  );

  return (
    <H1> Getting things ready... </H1>
    )
}

export default MeetingPage;
