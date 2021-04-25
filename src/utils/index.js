const jsonHeader = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

export function checkHttpStatus(response) {
  if (response.status >= 200 && response.status < 300) {
    return response.body
  }
  const error = new Error(response.statusText)
  error.response = response.body
  error.status = response.status
  throw error
}

export function parseJSON(response) {
  return response
    .json()
    .then(body => {
      return {
        status: response.status,
        statusText: response.statusText,
        body,
      }
    })
    .catch(() => {
      return response
    })
}

export function call({ path, method, body, headers, signal }) {
  const serverURL = `${path}`
  return fetch(serverURL, {
    method,
    // credentials: 'include',
    headers,
    signal,
    body: JSON.stringify(body),
  })
    .then(parseJSON)
    .then(checkHttpStatus)
    .catch(error => {
      // No response from the server
      if (typeof error.response === 'undefined') {
        error.response = {
          status: 408,
          message: 'Cannot connect to the server',
        }
      }
      throw error
    })
}

const createJsonHeader = properties => {
  return { ...jsonHeader, ...properties }
}

export function get({ path, headers, signal }) {
  const updatedJsonHeader = createJsonHeader(headers)
  return call({ path, method: 'GET', headers: updatedJsonHeader, signal })
}

export function post({ path, body, headers, signal }) {
  const updatedJsonHeader = createJsonHeader(headers)
  return call({ path, method: 'POST', headers: updatedJsonHeader, body, signal })
}

export function put({ path, body, headers, signal }) {
  const updatedJsonHeader = createJsonHeader(headers)
  return call({ path, method: 'PUT', headers: updatedJsonHeader, body, signal })
}

export function del({ path, body, headers, signal }) {
  const updatedJsonHeader = createJsonHeader(headers)
  return call({ path, method: 'DELETE', headers: updatedJsonHeader, body, signal })
}

export function patch({ path, body, headers, signal }) {
  const updatedJsonHeader = createJsonHeader(headers)
  return call({ path, method: 'PATCH', headers: updatedJsonHeader, body, signal })
}

export const storage = {
  get(k) {
    return localStorage.getItem(k)
  },
  set(k, v) {
    localStorage.setItem(k, v)
  },
  remove(k) {
    localStorage.removeItem(k)
  },
}

export const FETCH_STATUS_IDLE = 'idle'
export const FETCH_STATUS_REQUEST = 'request'
export const FETCH_STATUS_SUCCESS = 'success'
export const FETCH_STATUS_FAILURE = 'failure'

export const isServer = () => typeof window === 'undefined'
