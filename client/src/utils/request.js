const request = async (path, opts, headers = false) => {
  const URL = process.env.NODE_ENV === 'production' || process.env.REACT_APP_VARIABLE === 'docker'
    ? '' : 'http://localhost:3001';

  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    credentials: 'include',
    ...opts,
  };

  if (options.body) options.body = JSON.stringify(options.body);

  const response = await fetch(URL + path, options);
  const body = await response.json();
  if (response.status === 404) {
    if (body.code) {
      throw body.code;
    } else {
      throw new Error();
    }
  }

  if (headers) return { body, headers: response.headers };

  return body;
};

export default request;
