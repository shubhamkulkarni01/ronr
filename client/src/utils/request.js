const send = async (tag, message) => {

  /*
  const URL = process.env.NODE_ENV === 'production' || process.env.REACT_APP_VARIABLE === 'docker' ? 
              '' : 'http://localhost:3001'
              */

  //socket.send(tag, message);

  const response = await fetch('/')
  const body = await response.json()
  if (response.status === 404) {
    if (body.code) {
      throw body.code
    } else {
      throw new Error()
    }
  }


  if(headers)
    return {body, headers: response.headers}

  return body
}

export default request
