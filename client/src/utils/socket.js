import React from 'react';
import io from 'socket.io-client';

import Auth from './auth';

const Socket = React.createContext();
export default Socket;

const URL = process.env.NODE_ENV === 'production' || process.env.REACT_APP_VARIABLE === 'docker' ? 
            '/' : 'http://localhost:3001/'

const socket = io(URL, { autoConnect: false });

export const SocketProvider = (props) => {

  const { user } = React.useContext(Auth);

  if(!user)
    return (
    <Socket.Provider value={undefined}>
      {props.children}
    </Socket.Provider>
    )

  socket.connect();

  return (
    <Socket.Provider value={socket}>
      {props.children}
    </Socket.Provider>
  )
}
