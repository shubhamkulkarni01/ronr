import React from 'react';
import { useHistory, useLocation } from 'react-router-dom'

import db, { GoogleSignOn } from './firebase'
import Cookies from 'universal-cookie'

import request from './request'
import socket from './socket'

const Auth = React.createContext();
export default Auth;

const cookies = new Cookies()

export const AuthProvider = (props) => {

  const sessionCookie = cookies.get('sessionCookie')

  const [user, _setUser] = React.useState(null)

  const history = useHistory()
  const location = useLocation()

  const setUser = (newUser) => {
    _setUser(newUser)
  }

  const handleSignOn = () => {
    db.auth().signInWithPopup(GoogleSignOn).then(() => 
      db.auth().currentUser.getIdToken()
    ).then(token => {
      if (token) {
        return serverLogin(token)
      }
    }).catch(error => {
      console.log(error)
    })
  }

  const handleSignOut = () => {
    setUser(null);
    cookies.remove('sessionCookie')
    history.push('/')
  }

  const serverLogin = React.useCallback(credential => {
    const body = {credential}
    request('/api/user/login', {body}, true).then(response => {
      const { body } = response
      setUser(body)
      socket.emit('identity', cookies.get('sessionCookie'))
      if (location.pathname === '/') {
        history.push('/home')
      }
    }).catch(error => {
      console.log(error)
      history.push('/')
    })
  }, [history, location])

  React.useEffect(() => {
    if (sessionCookie) {
      serverLogin(null)
    } else {
      console.log('session cookie', sessionCookie, 'was null')
      history.push('/')
    }
   // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const exportObj = {
    user, setUser,
    handleSignOn, handleSignOut,
    URL
  }

  return (
    <Auth.Provider value={exportObj}>
      {props.children}
    </Auth.Provider>
  )
}
